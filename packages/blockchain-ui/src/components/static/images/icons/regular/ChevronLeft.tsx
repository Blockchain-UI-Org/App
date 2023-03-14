import { SVGProps } from "react";

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.02473 11.8337C4.77257 11.8346 4.53359 11.7212 4.37473 11.5254L0.349729 6.52541C0.0969652 6.21791 0.0969652 5.77458 0.349729 5.46708L4.5164 0.467078C4.81095 0.112695 5.33701 0.0641929 5.6914 0.358745C6.04578 0.653297 6.09428 1.17936 5.79973 1.53375L2.07473 6.00041L5.67473 10.4671C5.88281 10.7168 5.92664 11.0648 5.78702 11.3584C5.64739 11.652 5.34979 11.8375 5.02473 11.8337Z"
      fill={props.color || "white"}
      fillOpacity={props.opacity || "1"}
    />
  </svg>
);
