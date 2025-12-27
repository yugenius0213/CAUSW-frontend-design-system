export type TextVariant =
  | 'caption'
  | 'body2'
  | 'body'
  | 'subtitle'
  | 'title'
  | 'head'
  | 'fixed';

export type TextSize = 'sm' | 'md';
export type FixedSize = 12 | 14 | 15 | 16 | 18 | 20 | 24;

type StyleConfig = {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
};

// Typography 스타일 매핑
const variantStyles: Record<
  Exclude<TextVariant, 'fixed'>,
  Record<TextSize, { normal: StyleConfig; point: StyleConfig }>
> = {
  caption: {
    sm: {
      normal: {
        fontSize: 'text-[12px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-normal',
      },
      point: {
        fontSize: 'text-[12px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-semibold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-[14px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-[14px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-semibold',
      },
    },
  },
  body2: {
    sm: {
      normal: {
        fontSize: 'text-[14px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-normal',
      },
      point: {
        fontSize: 'text-[14px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-semibold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-[16px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-[16px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-semibold',
      },
    },
  },
  body: {
    sm: {
      normal: {
        fontSize: 'text-[16px]',
        lineHeight: 'leading-[150%]',
        fontWeight: 'font-normal',
      },
      point: {
        fontSize: 'text-[16px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-[18px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-[18px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
    },
  },
  subtitle: {
    sm: {
      normal: {
        fontSize: 'text-[18px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-[18px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-[20px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-medium',
      },
      point: {
        fontSize: 'text-[20px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
    },
  },
  title: {
    sm: {
      normal: {
        fontSize: 'text-[22px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
      point: {
        fontSize: 'text-[22px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-[32px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
      point: {
        fontSize: 'text-[32px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
    },
  },
  head: {
    sm: {
      normal: {
        fontSize: 'text-[30px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
      point: {
        fontSize: 'text-[30px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
    },
    md: {
      normal: {
        fontSize: 'text-[48px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
      point: {
        fontSize: 'text-[48px]',
        lineHeight: 'leading-[160%]',
        fontWeight: 'font-bold',
      },
    },
  },
};

// Fixed variant 스타일
const fixedStyles: Record<FixedSize, StyleConfig> = {
  12: {
    fontSize: 'text-[12px]',
    lineHeight: 'leading-[160%]',
    fontWeight: 'font-medium',
  },
  14: {
    fontSize: 'text-[14px]',
    lineHeight: 'leading-[160%]',
    fontWeight: 'font-medium',
  },
  15: {
    fontSize: 'text-[15px]',
    lineHeight: 'leading-[160%]',
    fontWeight: 'font-semibold',
  },
  16: {
    fontSize: 'text-[16px]',
    lineHeight: 'leading-[160%]',
    fontWeight: 'font-medium',
  },
  18: {
    fontSize: 'text-[18px]',
    lineHeight: 'leading-[160%]',
    fontWeight: 'font-medium',
  },
  20: {
    fontSize: 'text-[20px]',
    lineHeight: 'leading-[160%]',
    fontWeight: 'font-semibold',
  },
  24: {
    fontSize: 'text-[24px]',
    lineHeight: 'leading-[160%]',
    fontWeight: 'font-bold',
  },
};

export interface TextStylesOptions {
  variant: TextVariant;
  size: TextSize;
  fixedSize?: FixedSize;
  point: boolean;
}

export function textStyles({
  variant,
  size,
  fixedSize,
  point,
}: TextStylesOptions): string {
  const baseStyles = 'font-sans';
  let config: StyleConfig;

  if (variant === 'fixed' && fixedSize) {
    config = fixedStyles[fixedSize];
  } else if (variant !== 'fixed') {
    const variantConfig = variantStyles[variant][size];
    config = point ? variantConfig.point : variantConfig.normal;
  } else {
    // fallback for fixed without fixedSize
    config = fixedStyles[16];
  }

  return `${baseStyles} ${config.fontSize} ${config.lineHeight} ${config.fontWeight}`.trim();
}
