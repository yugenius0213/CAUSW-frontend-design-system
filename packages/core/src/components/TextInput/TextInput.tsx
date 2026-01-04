import React from 'react';
import { mergeStyles } from '../../utils';
import { useFieldContext } from '../../hooks';
import { TextStyleProps } from '../Text';
import { textStyles } from '../Text/Text.styles';

export interface TextInputProps
  extends React.ComponentProps<'input'>, TextStyleProps {
  /** Icon to display on the left side of input */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side of input */
  rightIcon?: React.ReactNode;
  /** Error state (overrides Field context) */
  error?: boolean;
}

export const TextInput = ({
  id: idProp,
  disabled: disabledProp,
  error: errorProp,
  className,
  leftIcon,
  rightIcon,
  typography = 'body2-sm',
  textColor = 'gray-700',
  ...props
}: TextInputProps) => {
  // Optional Field context - works with or without Field
  const field = useFieldContext();

  const id = idProp ?? field?.id;
  const disabled = disabledProp ?? field?.disabled ?? false;
  const error = errorProp ?? field?.error ?? false;

  const classes = textStyles({ typography, textColor });

  const inputStyles = mergeStyles(
    'w-full',
    'placeholder:text-gray-400',
    'caret-gray-600',
  );

  const wrapperStyles = mergeStyles(
    'flex items-center gap-3',
    'rounded-md p-4',
    'bg-white',
    'focus-within:ring-2 focus-within:ring-gray-600',
    disabled && 'cursor-not-allowed bg-gray-100 opacity-50',
    error && 'ring-2 ring-red-400 focus-within:ring-red-400',
    className,
  );

  return (
    <div className={wrapperStyles}>
      {leftIcon && (
        <span className="flex-shrink-0 text-gray-400">{leftIcon}</span>
      )}
      <input
        id={id}
        disabled={disabled}
        className={mergeStyles(inputStyles, classes)}
        {...props}
      />
      {rightIcon && (
        <span className="flex-shrink-0 text-gray-400">{rightIcon}</span>
      )}
    </div>
  );
};

TextInput.displayName = 'TextInput';
