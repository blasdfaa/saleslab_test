export const PIPELINE_COLOR = {
  purple: 'purple',
  success: 'success',
  error: 'error',
  blue: 'blue',
};

export const PIPELINE_TYPE = {
  idleCount: {
    iconId: 'total',
    title: 'Total Leads and Deals',
    color: PIPELINE_COLOR.purple,
  },
  idleTask: {
    iconId: 'total-tasks',
    title: 'Total tasks',
    color: PIPELINE_COLOR.purple,
  },
  successCount: {
    iconId: 'check',
    title: 'Won',
    color: PIPELINE_COLOR.success,
  },
  successTask: {
    iconId: 'success-tasks',
    title: 'Completed tasks',
    color: PIPELINE_COLOR.success,
  },
  failedCount: {
    iconId: 'close',
    title: 'Lost',
    color: PIPELINE_COLOR.error,
  },
  failedTask: {
    iconId: 'expired-tasks',
    title: 'Expired tasks',
    color: PIPELINE_COLOR.error,
  },
  emptyCount: {
    iconId: 'user',
    title: 'New leads',
    color: PIPELINE_COLOR.blue,
  },
  emptyTask: {
    iconId: 'empty-tasks',
    title: 'No tasks',
    color: PIPELINE_COLOR.blue,
  },
};
