import React from 'react';
import { mergeStyles } from '../../utils';
import { useFieldContext } from '../../hooks';

export interface TextInputProps extends React.ComponentProps<'input'> {
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
  ...props
}: TextInputProps) => {
  // Optional Field context - works with or without Field
  const field = useFieldContext();

  const id = idProp ?? field?.id;
  const disabled = disabledProp ?? field?.disabled ?? false;
  const error = errorProp ?? field?.error ?? false;

  const inputStyles = mergeStyles(
    'flex-1 w-full bg-transparent outline-none',
    'typo-body-sm',
    'text-gray-700 placeholder:text-gray-400',
    'caret-gray-600',
  );

  const wrapperStyles = mergeStyles(
    'flex items-center gap-3',
    'rounded-md px-4 py-3',
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
      <input id={id} disabled={disabled} className={inputStyles} {...props} />
      {rightIcon && (
        <span className="flex-shrink-0 text-gray-400">{rightIcon}</span>
      )}
    </div>
  );
};

TextInput.displayName = 'TextInput';
