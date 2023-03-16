import { ComponentStory } from "@storybook/react";
import { productTableData } from "blockchain-ui/_mock/table";
import styled from "styled-components";
import { Paragraph } from "../typography";
import { Tag } from "../tag/tag";
import { Table } from "./Table";
import { DotsVerticalIcon } from "../static/images/icons/regular/DotsVerticalIcon";

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

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const genericDataConfig = {
  columns: [
    {
      name: "product",
      title: "Product",
      options: {
        searchable: true,
        customBodyRender: (value: any, row: any) => (
          <ProductNameSection>
            <img src="/assets/nft7.jpeg" alt="nftImage" />
            <Paragraph variant="body2">{row?.product}</Paragraph>
          </ProductNameSection>
        ),
      },
    },
    {
      name: "createdAt",
      title: "Create at",
    },
    {
      name: "price",
      title: "Price",
    },
    {
      name: "status",
      title: "Status",
      options: {
        searchable: true,
        customBodyRender: (value: any, row: any) => (
          <Tag variant="filled" color={statusMapper[value] as any}>
            {value}
          </Tag>
        ),
      },
    },
    {
      name: "",
      title: "",
      options: {
        customBodyRender: (value: any, row: any) => <DotsVerticalIcon />,
      },
    },
  ],
  data: productTableData,
};

export const DefaultTable = Template.bind({});

DefaultTable.args = {
  options: {
    search: true,
  },
  columns: [
    {
      name: "token",
      title: "Token",
    },
    {
      name: "valuePerToken",
      title: "Value Per Token",
    },
    {
      name: "column1",
      title: "Column 1",
    },
    {
      name: "column2",
      title: "Column 2",
    },
  ],
  data: [
    {
      token: "Dai",
      valuePerToken: "$1.01",
      column1: 24,
      column2: 24,
    },
    {
      token: "Dai",
      valuePerToken: "$1.01",
      column1: "$1.01",
      column2: 24,
    },
    {
      token: "Dai",
      valuePerToken: "$1.01",
      column1: "$1.01",
      column2: 24,
    },
    {
      token: "Dai",
      valuePerToken: "$1.01",
      column1: "$1.01",
      column2: 24,
    },
    {
      token: "Dai",
      valuePerToken: "$1.01",
      column1: "$1.01",
      column2: 24,
    },
  ],
};

export const TableWithCustomRender = Template.bind({});

const ProductNameSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  & img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const statusMapper: Record<string, string> = {
  inStock: "success",
  lowStock: "warning",
  outOfStock: "error",
};

TableWithCustomRender.args = genericDataConfig;

// Story for table without row per page..
export const TableWithoutRowPerPage = Template.bind({});
TableWithoutRowPerPage.args = {
  ...genericDataConfig,
  options: {
    pagination: {
      rowsPerPage: {
        enable: false,
      },
    },
  },
};

// Story for table without pagination
export const TableWithoutRowPerPagination = Template.bind({});
TableWithoutRowPerPagination.args = {
  ...genericDataConfig,
  options: {
    pagination: {
      enable: false,
    },
  },
};
