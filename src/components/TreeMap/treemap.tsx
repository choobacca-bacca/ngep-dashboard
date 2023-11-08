import { useRef, useEffect } from 'react';
import treemap from 'd3';
import { ITreemapData } from '../../types';

export function Treemap(data: ITreemapData, width: number, height: number) {
  const svgRef = useRef(null);

  function renderTreemap() {
    const svg = treemap.select(svgRef.current);

    svg.attr('width', width).attr('height', height);

    // const root = treemap
    //   .hierarchy(data)
    //   .sum((d) => d.value)
    //   .sort((a, b) => b.value - a.value);

    // const treemapRoot = treemap.treemap().size([width, height]).padding(1)(root);
  }

  useEffect(() => {
    renderTreemap();
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
}