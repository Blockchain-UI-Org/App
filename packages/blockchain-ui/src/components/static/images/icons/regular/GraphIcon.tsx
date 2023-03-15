import { SVGProps } from "react"

export const GraphIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 300"
    className="apexcharts-svg"
    style={{
      background: "0 0",
    }}
    {...props}
  >
    <g
      className="apexcharts-inner apexcharts-graphical"
      transform="translate(12 30)"
    >
      <defs>
        <linearGradient id="apex-a" x1={0} y1={0} x2={0} y2={1}>
          <stop
            stopOpacity={0.6}
            stopColor="rgba(145,158,171,0.6)"
            offset={0}
          />
          <stop stopOpacity={0} stopColor="rgba(145,158,171,0)" offset={1} />
          <stop stopOpacity={0} stopColor="rgba(145,158,171,0)" offset={1} />
        </linearGradient>
        <clipPath id="b-apex">
          <rect
            width={785}
            height={235.348}
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
        className="apexcharts-xcrosshairs apexcharts-active"
        fill="#b1b9c4"
        filter="none"
        fillOpacity={0.9}
        d="M-500 0v232.348"
      />
      <g className="apexcharts-grid">
        <path
          stroke="transparent"
          strokeDasharray={0}
          d="M0 232.348h778M0 1v231.348"
        />
      </g>
      <g className="apexcharts-area-series apexcharts-plot-series">
        <g
          className="apexcharts-series"
          
        >
          <path
            d="M0 232.348V31.862C5.557 31.862 10.32 0 15.878 0c5.557 0 10.32 90.273 15.877 90.273s10.32 43.242 15.878 43.242c5.557 0 10.32 29.09 15.877 29.09s10.32-12.932 15.878-12.932c5.557 0 10.32 29.5 15.877 29.5s10.32-12.766 15.878-12.766c5.557 0 10.32 11.284 15.877 11.284 5.558 0 10.32 3.638 15.878 3.638 5.557 0 10.32-29.487 15.878-29.487 5.557 0 10.32 33.702 15.877 33.702s10.32 26.027 15.878 26.027c5.557 0 10.32-22.142 15.877-22.142s10.32 6.671 15.878 6.671c5.557 0 10.32 23.886 15.877 23.886s10.32-12.423 15.878-12.423c5.557 0 10.32 1.07 15.877 1.07 5.558 0 10.32-123.667 15.878-123.667 5.557 0 10.32.997 15.877.997 5.558 0 10.32 31.406 15.878 31.406 5.557 0 10.32 9.218 15.878 9.218 5.557 0 10.32 1.01 15.877 1.01s10.32-17.523 15.878-17.523c5.557 0 10.32-12.277 15.877-12.277s10.32 58.05 15.878 58.05c5.557 0 10.32 21.925 15.877 21.925s10.32-.235 15.878-.235c5.557 0 10.32 54.811 15.877 54.811 5.558 0 10.32-82.66 15.878-82.66 5.557 0 10.32-5.441 15.878-5.441 5.557 0 10.32-15.404 15.877-15.404s10.32-12.376 15.878-12.376c5.557 0 10.32 21.026 15.877 21.026s10.32 20.106 15.878 20.106c5.557 0 10.32-18.669 15.877-18.669s10.32 10.465 15.878 10.465c5.557 0 10.32-.405 15.877-.405 5.558 0 10.32-106.736 15.878-106.736 5.557 0 10.32 20.732 15.877 20.732 5.558 0 10.32 11.957 15.878 11.957 5.557 0 10.32-6.546 15.878-6.546 5.557 0 10.32 35.952 15.877 35.952s10.32-18.055 15.878-18.055c5.557 0 10.32 35.872 15.877 35.872s10.32-96.31 15.878-96.31c5.557 0 10.32 37.533 15.877 37.533s10.32 22.6 15.878 22.6c5.557 0 10.32-10.629 15.877-10.629 5.558 0 10.32 30.24 15.878 30.24v126.748m0-126.748"
            fill="url(#apex-a)"
            className="apexcharts-area"
            clipPath="url(#b-apex)"
          />
          <path
            d="M0 31.862C5.557 31.862 10.32 0 15.878 0c5.557 0 10.32 90.273 15.877 90.273s10.32 43.242 15.878 43.242c5.557 0 10.32 29.09 15.877 29.09s10.32-12.932 15.878-12.932c5.557 0 10.32 29.5 15.877 29.5s10.32-12.766 15.878-12.766c5.557 0 10.32 11.284 15.877 11.284 5.558 0 10.32 3.638 15.878 3.638 5.557 0 10.32-29.487 15.878-29.487 5.557 0 10.32 33.702 15.877 33.702s10.32 26.027 15.878 26.027c5.557 0 10.32-22.142 15.877-22.142s10.32 6.671 15.878 6.671c5.557 0 10.32 23.886 15.877 23.886s10.32-12.423 15.878-12.423c5.557 0 10.32 1.07 15.877 1.07 5.558 0 10.32-123.667 15.878-123.667 5.557 0 10.32.997 15.877.997 5.558 0 10.32 31.406 15.878 31.406 5.557 0 10.32 9.218 15.878 9.218 5.557 0 10.32 1.01 15.877 1.01s10.32-17.523 15.878-17.523c5.557 0 10.32-12.277 15.877-12.277s10.32 58.05 15.878 58.05c5.557 0 10.32 21.925 15.877 21.925s10.32-.235 15.878-.235c5.557 0 10.32 54.811 15.877 54.811 5.558 0 10.32-82.66 15.878-82.66 5.557 0 10.32-5.441 15.878-5.441 5.557 0 10.32-15.404 15.877-15.404s10.32-12.376 15.878-12.376c5.557 0 10.32 21.026 15.877 21.026s10.32 20.106 15.878 20.106c5.557 0 10.32-18.669 15.877-18.669s10.32 10.465 15.878 10.465c5.557 0 10.32-.405 15.877-.405 5.558 0 10.32-106.736 15.878-106.736 5.557 0 10.32 20.732 15.877 20.732 5.558 0 10.32 11.957 15.878 11.957 5.557 0 10.32-6.546 15.878-6.546 5.557 0 10.32 35.952 15.877 35.952s10.32-18.055 15.878-18.055c5.557 0 10.32 35.872 15.877 35.872s10.32-96.31 15.878-96.31c5.557 0 10.32 37.533 15.877 37.533s10.32 22.6 15.878 22.6c5.557 0 10.32-10.629 15.877-10.629 5.558 0 10.32 30.24 15.878 30.24 0 0 0 0 0 0"
            fill="none"
            stroke="#919eab"
            strokeLinecap="round"
            strokeWidth={3}
            strokeDasharray={0}
            className="apexcharts-area"
            clipPath="url(#b-apex)"
          />
          <g className="apexcharts-series-markers-wrap" >
            <g className="apexcharts-series-markers">
              <circle
                r={6}
                cx={746.245}
                cy={85.989}
                className="apexcharts-marker wylklsnec no-pointer-events"
                fill="#919eab"
              />
            </g>
          </g>
        </g>
      </g>
      <path
        stroke="#b6b6b6"
        strokeDasharray={0}
        className="apexcharts-ycrosshairs"
        d="M0-100h778"
      />
      <path className="apexcharts-ycrosshairs-hidden" d="M0 0h778" />
      <g className="apexcharts-xaxis">
        <g
          className="apexcharts-xaxis-texts-g"
          fontFamily="Public Sans"
          textAnchor="middle"
          fontSize={12}
          fontWeight={400}
          fill="#373d3f"
        >
          <text
            x={30}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={45.878}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={61.755}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={77.633}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={93.51}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={109.388}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={125.265}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={141.143}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={157.02}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={172.898}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={188.776}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={204.653}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={220.531}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={236.408}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={252.286}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={268.163}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={284.041}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={299.918}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={315.796}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={331.673}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={347.551}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={363.429}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={379.306}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={395.184}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={411.061}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={426.939}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={442.816}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={458.694}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={474.571}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={490.449}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={506.327}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={522.204}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={538.082}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={553.959}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={569.837}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={585.714}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={601.592}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={617.469}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={633.347}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={649.224}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={665.102}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={680.98}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={696.857}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={712.735}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={728.612}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={744.49}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={760.367}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={776.245}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={792.122}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
          <text
            x={808}
            y={261.348}
            className="apexcharts-text apexcharts-xaxis-label"
            style={{
              fontFamily: "&quot",
            }}
            
            transform="translate(15 -4)"
          >
            <title />
          </text>
        </g>
      </g>
    </g>
  </svg>
)