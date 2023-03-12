import { AaveLogo } from "./crypto-icons/AaveLogo";
import { AlgoLogo } from "./crypto-icons/AlgoLogo";
import { AnkrNetworkLogo } from "./crypto-icons/AnkrNetworkLogo";
import { ApeCoinLogo } from "./crypto-icons/ApeCoinLogo";
import { AugurLogo } from "./crypto-icons/AugurLogo";
import { AVAXLogo } from "./crypto-icons/AvaxLogo";
import { AxieLogo } from "./crypto-icons/AxieLogo";
import { BalancerLogo } from "./crypto-icons/BalancerLogo";
import { BATLogo } from "./crypto-icons/BATLogo";
import { BNBLogo } from "./crypto-icons/BNBLogo";
import { BTCLogo } from "./crypto-icons/BTCLogo";
import { BUSDLogo } from "./crypto-icons/BUSDLogo";
import { CardanoLogo } from "./crypto-icons/CardanoLogo";
import { CartesiLogo } from "./crypto-icons/CartesiLogo";
import { CelsiusNetworkLogo } from "./crypto-icons/CelsiusNetworkLogo";
import { ChainLinkLogo } from "./crypto-icons/ChainLinkLogo";
import { CompLogo } from "./crypto-icons/CompLogo";
import { CompoundLogo } from "./crypto-icons/CompoundLogo";
import { CosmosLogo } from "./crypto-icons/CosmosLogo";
import { CronosLogo } from "./crypto-icons/CronosLogo";
import { CurveDaoLogo } from "./crypto-icons/CurveDaoLogo";
import { DAILogo } from "./crypto-icons/DAILogo";
import { DecentralandLogo } from "./crypto-icons/DecentralandLogo";
import { FlowLogo } from "./crypto-icons/FlowLogo";
import FraxLogo from "./crypto-icons/FraxLogo";
import { FTMLogo } from "./crypto-icons/FTMLogo";
import { GalaLogo } from "./crypto-icons/GalaLogo";
import { HederaLogo } from "./crypto-icons/HederaLogo";
import { HuobiToken } from "./crypto-icons/HuobiToken";
import { INJLogo } from "./crypto-icons/INJLogo";
import { IoTeXLogo } from "./crypto-icons/IoTeXLogo";
import { KyberNetworkProtocol } from "./crypto-icons/KyberNetworkProtocolLogo";
import { MakerLogo } from "./crypto-icons/MakerLogo";
import { MaskNetworkLogo } from "./crypto-icons/MaskNetworkLogo";
import { MaticLogo } from "./crypto-icons/MaticLogo";
import { NeoLogo } from "./crypto-icons/NeoLogo";
import { NestProtocolLogo } from "./crypto-icons/NestProtocolLogo";
import { OneInchLogo } from "./crypto-icons/OneInchLogo";
import { PolkdotLogo } from "./crypto-icons/PolkaDotLogo";
import { RENLogo } from "./crypto-icons/RENLogo";
import { RequestLogo } from "./crypto-icons/RequestLogo";
import { SolanaLogo } from "./crypto-icons/SolanaLogo";
import { StacksLogo } from "./crypto-icons/StacksLogo";
import { StellarLogo } from "./crypto-icons/StellarLogo";
import { SynthetixNetworkLogo } from "./crypto-icons/SynthetixNetworkLogo";
import { TelcoinLogo } from "./crypto-icons/TelcoinLogo";
import { TetherLogo } from "./crypto-icons/TetherLogo";
import { TheGraphLogo } from "./crypto-icons/TheGraphLogo";
import { TheSandboxLogo } from "./crypto-icons/TheSandboxLogo";
import { TUSDLogo } from "./crypto-icons/TUSDLogo";
import { UMALogo } from "./crypto-icons/UMALogo";
import { UniswapLogo } from "./crypto-icons/UniswapLogo";
import { USDCLogo } from "./crypto-icons/USDCLogo";
import { VeChainLogo } from "./crypto-icons/VeChainLogo";
import { WrappedBitcoinLogo } from "./crypto-icons/WrappedBitcoinLogo";
import { XRPLogo } from "./crypto-icons/XRPLogo";
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
  frax: {
    name: "Frax",
    symbol: "FRAX",
    website: "https://frax.finance/",
    icon: FraxLogo,
    contract: {
      avalanche: "0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64",
      polygon: "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
    },
  },
  trustwallet: {
    name: "Trust Wallet",
    symbol: "TWT",
    website: "https://trustwallet.com/",
    icon: FraxLogo,
    contract: {
      avalanche: "",
      polygon: "",
    },
  },
  lidodao: {
    name: "Lido DAO",
    symbol: "LDO",
    website: "https://stake.lido.fi/",
    icon: FraxLogo,
    contract: {
      polygon: "0xc3c7d422809852031b44ab29eec9f1eff2a58756",
    },
  },
  thesandbox: {
    name: "The Sandbox",
    symbol: "SAND",
    website: "https://www.sandbox.game/en/",
    icon: TheSandboxLogo,
    contract: {
      polygon: "0xbbba073c31bf03b8acf7c28ef0738decf3695683",
    },
  },

  synthetixnetwork: {
    name: "Synthetix Network ",
    symbol: "SNX",
    website: "https://synthetix.io/",
    icon: SynthetixNetworkLogo,
    contract: {
      polygon: "0x50b728d8d964fd00c2d0aad81718b71311fef68a",
      avalanche: "0xbec243c995409e6520d7c41e404da5deba4b209b",
    },
  },
  maker: {
    name: "Maker",
    symbol: "MKR",
    website: "https://makerdao.com/",
    icon: MakerLogo,
    contract: {
      polygon: "0x6f7c932e7684666c9fd1d44527765433e01ff61d",
      avalanche: "0x88128fd4b259552a9a1d457f435a6527aab72d42",
    },
  },
  decentraland: {
    name: "Decentraland",
    symbol: "MANA",
    website: "https://decentraland.org/",
    icon: DecentralandLogo,
    contract: {
      polygon: "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4",
    },
  },
  // fraxshare: {
  //   name: "Frax Share",
  //   symbol: "FXS",
  //   website: "https://frax.finance/",
  //   icon: FraxShareLogo ,
  //   contract: {
  //     polygon: "0x1a3acf6d19267e2d3e7f898f42803e90c9219062",
  //     avalanche:"0x214db107654ff987ad859f34125307783fc8e387",
  //   },
  // },
  curvedao: {
    name: "Curve DAO",
    symbol: "CRV",
    website: "https://curve.fi/#/ethereum/swap",
    icon: CurveDaoLogo,
    contract: {
      polygon: "0x172370d5cd63279efa6d502dab29171933a610af",
    },
  },
  // trustwallet: {
  //   name: "Trust Wallet",
  //   symbol: "TWT",
  //   website: "https://trustwallet.com/",
  //   icon: SynthetixNetworkLogo,
  //   contract: {
  //     polygon: "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4",
  //   },
  // },

  // 1inch : {
  //   name: "1inch ",
  //   symbol: "1INCH",
  //   website: "https://1inch.io/",
  //   icon: 1Inchlogo ,
  //   contract: {
  //     polygon: "0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f",
  //     avalanche:"0xd501281565bf7789224523144fe5d98e8b28f267",
  //   },
  // },

  // render : {
  //   name: "Render",
  //   symbol: "RNDR",
  //   website: "https://rendertoken.com/",
  //   icon: SynthetixNetworkLogo,
  //   contract: {
  //     polygon: "0x61299774020da444af134c82fa83e3810b309991",
  //   },
  // },
  // basicattention: {
  //   name: "Basic Attention ",
  //   symbol: "BAT",
  //   website: "https://basicattentiontoken.org/",
  //   icon: BasicAttentionLogo,
  //   contract: {
  //     polygon: "0x3cef98bb43d732e2f285ee605a8158cde967d219",
  //     avalanche:"0x98443b96ea4b0858fdf3219cd13e98c7a4690588",
  //   },
  // },
  // yearnfinance : {
  //   name: "yearn.finance ",
  //   symbol: "YFI",
  //   website: "https://yearn.finance/",
  //   icon: ,
  //   contract: {
  //     polygon: "0xda537104d6a5edd53c6fbba9a898708e465260b6",
  //     avalanche:"0x9eaac1b23d935365bd7b542fe22ceee2922f52dc",
  //   },
  // },
  compound: {
    name: " Compound ",
    symbol: "COMP",
    website: "https://compound.finance/governance/comp",
    icon: CompoundLogo,
    contract: {
      polygon: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
      avalanche: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
    },
  },

  gala: {
    name: " GALA  ",
    symbol: "GALA ",
    website: "https://gala.games/",
    icon: GalaLogo,
    contract: {
      ethereum: "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
    },
  },
  ankrnetwork: {
    name: "Ankr Network  ",
    symbol: "ANKR",
    website: "https://ankr.com/",
    icon: AnkrNetworkLogo,
    contract: {
      polygon: "0x101a023270368c0d50bffb62780f4afd4ea79c35",
      avalanche: "0x20cf1b6e9d856321ed4686877cf4538f2c84b4de",
    },
  },
  //   astrafer  : {
  //   name: "Astrafer",
  //   symbol: "ASTRAFER",
  //   website: "https://phantomgalaxies.com/",
  //   icon: AnkrNetworkLogo,
  //   contract: {
  //     ethereum: "",
  //   },
  // },
  // injective  : {
  //   name: "Injective",
  //   symbol: "INJ",
  //   website: "https://injective.com/",
  //   icon: AnkrNetworkLogo,
  //   contract: {
  //     polygon: "0x101a023270368c0d50bffb62780f4afd4ea79c35",
  //     avalanche:"0x20cf1b6e9d856321ed4686877cf4538f2c84b4de",
  //   },
  // },
  balancer: {
    name: "Balancer ",
    symbol: "BAL",
    website: "https://balancer.finance/",
    icon: BalancerLogo,
    contract: {
      polygon: "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
    },
  },
  iotex: {
    name: "IoTeX ",
    symbol: "IOTX",
    website: "https://iotex.io/",
    icon: IoTeXLogo,
    contract: {
      ethereum: "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
    },
  },
  masknetwork: {
    name: "Mask Network",
    symbol: "MASK",
    website: "https://mask.io/",
    icon: MaskNetworkLogo,
    contract: {
      polygon: "0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7",
    },
  },
  // 0x  : {
  //   name: "0x ",
  //   symbol: "ZRX",
  //   website: "https://0x.org/",
  //   icon: MaskNetworkLogo,
  //   contract: {
  //     avalanche: "0x596fa47043f99a4e0f122243b841e55375cde0d2",
  //   },
  // },
  multichain: {
    name: "Multichain",
    symbol: "MULTI",
    website: "https://multichain.org/",
    icon: MaskNetworkLogo,
    contract: {
      polygon: "0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
      avalanche: "0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
    },
  },
  telcoin: {
    name: "Telcoin",
    symbol: "TEL",
    website: "http://www.telco.in/",
    icon: TelcoinLogo,
    contract: {
      polygon: "0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32",
    },
  },
  celsiusnetwork: {
    name: "Celsius Network",
    symbol: "CEL",
    website: "https://celsius.network/",
    icon: CelsiusNetworkLogo,
    contract: {
      polygon: "0xd85d1e945766fea5eda9103f918bd915fbca63e6",
    },
  }, 
  uma: {
    name: "UMA",
    symbol: "UMA",
    website: "https://uma.xyz/",
    icon: UMALogo,
    contract: {
      avalanche: "0x3bd2b1c7ed8d396dbb98ded3aebb41350a5b2339",
    },
  },
  nestprotocol: {
    name: "Nest Protocol ",
    symbol: "NEST",
    website: "https://nestprotocol.org/",
    icon: NestProtocolLogo,
    contract: {
      polygon: "0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7",
    },
  },
  kybernetworkcrystal: {
    name: "Kyber Network Crystal ",
    symbol: "KNC",
    website: "https://kyber.network/",
    icon: KyberNetworkProtocol,
    contract: {
      polygon: "0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c",
      avalanche: "0x39fc9e94caeacb435842fadedecb783589f50f5f",
    },
  },
  ren: {
    name: "REN",
    symbol: "REN",
    website: "http://renproject.io/",
    icon: RENLogo,
    contract: {
      ethereum: "0x408e41876cccdc0f92210600ef50372656052a38",
    },
  },
  cartesi: {
    name: "Cartesi",
    symbol: "CTSI",
    website: "https://cartesi.io/",
    icon: CartesiLogo,
    contract: {
      polygon: "0x2727ab1c2d22170abc9b595177b2d5c6e1ab7b7b",
      avalanche: "0x6b289cceaa8639e3831095d75a3e43520fabf552",
    },
  },
  // civic : {
  //   name: "Civic ",
  //   symbol: "CVC",
  //   website: "https://www.civic.com/",
  //   icon: CivicLogo,
  //   contract: {
  //     polygon:"https://www.civic.com/",
  //   },
  // },
  request: {
    name: "Request",
    symbol: "REQ",
    website: "https://request.network/",
    icon: RequestLogo,
    contract: {
      polygon: "0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762",
    },
  },
  augur: {
    name: "Augur",
    symbol: "REP",
    website: "http://www.augur.net/",
    icon: AugurLogo,
    contract: {
      ethereum: "00x221657776846890989a759ba2973e427dff5c9bb",
    },
  },
  solana: {
    name: "Solana",
    nativeToken: true,
    icon: SolanaLogo,
    network: "solana",
    website: "https://solana.com/",
    symbol: "SOL",
  },
  xrp: {
    name: "XRP",
    nativeToken: true,
    icon: XRPLogo,
    website: "https://xrpl.org/",
    symbol: "XRP",
    contract: {
      bsc: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
    },
  },
  cardano: {
    name: "Cardano",
    nativeToken: true,
    icon: CardanoLogo,
    network: "cardano",
    website: "https://www.cardano.org/",
    symbol: "ADA",
    contract: {
      bsc: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
    },
  },
  polkadot: {
    name: "Polkadot",
    nativeToken: true,
    icon: PolkdotLogo,
    website: "https://polkadot.network/",
    symbol: "DOT",
    contract: {
      bsc: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    },
  },
  avalanche: {
    name: "Avalanche",
    nativeToken: true,
    icon: AVAXLogo,
    network: "avalanche",
    nativeWrapper: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    website: "https://www.avalabs.org/",
    symbol: "AVAX",
    contract: {
      bsc: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
    },
  },
  stellar: {
    name: "Stellar",
    nativeToken: true,
    network: "stellar",
    icon: StellarLogo,
    website: "https://www.stellar.org/",
    symbol: "XLM",
    contract: {},
  },
  hedera: {
    name: "Hedera",
    nativeToken: true,
    network: "hedera",
    icon: HederaLogo,
    website: "https://www.hedera.com/",
    symbol: "HBAR",
    contract: {},
  },
  vechain: {
    name: "Vechain",
    icon: VeChainLogo,
    nativeToken: true,
    symbol: "VET",
    network: "vechain",
    website: "https://www.vechain.com/",
    contract: {},
  },
  algorand: {
    name: "Algorand",
    icon: AlgoLogo,
    nativeToken: true,
    symbol: "ALGO",
    network: "algorand",
    website: "https://www.algorand.com/",
    contract: {},
  },
  fantom: {
    name: "Fantom",
    icon: FTMLogo,
    nativeToken: true,
    symbol: "FTM",
    network: "fantom",
    website: "https://fantom.foundation/",
    contract: {
      ethereum: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
      bsc: "0xad29abb318791d579433d831ed122afeaf29dcfe",
    },
  },
  flow: {
    name: "Flow",
    icon: FlowLogo,
    symbol: "FLOW",
    website: "https://flow.com/",
    contract: {
      ethereum: "0x5c147e74D63B1D31AA3Fd78Eb229B65161983B2b",
    },
  },
  cronos: {
    name: "Cronos",

    icon: CronosLogo,
    website: "https://www.crypto.com/en/chain",
    symbol: "CRO",
    contract: {
      ethereum: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    },
  },
  stacks: {
    name: "Stacks",
    icon: StacksLogo,
    nativeToken: true,
    symbol: "STX",
    network: "stacks",
    website: "https://stacks.co/",
    contract: {},
  },
  axie: {
    name: "Axie Infinity",

    icon: AxieLogo,
    website: "https://axieinfinity.com/",
    symbol: "AXS",
    contract: {
      ethereum: "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b",
      bsc: "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0",
    },
  },
  neo: {
    name: "Neo",
    icon: NeoLogo,
    nativeToken: true,
    symbol: "NEO",
    network: "neo",
    website: "https://neo.org/",
    contract: {},
  },
  huobi: {
    name: "Huobi Token",

    icon: HuobiToken,
    nativeToken: true,
    symbol: "HT",
    network: "heco",
    website: "https://www.hbg.com/",

    contract: {
      ethereum: "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
    },
  },
};
