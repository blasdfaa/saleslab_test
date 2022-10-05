import classNames from 'classnames';
import React from 'react';

const PERIOD_OPTIONS = ['Month', 'Week', 'Yesterday', 'Today'];

const PipelinePeriodToggle = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<number[]>([]);

  const handleToggleOption = (index: number): void => {
    setSelectedOptions(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // remove item
          : [...prev, index], // add item
    );
  };

  return (
    <ul className="flex space-x-[40px]">
      {PERIOD_OPTIONS.map((option, index) => (
        <li key={option}>
          <button
            className={classNames('text-sm text-[#AAB7D4] hover:text-[#7B8AAB]', {
              'text-[#3D8FEC] hover:text-[#3D8FEC]': selectedOptions.includes(index),
            })}
            type="button"
            onClick={() => handleToggleOption(index)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PipelinePeriodToggle;
