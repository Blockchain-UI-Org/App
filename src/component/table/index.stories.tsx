import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import Table, { TableProps } from "./index";
import styled from "@emotion/styled";

export default {
  title: "Table/Table",
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <Table
      {...args}
      pageNumber={pageNumber}
      setPageNumber={(value) => {
        setPageNumber(value);
      }}
    ></Table>
  );
};

export const WidthsInPercentage = Template.bind({});

const defaultArgs = {
  columnTitles: ["Column1 Title- 50%", "Column2 - 30%", "Column3 - 20%"],
  columnWidths: ["50%", "30%", "20%"],
  rows: [...new Array(20)].map((_, i) => [`Column1`, `Column2`, `Column3`]),
};

WidthsInPercentage.args = defaultArgs;

WidthsInPercentage.argTypes = {
  alternateRowColor: { control: { type: "boolean" } },
};

export const FixedWidths = Template.bind({});

FixedWidths.args = {
  ...defaultArgs,
  columnWidths: ["500px", "300px", "200px"],
  columnTitles: ["Column1 Title- 500px", "Column2 - 300px", "Column3 - 200px"],
};

const FixedContainer = styled.div`
  width: 1000px;

  .title {
    margin: 10px 0;
  }
`;

const FixedContainerTemplate: Story<TableProps> = (args) => (
  <FixedContainer style={{ width: "1000px" }}>
    <div className="title">Width of container is 1000px</div>
    <Table {...args}></Table>
  </FixedContainer>
);

export const FixedAndPercentageWidths = FixedContainerTemplate.bind({});

FixedAndPercentageWidths.args = {
  ...defaultArgs,
  columnWidths: ["50%", "250px", "250px"],
  columnTitles: ["Column1 Title- 50%", "Column2 - 250px", "Column3 - 250px"],
};

export const Numbered = Template.bind({});

Numbered.args = {
  ...defaultArgs,
  pagination: true,
  addRowNumbers: true,
  pageNumber: 0,
  rowsPerPage: 10,
};
