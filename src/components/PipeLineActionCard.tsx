import cn from 'classnames';
import React from 'react';

import { PIPELINE_COLOR, PIPELINE_TYPE } from '~/constants';
import type { PipeLineActionCardType } from '~/shared/interface/pipeline';
import { getPriceWithSpace } from '~/utils/format';

import SvgIcon from './SvgIcon';

const PipeLineActionCard: React.FC<PipeLineActionCardType> = ({ type, price, count }) => {
  return (
    <div className="flex bg-white shadow-card rounded-lg p-[18px] min-h-[90px] w-[294px]">
      <div
        className={cn('w-[58px] h-[58px] rounded-xl flex justify-center items-center mr-4 shrink-0', {
          'bg-purple': PIPELINE_TYPE[type].color === PIPELINE_COLOR.purple,
          'bg-success': PIPELINE_TYPE[type].color === PIPELINE_COLOR.success,
          'bg-error': PIPELINE_TYPE[type].color === PIPELINE_COLOR.error,
          'bg-blue': PIPELINE_TYPE[type].color === PIPELINE_COLOR.blue,
        })}
      >
        <SvgIcon name={PIPELINE_TYPE[type].iconId} className="text-white" />
      </div>

      <div className="text-lg overflow-hidden">
        <p
          className={cn('font-bold truncate', {
            'text-purple': PIPELINE_TYPE[type].color === PIPELINE_COLOR.purple,
            'text-success': PIPELINE_TYPE[type].color === PIPELINE_COLOR.success,
            'text-error': PIPELINE_TYPE[type].color === PIPELINE_COLOR.error,
            'text-blue': PIPELINE_TYPE[type].color === PIPELINE_COLOR.blue,
          })}
        >
          {PIPELINE_TYPE[type].title}
        </p>

        {price ? (
          <p className="truncate">
            <span className="font-bold">{count} |</span> € {getPriceWithSpace(price)}
          </p>
        ) : (
          <span className="font-bold">{count}</span>
        )}
      </div>
    </div>
  );
};

export default PipeLineActionCard;
