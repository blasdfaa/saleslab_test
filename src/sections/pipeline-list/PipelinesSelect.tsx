import Dropdown from '~/components/Dropdown';

const OPTIONS = [
  { label: 'All Pipelines', value: 'All Pipelines' },
  { label: 'Sales', value: 'Sales' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Partners', value: 'Partners' },
];

const PipelinesSelect = () => {
  return <Dropdown options={OPTIONS} />;
};

export default PipelinesSelect;
