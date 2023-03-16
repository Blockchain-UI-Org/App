import * as React from "react"
import { SVGProps } from "react"

export const BiconomyLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={0}
      y1={199.89}
      x2={200}
      y2={-0.11}
      gradientTransform="matrix(1 0 0 -1 0 199.89)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#8d3308",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#8d3308",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#a)",
      }}
      d="M0 0h200v200H0z"
    />
    <path d="M10 10h180v180H10z" />
    <path
      d="M113 49.4c-3.7-2.1-8-3.4-12.5-3.4h-25C82.4 46 88 51.6 88 58.5V96h12.5c4.6 0 8.8-1.2 12.5-3.4 2.8-1.6 5.2-3.7 7.1-6.2 3.4-4.3 5.4-9.6 5.4-15.5 0-9.1-5-17.2-12.5-21.5z"
      style={{
        fill: "#d85111",
      }}
    />
    <path
      d="M120.1 86.5c-2 2.5-4.4 4.6-7.1 6.2-3.7 2.1-8 3.4-12.5 3.4H88V58.5C88 51.6 82.4 46 75.5 46S63 51.6 63 58.5V146h43.7c2.2 0 4.2-.2 6.2-.6 14.3-2.9 25-15.5 25-30.6.1-12.5-7.2-23.3-17.8-28.3z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)