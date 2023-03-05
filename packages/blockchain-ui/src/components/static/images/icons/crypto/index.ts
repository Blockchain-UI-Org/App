import { CryptoSymbols } from '../../../types/crypto';

import { default as APE } from './APE.svg';
import { default as BTC } from './BTC.svg';
import { default as DAI } from './DAI.svg';
import { default as ASTR } from './ASTR.svg';
import { default as CDOT } from './CDOT.svg';
import { default as DOT } from './DOT.svg';
import { default as CKSM } from './CKSM.svg';
import { default as ETH } from './ETH.svg';
import { default as fallback } from './fallback.svg';
import { default as GLMR } from './GLMR.svg';
import { default as HKO } from './HKO.svg';
import { default as KAR } from './KAR.svg';
import { default as KSM } from './KSM.svg';
import { default as KUSD } from './KUSD.svg';
import { default as LKSM } from './LKSM.svg';
import { default as OMNI } from './OMNI.svg';
import { default as PARA } from './PARA.svg';
import { default as SDOT } from './SDOT.svg';
import { default as SKSM } from './SKSM.svg';
import { default as SOMNI } from './SOMNI.svg';
import { default as SOL } from './SOL.svg';
import { default as USDC } from './USDC.svg';
import { default as USDT } from './USDT.svg';
import { FunctionComponent, SVGAttributes } from 'react';

export const cryptoIcons: Record<CryptoSymbols, FunctionComponent<SVGAttributes<SVGElement>>> = {
  APE,
  BTC,
  DAI,
  ASTR,
  CDOT,
  DOT,
  CKSM,
  ETH,
  fallback,
  GLMR,
  HKO,
  KAR,
  KSM,
  KUSD,
  LKSM,
  OMNI,
  PARA,
  SOL,
  SDOT,
  SKSM,
  SOMNI,
  USDC,
  USDT,
};
