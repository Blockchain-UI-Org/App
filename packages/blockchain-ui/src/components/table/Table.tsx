import { withTheme } from "blockchain-ui/theme";
import styled, { css } from "styled-components";
import { Paragraph } from "blockchain-ui/components/typography";
import { Input } from "blockchain-ui/components/input";
import { BiSearch } from "react-icons/bi";
import { defaultPaginationValue, IPagination, Pagination } from "./TablePagination";
import { FunctionComponent, useEffect, useState } from "react";
import merge from "lodash/merge";

const TableContainer = styled.div`
  display: block;
  white-space: nowrap;
  width: 100%;
  overflow-x: hidden;
  border-radius: 16px;
  ${withTheme(({ theme }) =>
    css({
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    })
  )}
`;

export const THead = styled.thead`
  ${withTheme(({ theme }) =>
    css({
      backgroundColor: theme.palette.background.neutral,
      color: theme.palette.text.secondary,
    })
  )}
`;
export const Th = styled.th<{ color?: string }>`
  text-transform: uppercase;
  font-size: 13px;
  line-height: 24px;
  font-weight: 600;
  text-align: start;
  padding: 15px 26px;
`;
export const TableWrapper = styled.div<{ minWidth?: number }>`
  width: 100%;
  overflow-x: auto;
`;

const TableMain = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:hover {
    ${withTheme(({ theme }) =>
      css({
        backgroundColor: theme.palette.background.neutral,
        color: theme.palette.text.secondary,
      })
    )}
  }
`;

export const Td = styled.td`
  padding: 15px 26px;
`;

const SearchWrapper = styled.div`
  padding: 18px;
`;

const PaginationWrapper = styled.div``;

export interface ITableColumn<T> {
  id?: string;
  name: string;
  title: string;
  options?: {
    searchable?: boolean;
    customBodyRender?: (value: any, row: T) => string | React.ReactNode;
  };
}
export interface ITableProps<T = object> {
  options?: {
    search?: boolean;
    pagination?: {
      enable?: boolean;
    } & IPagination;
  };
  columns: ITableColumn<T>[];
  data: T[];
}
const defaultOptionValues = {
  search: true,
  pagination: {
    enable: true,
    ...defaultPaginationValue,
  },
};

export const Table: FunctionComponent<ITableProps> = ({ options, columns = [], data = [] }) => {
  /**
   * Merge it with default values..
   */
  const tableOptions = merge({}, defaultOptionValues, options);

  const [filterColumns, setFilterColumns] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentRowsPerPage, setRowsPerPage] = useState(
    tableOptions.pagination.rowsPerPage?.defaultValue || defaultPaginationValue.rowsPerPage.values[0]
  );

  /**
   * Filter attributes and logic..
   */
  const [keyword, setKeyword] = useState<string>("");
  const searchFilter = (item: object) => {
    if (!keyword || !filterColumns[0]) return item;
    return filterColumns.some((column) =>
      (item as Record<string, string>)[column]?.toLowerCase()?.includes(keyword.toLowerCase())
    );
  };

  /**
   * Pagination attributes..
   */
  const indexOfLastRow = currentPage * currentRowsPerPage;
  const indexOfFirstRow = indexOfLastRow - currentRowsPerPage;
  const filteredData = data.filter(searchFilter);
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalRows = filteredData.length;
  const totalPages = Math.ceil(totalRows / currentRowsPerPage);
  const startRow = indexOfFirstRow + 1;
  const endRow = Math.min(indexOfLastRow, totalRows);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (columns) {
      const filterColumnNames = columns.filter((column) => column.options?.searchable).map((column) => column.name);
      setFilterColumns(filterColumnNames);
    }
  }, [columns]);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <TableContainer>
      {/* Render search bar if search is allowed using options.. */}
      {tableOptions.search && (
        <SearchWrapper>
          <Input block prefix={<BiSearch size={20} />} placeholder="Search..." onChange={handleKeywordChange} />
        </SearchWrapper>
      )}
      <TableWrapper>
        <TableMain>
          <THead>
            <Tr>
              {columns.map((column, index) => (
                <Th key={column.id || index}>{column.title}</Th>
              ))}
            </Tr>
          </THead>
          <Tbody>
            {currentRows.map((item: Record<string, any>, itemIndex) => (
              <Tr key={item.id || itemIndex}>
                {columns.map((column, index) => (
                  <Td key={column.id || index}>
                    {column.options?.customBodyRender ? (
                      column.options?.customBodyRender(item[column.name], item)
                    ) : (
                      <Paragraph variant="body2">{item[column.name]}</Paragraph>
                    )}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </TableMain>
      </TableWrapper>
      {/* Render pagination bar if pagination is allowed using options.. */}
      {tableOptions.pagination?.enable && (
        <PaginationWrapper>
          <Pagination
            {...tableOptions.pagination}
            onRowPerPageChange={handleRowsPerPageChange}
            currentRowsPerPage={currentRowsPerPage}
            onClickNext={handleNext}
            onClickPrev={handlePrev}
            startRow={startRow}
            endRow={endRow}
            totalRows={totalRows}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </PaginationWrapper>
      )}
    </TableContainer>
  );
};
