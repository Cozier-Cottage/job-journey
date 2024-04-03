import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import { sankey, sankeyLinkHorizontal, SankeyNodeMinimal, SankeyLinkMinimal } from 'd3-sankey';

// interface ApplicationHistoryNode extends SankeyNodeMinimal<{}, {}> {
//   name: string;
//   category: string;
// }

// interface ApplicationHistoryLink extends SankeyLinkMinimal<ApplicationHistoryNode> {
//   value: number;
// }

// interface ApplicationHistoryData {
//   nodes: ApplicationHistoryNode[];
//   links: ApplicationHistoryLink[];
// }

// interface ApplicationHistoryProps {
//   data: ApplicationHistoryData;
// }
const ApplicationHistory = () => {
  return (
    <div>Hello</div>
  )
}
// const ApplicationHistory: React.FC<ApplicationHistoryProps> = ({ data }) => {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const width = 800;
//   const height = 500;

//   useEffect(() => {
//     if (!svgRef.current) return;

//     const svg = d3.select(svgRef.current);
//     svg.selectAll('*').remove(); // Clear previous chart

//     const sankeyLayout = sankey<ApplicationHistoryNode, ApplicationHistoryLink>()
//       .nodeWidth(20)
//       .nodePadding(10)
//       .size([width, height]);

//     const { nodes, links } = sankeyLayout(data);

//     // Render nodes
//     svg.append('g')
//       .selectAll('rect')
//       .data(nodes)
//       .join('rect')
//       .attr('x', (d) => d.x0)
//       .attr('y', (d) => d.y0)
//       .attr('width', (d) => d.x1 - d.x0)
//       .attr('height', (d) => d.y1 - d.y0)
//       .attr('fill', 'lightblue')
//       .append('title')
//       .text((d) => `${d.name}: ${d.value}`);

//     // Render links
//     svg.append('g')
//       .selectAll('path')
//       .data(links)
//       .join('path')
//       .attr('d', sankeyLinkHorizontal())
//       .attr('stroke', 'gray')
//       .attr('stroke-width', (d) => d.width)
//       .attr('fill', 'none')
//       .append('title')
//       .text((d) => `${d.source.name} → ${d.target.name}: ${d.value}`);
//   }, [data]);

//   return <svg ref={svgRef} width={width} height={height} />;
// };

export default ApplicationHistory;