import * as React from "react";
import { Heading2, Heading5 } from "../../atoms/Typography";
import { Button } from "../../atoms/Button";

export interface IBrowseLibrarySectionProps {}

// export const

export function BrowseLibrarySection(props: IBrowseLibrarySectionProps) {
  return (
    <div className="container text-center">
      <Heading2>It's time to bridge the digital and physical.</Heading2>
      <Button>
        <Heading5 color="button-dark" weight="semibold">
          BROWSE LIBRARY
        </Heading5>
      </Button>
    </div>
  );
}
