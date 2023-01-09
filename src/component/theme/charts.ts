import { ApexOptions } from "apexcharts";
// @mui
import { useTheme } from "@mui/material/styles";
import { colors, legacyColors } from "./colors";
import { cp } from "fs";


export default function BaseOptionChart(): ApexOptions {
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
    colors: [
      colors.yellow.color,
      colors.blue.color,
      colors.red.color,
      colors.green.color,
    ],

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      // animations: { enabled: false },
      foreColor: legacyColors.grey500,
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
      borderColor: legacyColors.grey700,
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Markers
    markers: {
      size: 0,
      strokeColors: legacyColors.grey500,
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
        colors: legacyColors.grey500,
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
          background: legacyColors.grey500,
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
          strokeColors: legacyColors.grey500,
          connectorColors: legacyColors.grey500,
        },
      },
      // polarArea
      polarArea: {
        rings: {
          strokeColor: legacyColors.grey500,
        },
        spokes: {
          connectorColors: legacyColors.grey500,
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
