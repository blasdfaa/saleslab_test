import cn from 'classnames';
import React from 'react';
import { createPortal } from 'react-dom';

import SvgIcon from './SvgIcon';

type Option = {
  readonly label: string;
  readonly value: string | number;
};

type Coords = {
  readonly left: number;
  readonly top: number;
};

type DropdownProps = {
  readonly options: Option[];
  onChange?: (value: Option['value']) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options = [], onChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState<number>(0);
  const [coords, setCoords] = React.useState<Coords | null>(null);

  const firstOptionRef = React.useRef<HTMLLIElement | null>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const box = event.currentTarget?.getBoundingClientRect(); // П0ри желании можно вынести в функцию и обновлять также при ресайзе окна

    setCoords({
      left: box.left,
      top: box.top + box.height,
    });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (index: number) => {
    if (index === selectedOptionIndex) return;

    setSelectedOptionIndex(index);
    handleClose();

    onChange && onChange(options[index].value);
  };

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent) => {
    if (index === selectedOptionIndex) return;

    switch (event.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        event.preventDefault();

        setSelectedOptionIndex(index);
        handleClose();
        break;
      default:
        break;
    }
  };

  return (
    <div className="text-[#555555] text-sm inline-block">
      <button
        className="w-full flex"
        type="button"
        onClick={handleOpen}
        onKeyDown={() => {
          firstOptionRef.current?.focus();
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{options[selectedOptionIndex].label}</span>
        <SvgIcon
          name="arrow"
          className={cn('ml-1 transition-transform', {
            'rotate-180': open,
          })}
        />
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0">
            {/* Можно доработать и добавить фокус трап для доступности */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div className="fixed inset-0 -z-[1]" onClick={handleClose} aria-hidden="true"></div>
            <ul
              className={cn(
                'absolute left-0 top-6 flex flex-col transition-all text-sm shadow-card bg-white w-[167px] rounded-lg overflow-hidden animate-fade-in-down',
                {
                  'opacity-0 -translate-y-[10px]': !open,
                  'opacity-100 translate-y-0': open,
                },
              )}
              role="listbox"
              tabIndex={-1}
              style={{
                top: coords?.top,
                left: coords?.left,
                transformOrigin: `0px 0px`,
              }}
            >
              {options.map(({ label }, index) => {
                const isSelected = index === selectedOptionIndex;

                return (
                  <li
                    ref={index === 0 ? firstOptionRef : undefined}
                    className={cn(
                      'w-full min-h-[34px] px-4 py-2 text-left hover:bg-[#D4DBE9] hover:bg-opacity-25 hover:cursor-pointer',
                      {
                        'bg-[#D4DBE9] bg-opacity-25 text-opacity-25 hover:cursor-default': isSelected,
                      },
                    )}
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={0}
                    onClick={() => handleSelect(index)}
                    onKeyDown={handleKeyDown(index)}
                    key={label}
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default Dropdown;
