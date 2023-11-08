import { useEffect, useRef } from "react";
import type { IData, IBarPlotData, IAPIData } from "../../types";
import {
  axisBottom,
  axisLeft,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select
} from "d3";


interface BarChartProps {
  data: IData[];
}

interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}

interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}

interface BarsProps {
  data: IData[];
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
}

function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} />;
}

function Bars({ data, height, scaleX, scaleY }: BarsProps) {
  return (
    <>
       {data.map(({ value, label }) => (
         <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill="teal"
        />
      ))
      }
    </>
  );
}

export function BarChart({ bar_data }: IAPIData) {
  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;
  const dataArray: BarChartProps = {data:[]};
  (Object.keys(bar_data) as (keyof typeof bar_data)[]).forEach((key,index) => {
    const keyValue: IData = {label: key, value: bar_data[key]};
    dataArray.data.push(keyValue);
  });

  const scaleX = scaleBand()
    .domain(dataArray.data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain([0, Math.max(...dataArray.data.map(({ value }) => value))])
    .range([height, 0]);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <AxisLeft scale={scaleY} />
        <Bars data={dataArray.data} height={height} scaleX={scaleX} scaleY={scaleY} />
      </g>
    </svg>
  );
}
