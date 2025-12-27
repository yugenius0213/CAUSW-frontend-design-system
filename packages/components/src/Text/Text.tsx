import React from 'react';
import { textStyles } from './Text.styles';
import type { TextVariant, TextSize, FixedSize } from './Text.styles';

export type { TextVariant, TextSize, FixedSize };

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  size?: TextSize;
  fixedSize?: FixedSize;
  point?: boolean;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label';
  children: React.ReactNode;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = 'body',
      size = 'sm',
      fixedSize,
      point = false,
      as: Component = 'span',
      children,
      className = '',
      ...props
    },
    ref,
  ) => {
    const classes = textStyles({ variant, size, fixedSize, point });

    return React.createElement(
      Component,
      {
        ref,
        className: `${classes} ${className}`.trim(),
        ...props,
      },
      children,
    );
  },
);

Text.displayName = 'Text';
