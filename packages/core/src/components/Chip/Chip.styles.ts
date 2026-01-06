import { mergeStyles } from '../../utils';
export type ChipVariant = 'default' | 'dropdown' | 'closable';
export type ChipSize = 'sm' | 'md';
export type ChipAppearance = 'solid' | 'outline';
export type ChipColor = 'white' | 'lightgray' | 'darkgray';

const baseStyles =
  'inline-flex items-center gap-1 rounded-full select-none whitespace-nowrap transition-colors';

const sizeStyles: Record<ChipSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

const colorStyles: Record<ChipColor, Record<ChipAppearance, string>> = {
  white: {
    solid: 'bg-white text-gray-700',
    outline: 'border border-gray-300 text-gray-700',
  },
  lightgray: {
    solid: 'bg-[#F5F6F8] text-gray-600',
    outline: 'border border-gray-300 text-gray-600',
  },
  darkgray: {
    solid: 'bg-[#364153] text-white',
    outline: 'border border-[#364153] text-[#364153]',
  },
};

export interface ChipStylesOptions {
  size: ChipSize;
  appearance: ChipAppearance;
  color: ChipColor;
  disabled?: boolean;
  selected?: boolean;
}

export function chipStyles({
  size,
  appearance,
  color,
  disabled = false,
  selected = false,
}: ChipStylesOptions) {
  return mergeStyles(
    baseStyles,
    sizeStyles[size],
    colorStyles[color][appearance],
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-default',
    selected ? 'ring-2 ring-gray-600 ring-offset-1' : '',
  );
}

export function chipIconStyles(disabled?: boolean) {
  return mergeStyles(
    'ml-1 inline-flex items-center justify-center',
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
  );
}
