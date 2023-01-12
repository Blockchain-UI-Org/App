import { FC } from 'react';
import { useTheme } from 'theme';
import Image from '../image/image';
import { CryptoSymbols } from '../static/types/crypto';
import { IconSizes } from '../static/types/icons';
// import { getIconSize } from 'theme/icons';

export interface IconProps {
  name: string;
  size?: keyof IconSizes;
  src?: string;
}

export const Icon: FC<IconProps> = ({ size = 'medium', name, src }) => {

  const theme = useTheme();
  const {regular} = theme.components.Icons.sizes;
  return (
    <Image
      name={name}
      src={src}
      width={regular[size]}
      height={regular[size]}
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
  const theme = useTheme();
  const {crypto} = theme.components.Icons.sizes;
  return (
    <Image
      name={cryptoSymbol}
      src={src}
      width={crypto[size]}
      height={crypto[size]}
      iconType="crypto"
    />
  );
};
