import * as React from "react"
import { SVGProps } from "react"

export const SynthetixNetworkLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"

    xmlSpace="preserve"
    {...props}
  >
    <g transform="scale(.26458)">
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1={1621.495}
        y1={225.489}
        x2={1621.495}
        y2={-30.511}
        gradientTransform="matrix(.75 0 0 -.75 -853.271 169.115)"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#090220",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#170659",
          }}
        />
      </linearGradient>
      <circle
        cx={362.8}
        cy={362.8}
        r={362.8}
        style={{
          fill: "url(#a)",
        }}
      />
      <path
        d="M243.3 272.6c-2.9-3.6-7.3-5.6-12-5.6h-96.9c-.8 0-1.5-.3-2.1-.8-.5-.5-.8-1.1-.8-1.8v-65.3c0-.7.3-1.3.8-1.8.6-.6 1.3-.9 2.1-.8h102.4c25.8 0 48.1 10.6 66.9 31.7l24.9 30.4-48.5 59.1-36.8-45.1zm179-44.7c18.7-20.9 41.1-31.4 67.2-31.4h102.1c.7-.1 1.4.2 1.9.6.5.5.7 1.2.6 2v65.3c0 .7-.2 1.3-.6 1.8-.5.6-1.2.9-1.9.8h-96.9c-4.6-.1-9 2-12 5.6l-71.4 86.9L483 447c2.9 3.3 7.2 5.3 11.6 5.2h96.9c.7-.1 1.5.3 1.9.8.4.6.7 1.4.6 2.1v65.3c0 .7-.2 1.3-.6 1.8-.5.6-1.2.9-1.9.8h-102c-26.1 0-48.3-10.6-66.9-31.7l-59.4-72.5-59.4 72.5c-18.7 21.1-41.1 31.7-67.2 31.7H134.4c-.7.1-1.5-.3-1.9-.8-.5-.6-.7-1.4-.6-2.1v-65.3c0-.7.2-1.3.6-1.8.5-.6 1.2-.9 1.9-.8h96.9c4.6 0 9-2.1 12-5.6l70.1-85.6 108.9-133.1z"
        style={{
          fill: "#00d1ff",
        }}
      />
    </g>
  </svg>
)
