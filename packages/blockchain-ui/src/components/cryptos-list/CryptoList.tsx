import { AaveLogo } from "./crypto-icons/AaveLogo";
import { ApeCoinLogo } from "./crypto-icons/ApeCoinLogo";
import { BATLogo } from "./crypto-icons/BATLogo";
import { BNBLogo } from "./crypto-icons/BNBLogo";
import { BTCLogo } from "./crypto-icons/BTCLogo";
import { BUSDLogo } from "./crypto-icons/BUSDLogo";
import { ChainLinkLogo } from "./crypto-icons/ChainLinkLogo";
import { CompLogo } from "./crypto-icons/CompLogo";
import { CosmosLogo } from "./crypto-icons/CosmosLogo";
import { DAILogo } from "./crypto-icons/DAILogo";
import { INJLogo } from "./crypto-icons/INJLogo";
import { MaticLogo } from "./crypto-icons/MaticLogo";
import { OneInchLogo } from "./crypto-icons/OneInchLogo";
import { TetherLogo } from "./crypto-icons/TetherLogo";
import { TheGraphLogo } from "./crypto-icons/TheGraphLogo";
import { TUSDLogo } from "./crypto-icons/TUSDLogo";
import { UniswapLogo } from "./crypto-icons/UniswapLogo";
import { USDCLogo } from "./crypto-icons/USDCLogo";
import { WrappedBitcoinLogo } from "./crypto-icons/WrappedBitcoinLogo";
import { YearnFiLogo } from "./crypto-icons/YearnFiLogo";

type INativeToken = {
  name: string;
  symbol: string;
  nativeToken: boolean;
  website: string;
  network: string;
  nativeWrapper?: string;
  icon: React.FC<any>;
};

type ERCToken = {
  name: string;
  symbol: string;
  icon: React.FC<any>;
  website: string;
  contract: Partial<{
    ethereum: string;
    polygon: string;
    avalanche: string;
    bsc: string;
    solana: string;
  }>;
};
type ICrypto = INativeToken | ERCToken;

export const listOfCryptos: { [x: string]: ICrypto } = {
  bitcoin: {
    name: "bitcoin",
    symbol: "BTC",
    nativeToken: true,
    website: "https://www.bitcoin.org/",
    network: "bitcoin",
    icon: BTCLogo,
  },
  tether: {
    name: "tether",
    symbol: "USDT",
    website: "https://tether.to/",
    icon: TetherLogo,
    contract: {
      ethereum: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      polygon: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      solana: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    },
  },
  wbtc: {
    name: "Wrapped Bitcoin",
    symbol: "wbtc",
    icon: WrappedBitcoinLogo,
    website: "https://www.wbtc.network/",
    contract: {
      ethereum: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      polygon: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      avalanche: "0x50b7545627a5162f82a992c33b87adc75187b218",
    },
  },
  chainlink: {
    name: "Chainlink",
    symbol: "LINK",
    icon: ChainLinkLogo,
    website: "https://chain.link/",
    contract: {
      ethereum: "0x514910771af9ca656af840dff83e8264ecf986ca",
      polygon: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
      avalanche: "0x50b7545627a5162f82a992c33b87adc75187b218",
    },
  },
  apecoin: {
    name: "ApeCoin",
    symbol: "APE",
    website: "https://apecoin.com/",
    icon: ApeCoinLogo,
    contract: {
      ethereum: "0x4d224452801aced8b2f0aebe155379bb5d594381",
      polygon: "0xb7b31a6bc18e48888545ce79e83e06003be70930",
    },
  },
  thegraph: {
    name: "The Graph",
    symbol: "GRT",
    icon: TheGraphLogo,
    website: "https://thegraph.com/",
    contract: {
      ethereum: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
      polygon: "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
      avalanche: "0x8a0cac13c7da965a312f08ea4229c37869e85cb9",
    },
  },
  trueusd: {
    name: "True USD",
    symbol: "TUSD",
    icon: TUSDLogo,
    website: "https://tusd.io/",
    contract: {
      ethereum: "0x0000000000085d4780b73119b644ae5ecd22b376",
      polygon: "0x2e1ad108ff1d8c782fcbbb89aad783ac49586756",
      avalanche: "0x1c20e891bab6b1727d14da358fae2984ed9b59eb",
    },
  },
  aave: {
    name: "Aave",
    symbol: "AAVE",
    icon: AaveLogo,
    website: "https://app.aave.com/",
    contract: {
      ethereum: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
      polygon: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
      avalanche: "0x63a72806098bd3d9520cc43356dd78afe5d386d9",
    },
  },
  bnb: {
    name: "BNB",
    symbol: "BNB",
    nativeToken: true,
    icon: BNBLogo,
    network: "bsc",
    website: "https://www.binance.com/",
    tokenWrapper: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  } as INativeToken,
  usdc: {
    name: "USD Coin",
    symbol: "USDC",
    icon: USDCLogo,
    website: "https://circle.com/",
    contract: {
      ethereum: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      polygon: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      solana: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    },
  },
  busd: {
    name: "Binance USD",
    symbol: "BUSD",
    icon: BUSDLogo,
    website: "https://www.paxos.com/busd/",
    contract: {
      ethereum: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
      polygon: "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
    },
  },
  oneinch: {
    name: "1inch",
    symbol: "1INCH",
    icon: OneInchLogo,
    website: "https://1inch.io/",
    contract: {
      ethereum: "0x111111111117dc0aa78b770fa6a738034120c302",
      polygon: "0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f",
      avalanche: "0xd501281565bf7789224523144fe5d98e8b28f267",
    },
  },
  basicattention: {
    name: "Basic Attention",
    symbol: "BAT",
    icon: BATLogo,
    website: "https://basicattentiontoken.org/",
    contract: {
      ethereum: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      polygon: "0x3cef98bb43d732e2f285ee605a8158cde967d219",
      avalanche: "0x98443b96ea4b0858fdf3219cd13e98c7a4690588",
    },
  },
  yearn: {
    name: "yearn.finance",
    symbol: "YFI",
    icon: YearnFiLogo,
    website: "https://yearn.finance/",
    contract: {
      ethereum: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
      polygon: "0xda537104d6a5edd53c6fbba9a898708e465260b6",
      avalanche: "0x9eaac1b23d935365bd7b542fe22ceee2922f52dc",
    },
  },
  comp: {
    name: "Compound",
    symbol: "COMP",
    icon: CompLogo,
    website: "https://compound.finance/governance/comp",
    contract: {
      ethereum: "0xc00e94cb662c3520282e6f5717214004a7f26888",
      polygon: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
      avalanche: "0xc3048e19e76cb9a3aa9d77d8c03c29fc906e2437",
    },
  },
  dai: {
    name: "Dai",
    symbol: "DAI",
    icon: DAILogo,
    website: "https://makerdao.com/",
    contract: {
      ethereum: "0x6b175474e89094c44da98b954eedeac495271d0f",
      polygon: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    },
  },
  uniswap: {
    name: "Uniswap",
    symbol: "UNI",
    icon: UniswapLogo,
    website: "https://uniswap.org/",
    contract: {
      ethereum: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      polygon: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
    },
  },
  injective: {
    name: "Injective",
    symbol: "INJ",
    icon: INJLogo,
    website: "https://injective.com/",
    contract: {
      ethereum: "0xe28b3b32b6c345a34ff64674606124dd5aceca30",
    },
  },
  polygon: {
    name: "Polygon",
    symbol: "MATIC",
    website: "https://polygon.technology/",
    icon: MaticLogo,
    nativeToken: true,
    network: "polygon",
    nativeWrapper: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    contract: {
      ethereum: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    },
  },
  cosmos: {
    name: "Cosmos",
    symbol: "ATOM",
    website: "https://cosmos.network/",
    icon: CosmosLogo,
    contract: {
      bsc: "0x0eb3a705fc54725037cc9e008bdede697f62f335",
      ethereum: "0x8D983cb9388EaC77af0474fA441C4815500Cb7BB",
      polygon: "0xac51C4c48Dc3116487eD4BC16542e27B5694Da1b",
    },
  },
};
