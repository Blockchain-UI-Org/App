import { SVGProps } from "react"

export const Swap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 21.333a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
      fill="#0EC9FE"
    />
    <path d="M8.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" fill="#0C3EE3" />
  </svg>
)
