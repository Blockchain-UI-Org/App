import styled from "styled-components";
import { Paragraph } from "blockchain-ui/components/typography";
import { Divider } from "blockchain-ui/components/divider";
import { useTheme, withTheme } from "blockchain-ui/theme";
import { ChevronLeft } from "../static/images/icons/regular/ChevronLeft";
import { ChevronRight } from "../static/images/icons/regular/ChevronRight";
import merge from "lodash/merge";

export interface IPagination {
  rowsPerPage?: {
    enable?: boolean;
    values?: number[];
    defaultValue?: number;
  };
  onRowPerPageChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  currentRowsPerPage?: number;
  onClickPrev?: () => void;
  onClickNext?: () => void;
  startRow?: number;
  endRow?: number;
  totalRows?: number;
  currentPage?: number;
  totalPages?: number;
}

export const defaultPaginationValue = {
  rowsPerPage: {
    enable: true,
    values: [5, 10, 15, 20, 30, 50],
    defaultValue: 5,
  },
};

const PaginationWrapper = styled.div`
  padding: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
`;

const RowsPerPageSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  & select {
    background: transparent;
    border: none;
    outline: none;
    color: ${withTheme(({ theme }) => theme.palette.text.primary)};
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const NavigationIcon = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export function Pagination(props: IPagination) {
  const { currentPage, totalPages, startRow, endRow, totalRows, onClickNext, onClickPrev, ...paginationProps } = merge(
    {},
    defaultPaginationValue,
    props
  );
  const theme = useTheme();

  const disableNext = currentPage === totalPages;
  const disablePrev = currentPage === 1;

  return (
    <>
      <Divider />
      <PaginationWrapper role="pagination">
        {paginationProps.rowsPerPage.enable && (
          <RowsPerPageSection>
            <Paragraph variant="body2">Rows per page</Paragraph>
            <select data-testId="row-per-page-select" onChange={paginationProps.onRowPerPageChange}>
              {paginationProps.rowsPerPage.values?.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
              =
            </select>
          </RowsPerPageSection>
        )}
        <Paragraph variant="body2">
          {startRow}-{endRow} of {totalRows}
        </Paragraph>
        <NavigationWrapper>
          <NavigationIcon {...(!disablePrev ? { onClick: onClickPrev } : {})} role="previous-icon">
            <ChevronLeft color={disablePrev ? theme.palette.text.disabled : theme.palette.text.primary} />
          </NavigationIcon>
          <NavigationIcon {...(!disableNext ? { onClick: onClickNext } : {})} role="next-icon">
            <ChevronRight color={disableNext ? theme.palette.text.disabled : theme.palette.text.primary} />
          </NavigationIcon>
        </NavigationWrapper>
      </PaginationWrapper>
    </>
  );
}
