import { CryptoIcon } from "blockchain-ui/components/icon/icon";
import { Table, TableContainer, Tbody, Td, Th, THead, Tr } from "./Table";

export default {
  title: "Table/Table",
  component: Table,
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

export const TableLight = () => (
  <TableContainer maxWidth={600}>
    <Table>
      <THead>
        <Tr>
          <Th>Token</Th>
          <Th>Value Per Token</Th>
          <Th>24 Hr Change</Th>
        </Tr>
      </THead>
      <Tbody>
        <Tr>
          <Td>
            <CryptoIcon cryptoSymbol="DAI" />
            Dai
          </Td>
          <Td>$1.01</Td>
          <Td>1.44%</Td>
        </Tr>
        <Tr>
          <Td>
            <CryptoIcon cryptoSymbol="CDOT" /> cDOT
          </Td>
          <Td>$1.07</Td>
          <Td>-11.71%</Td>
        </Tr>
        <Tr>
          <Td>
            <CryptoIcon cryptoSymbol="CKSM" /> cKSM
          </Td>
          <Td>$0.03</Td>
          <Td>-6.05%</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
);


export const TableDark = () => (
    <TableContainer maxWidth={600}>
      <Table variant="dark">
        <THead>
          <Tr>
            <Th>Token</Th>
            <Th>Value Per Token</Th>
            <Th>24 Hr Change</Th>
          </Tr>
        </THead>
        <Tbody>
          <Tr>
            <Td>
              <CryptoIcon cryptoSymbol="DAI" />
              Dai
            </Td>
            <Td>$1.01</Td>
            <Td>1.44%</Td>
          </Tr>
          <Tr>
            <Td>
              <CryptoIcon cryptoSymbol="CDOT" /> cDOT
            </Td>
            <Td>$1.07</Td>
            <Td>-11.71%</Td>
          </Tr>
          <Tr>
            <Td>
              <CryptoIcon cryptoSymbol="CKSM" /> cKSM
            </Td>
            <Td>$0.03</Td>
            <Td>-6.05%</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );