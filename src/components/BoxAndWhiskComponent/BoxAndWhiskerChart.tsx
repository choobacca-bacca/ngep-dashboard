import { useEffect, useRef, useMemo } from "react";
import type { IBoxPlotData2, IAPIData, IData } from "../../types";
import {
    axisBottom,
    axisLeft,
    ScaleBand,
    scaleBand,
    ScaleLinear,
    scaleLinear,
    select
  } from "d3";
import { AxisBottom, AxisBottomProps } from "./AxisBottom";
import {AxisLeft, AxisLeftProps} from "./AxisLeft";
import { stringify } from "querystring";

  const TICK_LENGTH = 10;
  const STROKE_WIDTH = 2;

  interface VerticalBoxProps {
    date: string;
    data: IBoxPlotData2,
    scaleX: AxisBottomProps["scale"];
    scaleY: AxisLeftProps["scale"];
    width: number;
    stroke: string;
    fill: string;
  };
  
function VerticalBox ({date, data, scaleX, scaleY, width, stroke, fill,}: VerticalBoxProps) {
  const center = width/2;
  const rect_width = scaleX.bandwidth();
    return (
      <g>
        <rect
            // key={`bar-${date}`}
            x={width/2 - scaleX.bandwidth()/2}
            y={scaleY(data.q3)}
            width={scaleX.bandwidth()}
            height={scaleY(data.q1) - scaleY(data.q3)}
            stroke={stroke}
            fill={fill}
            strokeWidth={STROKE_WIDTH}
        />
        <line
          x1={center + rect_width}
          width={rect_width}
          y1={scaleY(data.median)}
          y2={scaleY(data.median)}
          stroke={stroke}
          strokeWidth={STROKE_WIDTH}
          transform={`translate(${scaleX.bandwidth()}, 0)`}
        />
        <line
          x1={center- scaleX.bandwidth()/2}
          x2={center- scaleX.bandwidth()/2}
          y1={scaleY(data.max)}
          y2={scaleY(data.min)}
          stroke={stroke}
          strokeWidth={STROKE_WIDTH}
          transform={`translate(${scaleX.bandwidth()/2}, 0)`}
        />
      </g>
    );
  };

export function BoxPlotChart ({ box_data,date }: IAPIData){
    const margin = { top: 10, right: 0, bottom: 20, left: 30 };
    const width = 500 - margin.left - margin.right;
    const center = width/2;
    const height = 300 - margin.top - margin.bottom;
    const date_scale= String(date);
    console.log(date_scale);
    const scaleX = scaleBand()
    .domain(date_scale)
    .range([0, width])
    .padding(0.5);
    const scaleY = scaleLinear()
    .domain([0, box_data.max])
    .range([height, 0]);
    const verticalBoxData: VerticalBoxProps = {date: date_scale, data: box_data, scaleX: scaleX, scaleY: scaleY, width: width, stroke: "black", fill: "#ead4f5"}

    return (
    <div>
        <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} /> */}
            <AxisLeft scale={scaleY}></AxisLeft>
            <VerticalBox {...verticalBoxData}/>
        </g>
        </svg>

    </div>
    
    )
  };