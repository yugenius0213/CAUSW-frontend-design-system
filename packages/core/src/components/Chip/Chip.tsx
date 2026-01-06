import * as React from 'react';
import { mergeStyles } from '../../utils';
import { Primitive } from '../Primitive';
import {
  chipStyles,
  chipIconStyles,
  type ChipSize,
  type ChipColor,
  type ChipAppearance,
  ChipVariant,
} from './Chip.styles';

export interface ChipProps extends React.ComponentPropsWithoutRef<'span'> {
  size?: ChipSize;
  variant?: ChipVariant;
  appearance?: ChipAppearance;
  color?: ChipColor;
  disabled?: boolean;
  selected?: boolean;
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  /** X 클릭용 (선택) */
  onRemove?: () => void;
}

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Chip = ({
  size = 'md',
  variant = 'default',
  appearance = 'solid',
  color = 'lightgray',
  disabled = false,
  selected = false,
  asChild,
  className,
  leftIcon,
  rightIcon,
  onRemove,
  children,
  ...props
}: ChipProps) => {
  const classes = chipStyles({
    size,
    appearance,
    color,
    disabled,
    selected,
  });

  const presetRightIcon =
    variant === 'dropdown' ? (
      <ChevronDownIcon />
    ) : variant === 'closable' ? (
      <CloseIcon />
    ) : null;

  return (
    <Primitive.span
      asChild={asChild}
      aria-disabled={disabled || undefined}
      className={mergeStyles(classes, className)}
      {...props}
    >
      <span className="inline-flex items-center gap-1">
        {leftIcon}

        <span>{children}</span>

        {(rightIcon ?? presetRightIcon) && (
          <span
            className={chipIconStyles(disabled)}
            onClick={(e) => {
              if (variant === 'closable' && onRemove) {
                e.stopPropagation();
                onRemove();
              }
            }}
          >
            {rightIcon ?? presetRightIcon}
          </span>
        )}
      </span>
    </Primitive.span>
  );
};

Chip.displayName = 'Chip';
