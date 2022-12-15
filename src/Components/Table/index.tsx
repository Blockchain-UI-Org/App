import React, { FC } from "react";
import { Body, Container, ColumnTitle, Header, Row, Cell } from "./Styled";
import Pagination from "../PaginationV2";

type Cell = string | number | React.ReactNode;

type Row = Cell[];

export interface TableProps {
  alternateRowColor?: boolean;
  columnTitles: string[];
  columnWidths: string[];
  rows: Row[];
  addRowNumbers?: boolean;
  pageNumber?: number;
  setPageNumber?: (i: number) => void;
  rowsPerPage?: number;
  pagination?: boolean;
  numberOfPages?: number;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const Table: FC<TableProps> = ({
  alternateRowColor = false,
  columnTitles,
  columnWidths,
  rows,
  pageNumber = 0,
  rowsPerPage = 100,
  setPageNumber,
  pagination,
  hasPrev,
  hasNext,
}) => {
  return (
    <Container className="table">
      <Header className="tableHeader">
        {columnTitles.map((name, i) => {
          return (
            <ColumnTitle $width={columnWidths[i]} key={"tableHeader " + i}>
              {name}
            </ColumnTitle>
          );
        })}
      </Header>

      <Body>
        {rows.map((row, index) => {
          const evenNumber = Math.abs(index % 2) == 1; //condition to alternate row background color
          return (
            <Row
              $alternateColor={alternateRowColor && evenNumber}
              className={"row " + index}
              key={"row " + index}
            >
              {row.map((cell, i) => {
                return (
                  <Cell $width={columnWidths[i]} key={"tableCell " + index + i}>
                    {cell}
                  </Cell>
                );
              })}
            </Row>
          );
        })}
      </Body>
      {pagination && (
        <Pagination
          pageNumber={pageNumber}
          //@ts-ignore
          setPageNumber={setPageNumber}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      )}
    </Container>
  );
};

export default Table;
