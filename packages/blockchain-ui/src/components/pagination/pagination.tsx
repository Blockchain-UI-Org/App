import React, { FC } from "react";
import { PageButton, Pagination } from "./Styled";

export interface PaginationProps {
  pageNumber: number;
  setPageNumber: (i: number) => void;
  totalPageCount?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
}

const PaginationV2: FC<PaginationProps> = ({ pageNumber, setPageNumber, totalPageCount, hasPrev, hasNext }) => {
  return (
    <Pagination $disablePrev={!hasPrev} $disableNext={!hasNext}>
      <div className="prevStep" onClick={() => hasPrev && setPageNumber(pageNumber - 1)}>
        {"<"} Prev
      </div>
      {/* <PageButton className="pageButton" $highlight={false}>
        {pageNumber + 1}
      </PageButton> */}

      <div className="nextStep" onClick={() => hasNext && setPageNumber(pageNumber + 1)}>
        Next {">"}
      </div>
    </Pagination>
  );
};

export { PaginationV2 };
