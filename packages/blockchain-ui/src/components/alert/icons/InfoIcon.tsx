import { SVGProps } from "react";

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    width={20}
    data-testid="InfoIcon"
    height={20}
    viewBox="0 0 21 20"
    style={{ display: "inline-block" }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 0C4.977 0 .5 4.477.5 10s4.477 10 10 10 10-4.477 10-10a10 10 0 0 0-10-10Zm1 14a1 1 0 1 1-2 0V9a1 1 0 1 1 2 0v5Zm-2-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      fill="currentColor"
    />
  </svg>
);

InfoIcon.displayName = "InfoIcon"