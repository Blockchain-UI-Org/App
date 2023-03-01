import { SVGProps } from "react";

export const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="SuccessIcon"
    fill="none"
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 20"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.5 10c0-5.523 4.477-10 10-10a10 10 0 1 1-10 10Zm9.73 3.61 4.57-6v-.03a1.006 1.006 0 0 0-1.6-1.22l-3.78 5-1.63-2.08a1.001 1.001 0 0 0-1.58 1.23l2.44 3.11a1 1 0 0 0 1.58-.01Z"
      fill="currentColor"
    />
  </svg>
);
