import { useEffect, useRef } from "react";
import {
    axisLeft,
    ScaleLinear,
    select
  } from "d3";

export interface AxisLeftProps {
    scale: ScaleLinear<number, number, never>;
  }

export function AxisLeft({ scale }: AxisLeftProps) {
    const ref = useRef<SVGGElement>(null);
  
    useEffect(() => {
      if (ref.current) {
        select(ref.current).call(axisLeft(scale));
      }
    }, [scale]);
  
    return <g ref={ref} />;
  }