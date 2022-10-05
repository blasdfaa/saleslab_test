import type { PIPELINE_TYPE } from '~/constants';

export type PipeLineActionCardType = {
  type: keyof typeof PIPELINE_TYPE; // Данный тип к примеру может идти с бэка и автоматом мапится в цвет/иконку/заголовок
  price?: number;
  count: number;
};
