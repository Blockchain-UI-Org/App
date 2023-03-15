import { ApexOptions } from "apexcharts";
import { ThemeInterface } from "blockchain-ui/theme";

const wrapErrorCatching = <T extends (...args: any[]) => any>(func?: T) => {
  if (!func) {
    return func;
  }
  return (...args: any[]) => {
    try {
      return func(...args);
    } catch (e) {
      return args[0];
    }
  };
};

export type IChartLabelStyle = { fontFamily?: string; fontSize?: number; color?: string };

export function createBasicChartOptions(
  chartColors: ThemeInterface["components"]["Chart"]["common"],
  {
    gridColor = "#919EAB3D",
    hideXAxis = false,
    hideYAxis = false,
    marker = {},
    fontFamily,
    hideXAxisBorder = false,
    hideYAxisBorder = false,
    hideCurveStroke = false,
    labelFontStyle = {},
    opacityFrom = 0.6,
    opacityTo = 0.16,
    formatTooltip,
    labelCount,
    formatXAxis,
    gridLine = "solid",
    formatYAxis,
    showHorizontalGridLine,
    showVerticalGridLine,
  }: {
    fontFamily?: string;
    showVerticalGridLine?: boolean;
    showHorizontalGridLine?: boolean;
    gridLine?: "solid" | "dashed";
    gridColor?: string;
    hideYAxis?: boolean;
    hideXAxis?: boolean;
    marker?: { size?: number; borderWidth?: number };
    hideXAxisBorder?: boolean;
    hideYAxisBorder?: boolean;
    labelCount?: number;
    hideCurveStroke?: boolean;
    labelFontStyle?: IChartLabelStyle;
    opacityFrom?: number;
    opacityTo?: number;

    formatTooltip?: (val: string | number) => string | number;
    formatXAxis?: (val: string | number, timestamp?: string, opts?: { i: number }) => string | number;
    formatYAxis?: (val: string | number) => string | number;
  } = {}
): ApexOptions {
  const LABEL_TOTAL = {
    show: true,
    label: "Total",
    color: "#FFFFF",
    fontSize: "12px",
  };

  const LABEL_VALUE = {
    offsetY: 8,
    color: "#FFFFF",
    fontSize: "12px",
  };

  return {
    // Colors
    // colors: [
    //   colors.yellow.color,
    //   colors.blue.color,
    //   colors.red.color,
    //   colors.green.color,
    // ],
    // colors: chartColors.colors,

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily,
      foreColor: labelFontStyle.color,
      // animations: { enabled: false },
      // foreColor: chartColors.foreColor,
    },
    stroke: {
      curve: "smooth",
      width: hideCurveStroke ? 0 : 3,
      lineCap: "butt",
    },
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom,
        opacityTo,
        stops: [0, 100],
      },
    },
    xaxis: {
      tickPlacement: "on",
      axisTicks: {show: false},
      axisBorder: { show: hideXAxis ? false : !hideXAxisBorder },
      tickAmount: labelCount ? --labelCount : 0,
      labels: {
        formatter: wrapErrorCatching(formatXAxis),
        show: !hideXAxis,
        // offsetX: labelCount ? 15 : 0,
        rotate: 0,
        hideOverlappingLabels: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    markers: {
      strokeWidth: marker.borderWidth,
      hover: {
        size: marker.size,
      },
    },
    yaxis: {
      show: !hideYAxis,
      axisBorder: { show: !hideYAxisBorder },

      labels: {
        formatter: wrapErrorCatching(formatYAxis),
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: wrapErrorCatching(formatTooltip),
      },
      followCursor: true,
      style: {
        fontFamily,
      },
    },

    grid: {
      show: true,
      strokeDashArray: gridLine === "solid" ? 0 : 5,
      borderColor: gridColor,
      xaxis: {
        lines: {
          show: showVerticalGridLine,
        },
      },
      yaxis: {
        lines: {
          show: showHorizontalGridLine,
        },
      },
    },

    // States
    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },

    // Fill

    // Datalabels
    dataLabels: { enabled: false },

    // Legend
    legend: {
      show: true,
      fontSize: String(13),
      position: "top",
      horizontalAlign: "right",
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {
        colors: chartColors.labelColor,
      },
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        columnWidth: "28%",
        borderRadius: 4,
      },
      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL,
          },
        },
      },
      // Radialbar
      radialBar: {
        track: {
          strokeWidth: "100%",
          background: chartColors.radialBarBackground,
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL,
        },
      },
      // Radar
      radar: {
        polygons: {
          fill: { colors: ["transparent"] },
          strokeColors: chartColors.radarStrokeColor,
          connectorColors: chartColors.radarConnectorColor,
        },
      },
      // polarArea
      polarArea: {
        rings: {
          strokeColor: chartColors.polarRingColor,
        },
        spokes: {
          connectorColors: chartColors.polarSpokeConnectorColor,
        },
      },
    },

    // Responsive
    responsive: [
      {
        options: {
          plotOptions: { bar: { columnWidth: "40%" } },
        },
      },
      {
        options: {
          plotOptions: { bar: { columnWidth: "32%" } },
        },
      },
    ],
  };
}
