type IChartVariant = {
  midtone: string;
};

export type IChartTheme = {
  variants: {
    default: IChartVariant;
    green: IChartVariant;
    yellow: IChartVariant;
    blue: IChartVariant;
    red: IChartVariant;
  };
  common: {
    colors: string[];
    foreColor: string;
    gridBorderColor: string;
    markerColor: string;
    labelColor: string;
    radialBarBackground: string;
    radarStrokeColor: string;
    radarConnectorColor: string;
    polarRingColor: string;
    polarSpokeConnectorColor: string;
  };
};
