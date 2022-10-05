import type { PipeLineActionCardType } from '~/shared/interface/pipeline';

import pipelines from '../../../__mocks__/pipelines.json';
import PipelinePeriodToggle from './PipelinePeriodToggle';
import PipelineRow from './PipelineRow';
import PipelinesSelect from './PipelinesSelect';

const PipelineList = () => {
  return (
    <div className="flex flex-col pt-9">
      <div className="flex justify-between px-4 pb-4">
        <PipelinesSelect />
        <PipelinePeriodToggle />
      </div>

      <div className="space-y-4">
        {pipelines.map(({ id, stages }) => (
          <PipelineRow key={id} stages={stages as PipeLineActionCardType[]} />
        ))}
      </div>
    </div>
  );
};

export default PipelineList;
