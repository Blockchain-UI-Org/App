import { SVGProps } from "react";

export const InputHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={21} height={17} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.501 17a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0l1.08 1.08 1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78a1 1 0 0 1-.71.29Z"
        fill="#919EAB"
      />
    </svg>
  );
};

InputHeartIcon.displayName = "InputHeartIcon";
