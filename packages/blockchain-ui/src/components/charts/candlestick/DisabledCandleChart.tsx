import { SVGProps } from "react";

export const DisabledCandleChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 700 400"
    xmlns="http://www.w3.org/2000/svg"
    className="apexcharts-svg"
    style={{
      background: "0 0",
    }}
    {...props}
  >
    <g className="apexcharts-inner apexcharts-graphical" transform="translate(32.505 30)">
      <defs>
        <clipPath id="a">
          <rect
            width={685}
            height={358}
            x={-20.005}
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
        <path stroke="transparent" strokeDasharray={0} d="M0 355h644.989M0 1v354" />
      </g>
      <g className="apexcharts-candlestick-series apexcharts-plot-series">
        <g
          className="apexcharts-series"
          fill="rgba(196,205,213,1)"
          stroke="#c4cdd5"
          strokeWidth={3}
          strokeDasharray={0}
        >
          <path
            d="M-8.209 178.88H0V71.395v107.487h8.209v5.127H0v105.613-105.613h-8.209v-6.627M50.426 118.235h8.21V76.128v42.107h8.208v60.646h-8.209v71.887-71.887h-8.209v-62.146M109.062 100.485h8.209V86.679v13.806h8.209v54.828h-8.21v34.218-34.219h-8.208V98.986M167.697 88.849h8.21V76.917v11.932h8.208v66.463h-8.209v61.632-61.631h-8.209V87.349M226.333 88.849h8.208V59.167v29.682h8.21V238.54h-8.21v27.809-27.809h-8.208V87.35M284.968 197.617h8.209v-29.978 29.978h8.209v40.923h-8.21v44.77-44.77h-8.208v-42.423M343.603 197.518h8.21v-40.43 40.43h8.208v35.303h-8.209v33.429-33.43h-8.209v-36.802M402.239 174.837h8.209v-38.852 38.852h8.209v65.774h-16.418v-67.274M460.874 152.354h8.209v-43.882 43.882h8.209v1.085h-8.209v63.505-63.505h-8.209v-2.585M519.51 118.136h8.208V69.028v49.108h8.21v10.946h-8.21v22.68-22.68h-8.209v-12.446M578.145 112.91h8.209V69.028v43.882h8.209v74.352h-8.21v38.163-38.163h-8.208V111.41M636.78 88.158h8.21v-19.13 19.13h8.208v97.724h-8.209v11.34-11.34h-8.209V86.658m8.21 46.467"
            className="apexcharts-candlestick-area"
            clipPath="url(#a)"
          />
        </g>
      </g>
      <path stroke="#b6b6b6" strokeDasharray={0} className="apexcharts-ycrosshairs" d="M-16.505-100h678" />
      <path className="apexcharts-ycrosshairs-hidden" d="M-16.505 0h678" />
    </g>
  </svg>
);
