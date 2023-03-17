import * as React from "react"
import { SVGProps } from "react"

export const RevainLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 198 198"
    width={2500}
    height={2500}
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={48.215}
      y1={34.676}
      x2={171.281}
      y2={189.785}
    >
      <stop offset={0} stopColor="#771a4e" />
      <stop offset={0.5} stopColor="#5e1953" />
      <stop offset={0.875} stopColor="#430f4e" />
      <stop offset={1} stopColor="#3a0c4c" />
    </linearGradient>
    <path
      d="M.3 0h198v198H.3z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M51.8 40v131l28-15V56l40 23-30 16v33l67 46v-31l-41-29 34-18V64l-70-39z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)

