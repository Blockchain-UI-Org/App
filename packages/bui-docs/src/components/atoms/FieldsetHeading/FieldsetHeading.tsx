import { FieldsetHeadingWrapper, FlexContainer, GradientLine } from "@site/src/shared/style";
import * as React from "react";

export interface IFieldsetHeadingProps {}

export function FieldsetHeading({ children }: React.PropsWithChildren<IFieldsetHeadingProps>) {
  return (
    <FlexContainer alignItems="center" justifyContent="center">
      <GradientLine width={80} />
      <FieldsetHeadingWrapper>{children}</FieldsetHeadingWrapper>
      <GradientLine className="flex-grow" />
    </FlexContainer>
  );
}
