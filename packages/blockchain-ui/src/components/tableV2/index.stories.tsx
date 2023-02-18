import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TableComponent as Table } from ".";
import { _appInvoices } from "../_mock";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Table/Table",
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => (
  <Container>
    <Table {...args} />
  </Container>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Transactions",
  tableData: _appInvoices,
  tableLabels: [
    { id: "date", label: "Date" },
    { id: "description", label: "Description" },
    { id: "amount", label: "Amount" },
    { id: "status", label: "Status" },
    { id: "" },
  ],
};

const Container = styled.div`
  width: 50%;
  height: 50%;
`;
