import type { ComponentProps } from 'react';
import React from 'react';

type SvgIconOwnProps = {
  name: string;
  prefix?: string;
  width?: number;
  height?: number;
};

type SvgIconProps = SvgIconOwnProps & Omit<ComponentProps<'svg'>, keyof SvgIconOwnProps>;

const SvgIcon: React.FC<SvgIconProps> = ({ name, prefix = 'ic', width = 24, height = 24, ...props }) => {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg {...props} aria-hidden="true" focusable="false" width={width} height={height}>
      <use href={symbolId} />
    </svg>
  );
};

export default SvgIcon;
