import * as React from 'react';
import { Primitive } from '../Primitive';
import {
  avatarRootStyles,
  avatarImageStyles,
  avatarFallbackStyles,
  resolveAvatarPreset,
  type AvatarVariant,
} from './Avatar.styles';
import { mergeStyles } from '../../utils';
import DEFAULT_AVATAR_SRC from '../../assets/avatar/default.jpeg'; //default이미지 나오면 svg파일로 수정
export interface AvatarProps extends React.ComponentPropsWithoutRef<'span'> {
  variant?: AvatarVariant;
  src?: string;
  fallback?: string;
  asChild?: boolean;
}

export const Avatar = ({
  variant = 'md',
  src,
  fallback,
  asChild,
  className,
  ...props
}: AvatarProps) => {
  const { size, radius } = resolveAvatarPreset(variant);

  const hasSrc = !!src?.trim();
  const shouldShowFallback = !hasSrc && !!fallback;
  const finalSrc = hasSrc ? src : DEFAULT_AVATAR_SRC;

  return (
    <Primitive.span
      asChild={asChild}
      className={mergeStyles(avatarRootStyles(), className)}
      style={{ width: size, height: size, borderRadius: radius }}
      {...props}
    >
      {shouldShowFallback ? (
        <span
          className={avatarFallbackStyles()}
          style={{ borderRadius: radius }}
        >
          {fallback.slice(0, 2)}
        </span>
      ) : (
        <img
          src={finalSrc}
          alt=""
          className={avatarImageStyles()}
          style={{ borderRadius: radius }}
        />
      )}
    </Primitive.span>
  );
};
