import { applyStyle } from "./applyStyle";
import { formatNumber } from "./format";
import type { ChartOptions, Chart, TooltipModel } from "chart.js";
import tinycolor from "tinycolor2";
import { getShades } from "./getShades";

const createCaret = (primaryColor: string) => {
  const caretWrapper = document.createElement("div");
  const caret1 = document.createElement("div");
  const caret2 = document.createElement("div");
  const caret3 = document.createElement("div");

  applyStyle(caretWrapper, {
    position: "absolute",
    left: `50%`,
    bottom: "-9px",
    transform: "rotateX(180deg) translateX(-50%)",
  });
  caretWrapper.appendChild(caret1);
  caret1.appendChild(caret2);
  caret1.appendChild(caret3);
  applyStyle([caret1, caret2, caret3], { width: "10px", height: "10px" });
  applyStyle(caret1, {
    overflow: "hidden",
    position: "relative",

    borderRadius: "20%",
    transform: `translateY(50%) rotate(30deg) skewY(30deg) scaleX(.866)`,
    cursor: "pointer",
  });
  applyStyle([caret2, caret3], {
    position: "absolute",
    backgroundImage: `linear-gradient(109.68deg, #0A8270 2.87%, #289D7B 28.03%, #83EE9D 105.3%)`,
    pointerEvents: "auto",
  });
  applyStyle(caret2, {
    borderRadius: `20% 20% 20% 53%`,
    transform: `scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%) skewX(30deg) scaleY(.866) translateX(-24%)`,
  });
  applyStyle(caret3, {
    borderRadius: `20% 20% 53% 20%`,
    transform: `scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%) skewX(-30deg) scaleY(.866) translateX(24%)`,
  });
  return caretWrapper;
};


const createTooltipHTMLElement = (chart: Chart, primaryColor: string) => {
  let tooltipEl = chart.canvas.parentNode?.querySelector("#tooltipEl") as HTMLDivElement;
  const shades = getShades(primaryColor);
  console.log(shades);
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    applyStyle(tooltipEl, {
      backgroundImage: `linear-gradient(109.68deg,${shades[4]} 2.87%, ${shades[9]} 28.03%, ${shades[2]} 105.3%)`,
      color: "#fff",
      borderRadius: "10px",
      opacity: 1,
      pointerEvents: "none",
      position: "absolute",

      transition: "all 0.1s ease",
      transform: "translate(-50%, -140%)",
    });
    tooltipEl.id = "tooltipEl";

    const table = document.createElement("div");
    table.id = "tooltip";
    applyStyle(table, { margin: "0px", padding: "6px" });
    const caretWrapper = createCaret(primaryColor);

    tooltipEl.appendChild(caretWrapper);

    tooltipEl.appendChild(table);
    chart.canvas.parentNode?.appendChild(tooltipEl);
  }

  return tooltipEl as HTMLDivElement;
};

const createTooltip = (ctx: { chart: Chart; tooltip: TooltipModel<"doughnut"> }, primaryColor: string) => {
  const { chart, tooltip } = ctx;
  const tooltipEl = createTooltipHTMLElement(chart, primaryColor);
  if (tooltip.opacity === 0) {
    // console.log("0 Opacity")
    tooltipEl.style.opacity = "0";
    return;
  }
  if (tooltip.body) {
    const [point] = tooltip.dataPoints;
    // remove previouse childs
    const elm = tooltipEl.querySelector("#tooltip") as HTMLDivElement;

    // Remove old children
    while (elm?.firstChild) {
      elm.firstChild.remove();
    }

    applyStyle(elm, {
      width: "100px",
      display: "flex",
      paddingLeft: "10px",
      justifyContent: "center",

      fontSize: "12px",
    });

    if (point) {
      const textNode = document.createTextNode(point.label + ": ");
      const labelEl = document.createElement("div");
      const valueEl = document.createElement("div");
      labelEl.appendChild(textNode);

      const value = document.createTextNode(formatNumber(point.parsed));
      valueEl.appendChild(value);
      applyStyle(valueEl, { fontWeight: "700", marginLeft: "5px" });
      elm.appendChild(labelEl);
      elm.appendChild(valueEl);
    }
  }
  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = "1";
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
};

export const createBasicDoughnutOptions = (fontFamily: string, primaryColor: string) => {
  const options: ChartOptions<"doughnut"> = {
    cutout: `75%`,
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
        bodyFont: { family: fontFamily },

        external: (ctx) => {
          createTooltip(ctx, primaryColor);
        },
      },
    },
    elements: {
      arc: { borderWidth: 0 },
    },
  };

  return options;
};
