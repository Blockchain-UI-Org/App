import { ApexOptions } from "apexcharts";
import { ThemeInterface } from "blockchain-ui/theme";



export function createBasicChartOptions(chartColors: ThemeInterface["components"]["Chart"]["common"]): ApexOptions {

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
    colors: chartColors.colors,

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      // animations: { enabled: false },
      foreColor: chartColors.foreColor,
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
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    // Datalabels
    dataLabels: { enabled: false },

    // Stroke
    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round",
    },

    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: chartColors.gridBorderColor,
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Markers
    markers: {
      size: 0,
      strokeColors: chartColors.markerColor,
    },

    // Tooltip
    tooltip: {
      x: {
        show: false,
      },
    },

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
