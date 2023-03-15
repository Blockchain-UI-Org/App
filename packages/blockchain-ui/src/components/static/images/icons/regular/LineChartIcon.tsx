import { SVGProps } from "react";

export const LineChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 800 400"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background: "0 0",
    }}
    {...props}
  >
    <g className="apexcharts-inner apexcharts-graphical" transform="translate(12 30)">
      <defs>
        <clipPath id="a">
          <rect
            width={785}
            height={358}
            x={-3.5}
            y={-1.5}
            rx={0}
            ry={0}
            strokeWidth={0}
            strokeDasharray={0}
            fill="#fff"
          />
        </clipPath>
      </defs>
      <path
        stroke="#b6b6b6"
        strokeDasharray={3}
        className="apexcharts-xcrosshairs"
        fill="#b1b9c4"
        filter="none"
        fillOpacity={0.9}
        d="M-500 0v355"
      />
      <g className="apexcharts-grid">
        <path stroke="transparent" strokeDasharray={0} d="M0 355h778M0 1v354" />
      </g>
      <g className="apexcharts-line-series apexcharts-plot-series">
        <g className="apexcharts-series">
          <path
            d="M0 349.465c7.78 0 14.449-42.19 22.229-42.19 7.78 0 14.448 42.313 22.228 42.313 7.78 0 14.449-86.502 22.229-86.502 7.78 0 14.448-72.514 22.228-72.514 7.78 0 14.449 71.71 22.229 71.71 7.78 0 14.448 79.795 22.228 79.795 7.78 0 14.449-5.883 22.229-5.883 7.78 0 14.449-280.192 22.229-280.192 7.78 0 14.448 96.249 22.228 96.249 7.78 0 14.449 55.834 22.229 55.834 7.78 0 14.448 9.276 22.228 9.276 7.78 0 14.449 83.032 22.229 83.032 7.78 0 14.448 26.593 22.228 26.593 7.78 0 14.449 2.03 22.229 2.03 7.78 0 14.449-126.574 22.229-126.574 7.78 0 14.448 68.83 22.228 68.83 7.78 0 14.449 3.64 22.229 3.64 7.78 0 14.448 61.77 22.228 61.77 7.78 0 14.449-96.918 22.229-96.918 7.78 0 14.448 30.274 22.228 30.274 7.78 0 14.449 68.596 22.229 68.596 7.78 0 14.449 13.646 22.229 13.646 7.78 0 14.448-44.988 22.228-44.988 7.78 0 14.449 46.168 22.229 46.168 7.78 0 14.448-21.21 22.228-21.21 7.78 0 14.449 13.95 22.229 13.95 7.78 0 14.448-59.074 22.228-59.074 7.78 0 14.449 2.106 22.229 2.106 7.78 0 14.449 46.638 22.229 46.638 7.78 0 14.448-206.438 22.228-206.438 7.78 0 14.449 22.2 22.229 22.2 7.78 0 14.448-133.958 22.228-133.958 7.78 0 14.449 215.846 22.229 215.846 7.78 0 14.448-82.223 22.228-82.223 7.78 0 14.449 76.527 22.229 76.527"
            fill="none"
            stroke="rgba(145,158,171,1)"
            strokeWidth={3}
            strokeDasharray={0}
            className="apexcharts-line"
            clipPath="url(#a)"
          />
        </g>
      </g>
      <path stroke="#b6b6b6" strokeDasharray={0} className="apexcharts-ycrosshairs" d="M0-100h778" />
      <path className="apexcharts-ycrosshairs-hidden" d="M0 0h778" />
    </g>
  </svg>
);
