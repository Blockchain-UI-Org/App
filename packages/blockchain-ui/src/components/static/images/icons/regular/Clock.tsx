import { SVGProps } from "react";

export const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 8v5l3.333 1.667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
