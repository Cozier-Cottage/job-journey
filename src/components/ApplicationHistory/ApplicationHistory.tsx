// 

import React from 'react';
import { ResponsiveSankey } from '@nivo/sankey';

const ApplicationHistory = () => {
  const data = {
    nodes: [
      { id: 'Jobs applied to' },
      { id: 'No replies' },
      { id: 'Rejections' },
      { id: 'Replies' },
      { id: 'Rejected by me' },
      { id: 'Rejected by company' },
      { id: 'Replied too late' },
      { id: 'Initial interviews' },
      { id: 'No task required' },
      { id: 'Task requested' },
      { id: 'Rejected' },
      { id: 'Final interview' },
      { id: 'Rejected before offer' },
      { id: 'Offer received' },
      { id: 'Accepted' },
    ],
    links: [
      { source: 'Jobs applied to', target: 'No replies', value: 12 },
      { source: 'Jobs applied to', target: 'Rejections', value: 5 },
      { source: 'Jobs applied to', target: 'Replies', value: 15 },
      { source: 'Replies', target: 'Rejected by me', value: 2 },
      { source: 'Replies', target: 'Rejected by company', value: 2 },
      { source: 'Replies', target: 'Replied too late', value: 2 },
      { source: 'Replies', target: 'Initial interviews', value: 9 },
      { source: 'Initial interviews', target: 'No task required', value: 1 },
      { source: 'Initial interviews', target: 'Task requested', value: 4 },
      { source: 'Initial interviews', target: 'Rejected', value: 4 },
      { source: 'Task requested', target: 'Final interview', value: 5 },
      { source: 'Final interview', target: 'Rejected before offer', value: 3 },
      { source: 'Final interview', target: 'Offer received', value: 2 },
      { source: 'Offer received', target: 'Accepted', value: 1 },
      { source: 'Offer received', target: 'Rejected', value: 1 },
    ],
  };

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <ResponsiveSankey
        data={data}
        margin={{ top: 20, right: 130, bottom: 20, left: 100 }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.5}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        linkOpacity={0.8}
        linkHoverOthersOpacity={0.2}
        linkContract={3}
        align="justify"
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={16}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      />
    </div>
  );
};

export default ApplicationHistory;