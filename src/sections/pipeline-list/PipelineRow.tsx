import React from 'react';

import PipeLineActionCard from '~/components/PipeLineActionCard';
import type { PipeLineActionCardType } from '~/shared/interface/pipeline';

type PipelineRowProps = {
  stages: PipeLineActionCardType[];
};

const PipelineRow: React.FC<PipelineRowProps> = ({ stages = [] }) => {
  return (
    <div className="flex space-x-4">
      {stages.map((stage) => (
        <PipeLineActionCard {...stage} key={stage.type} />
      ))}
    </div>
  );
};

export default PipelineRow;
