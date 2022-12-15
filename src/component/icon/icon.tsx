import { FC } from 'react';
import Image from '../image/image';
import { CryptoSymbols } from '../static/types/crypto';
import { IconSizes } from '../static/types/icons';
import { getIconSize } from '../theme/icons';

export interface IconProps {
  name: string;
  size?: keyof IconSizes;
  src?: string;
}

export const Icon: FC<IconProps> = ({ size = 'medium', name, src }) => {
  return (
    <Image
      name={name}
      src={src}
      width={getIconSize['regular'][size]}
      height={getIconSize['regular'][size]}
      iconType="regular"
    />
  );
};

export interface CryptoIconProps {
  cryptoSymbol: CryptoSymbols;
  size?: keyof IconSizes;
  src?: string;
}

export const CryptoIcon: FC<CryptoIconProps> = ({ size = 'medium', src, cryptoSymbol }) => {
  return (
    <Image
      name={cryptoSymbol}
      src={src}
      width={getIconSize['crypto'][size]}
      height={getIconSize['crypto'][size]}
      iconType="crypto"
    />
  );
};
