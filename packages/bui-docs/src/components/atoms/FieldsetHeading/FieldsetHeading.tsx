import { FieldsetHeadingWrapper, GradientLine } from "@site/src/shared/style";
import * as React from "react";

export interface IFieldsetHeadingProps {}

export function FieldsetHeading({ children }: React.PropsWithChildren<IFieldsetHeadingProps>) {
  return (
    <div>
      <GradientLine />
      <FieldsetHeadingWrapper>{children}</FieldsetHeadingWrapper>
    </div>
  );
}
