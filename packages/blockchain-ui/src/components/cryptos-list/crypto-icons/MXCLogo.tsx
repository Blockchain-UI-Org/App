import * as React from "react"
import { SVGProps } from "react"

export const MXCLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 138 138"
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="MXCLogo"
      gradientUnits="userSpaceOnUse"
      x1={53.77}
      y1={124.758}
      x2={84.784}
      y2={10.988}
      gradientTransform="matrix(1 0 0 -1 0 137.89)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#0f51fb",
        }}
      />
      <stop
        offset={0.445}
        style={{
          stopColor: "#6324fb",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#ef3678",
        }}
      />
    </linearGradient>
    <circle
      cx={69}
      cy={69}
      r={69}
      style={{
        fill: "url(#MXCLogo)",
      }}
    />
    <path
      d="M88.2 52.5c0-.5.2-1.1.7-1.7.7-.8 1.5-.9 2-1h8.3c1 0 1.8-.8 1.8-1.8v-9.2c0-1-.8-1.8-1.8-1.8H90c-1 0-1.8.8-1.8 1.8V47c0 .5-.2 1.2-.8 1.9-.5.6-1.2.8-1.7.9h-8.5c-1 0-1.8.8-1.8 1.8v8.2c0 .5-.2 1.2-.8 1.9-.5.6-1.2.8-1.7.9h-7.8c-.5-.1-1.2-.3-1.7-.9-.5-.5-.7-1.1-.8-1.6v-8.5c0-1-.8-1.8-1.8-1.8h-8.5c-.5-.1-1.2-.3-1.7-.9-.5-.5-.7-1.1-.8-1.6v-8.5c0-1-.8-1.8-1.8-1.8h-9.2c-1 0-1.8.8-1.8 1.8V48c0 1 .8 1.8 1.8 1.8H47c.5 0 1.4.2 2 1 .8.9.7 2.1.7 2.3v6.8c0 .5-.2 1.2-.8 1.9-.5.6-1.2.8-1.7.9h-8.5c-1 0-1.8.8-1.8 1.8v34.8c0 1 .8 1.8 1.8 1.8H48c1 0 1.8-.8 1.8-1.8v-34c0-.5.2-1.1.7-1.7.7-.8 1.5-.9 2-1h7.2c.5 0 1.4.2 2 1 .8.9.7 2.1.7 2.3v7.8c0 1 .8 1.8 1.8 1.8h9.2c1 0 1.8-.8 1.8-1.8v-8.4c0-.5.2-1.1.7-1.7.7-.8 1.5-.9 2-1h7.2c.5 0 1.4.2 2 1 .8.9.7 2.1.7 2.3v33.4c0 1 .8 1.8 1.8 1.8h9.2c1 0 1.8-.8 1.8-1.8V64.4c0-1-.8-1.8-1.8-1.8h-8.5c-.5-.1-1.2-.3-1.7-.9-.5-.5-.7-1.1-.8-1.6l.4-7.6z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)