import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import styled from "styled-components";
import { FC } from "react";
import { sentenceCase } from "change-case";
import { Box, Button, Card, CardHeader, CardProps, Divider } from "@mui/material";
import TableHeadCustom from "./tableHeadCustom";
import { Icon as Iconify } from "@iconify/react";
import { fCurrency } from "../../utils/number";
import Label from "../label";
// import palette from "theme/palette";

export type RowProps = {
  id: string;
  category: string;
  price: number;
  status: string;
  date?: string;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  tableData: RowProps[];
  tableLabels: any;
}

export default function TableComponent({ title, subheader, tableData, tableLabels, ...other }: Props) {
  return (
    <Card {...other} style={{ backgroundColor: "#212B36", color: "#fff", padding: "10px" }}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ minWidth: 720 }}>
        <StyledTable
          style={{
            backgroundColor: "#212B36",
            color: "#fff",
            borderBottom: "none",
          }}
        >
          <TableHeadCustom headLabel={tableLabels} />

          <TableBody sx={{ color: "#8C9AA7", borderBottom: "none" }}>
            {tableData.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>

      <Divider />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={"eva:arrow-ios-forward-fill"} />}>
          View All
        </Button>
      </Box>
    </Card>
  );
}

type TableRowProps = {
  row: RowProps;
};

const Row: FC<TableRowProps> = ({ row }) => {
  return (
    <TableRow
      style={{
        color: "#FFF",
        borderBottom: "none",
        borderTop: "none",
        fontWeight: "light",
      }}
    >
      <TableCell
        style={{
          color: "#FFF",
          borderBottom: "none",
          fontWeight: "light",
          fontSize: "14px",
        }}
      >{`${row.date}`}</TableCell>

      <TableCell
        style={{
          color: "#FFF",
          borderBottom: "none",
          fontWeight: "-moz-initial",
        }}
      >
        {row.category}
      </TableCell>

      <TableCell style={{ color: "#FFF", borderBottom: "none", fontSize: "14px" }}>{fCurrency(row.price)}</TableCell>

      <TableCell style={{ color: "#FFF", borderBottom: "none", fontSize: "14px" }}>
        <Label
          variant="ghost"
          color={
            (row.status === "in_progress" && "info") ||
            (row.status === "failed" && "error") ||
            (row.status === "complete" && "success") ||
            "info"
          }
        >
          {sentenceCase(row.status)}
        </Label>
      </TableCell>

      <TableCell align="right" style={{ color: "#FFF", borderBottom: "none", fontSize: "14px" }}></TableCell>
    </TableRow>
  );
};

const Container = styled.div`
  color: white;
`;

const StyledTable = styled(Table)`
  color: white;
  border-bottom: none;
  .MuiTableHead-root {
    border-bottom: none;
    margin: 0 5px;
    background-color: blue;
    color: red;
  }
`;
