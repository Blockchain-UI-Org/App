import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import PaginationV2, { PaginationProps } from "./index";

export default {
  title: "Table/Pagination",
  component: PaginationV2,
} as Meta;

const Template: Story<PaginationProps> = (args) => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <PaginationV2
      {...args}
      pageNumber={pageNumber}
      hasPrev={pageNumber != 0}
      //@ts-ignore
      hasNext={args.totalPageCount && pageNumber < args.totalPageCount}
      setPageNumber={(value) => {
        setPageNumber(value);
      }}
    ></PaginationV2>
  );
};

export const Default = Template.bind({});

export const MaxPageCount = Template.bind({});

MaxPageCount.args = {
  totalPageCount: 5,
};
