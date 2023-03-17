import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "./Table";
import { DefaultTheme } from "blockchain-ui/theme";

const disabledTextColor = DefaultTheme.palette.text.disabled;

const simpleData = {
  columns: [
    {
      name: "token",
      title: "Token",
      options: {
        searchable: true,
      },
    },
    {
      name: "valuePerToken",
      title: "Value Per Token",
    },
  ],
  data: [
    {
      token: "DaiToken",
      valuePerToken: "$1.01",
    },
    {
      token: "Ethereum",
      valuePerToken: "$1.01",
    },
    {
      token: "Bitcoin",
      valuePerToken: "$1.01",
    },
  ],
};

describe("Table Test Cases", () => {
  test("Should render table component", () => {
    render(<Table columns={simpleData.columns} data={simpleData.data} />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  /**
   * Test case to render table headers..
   */
  test("Should renders table headers", () => {
    render(<Table columns={simpleData.columns} data={simpleData.data} />);
    const tableHeaderElements = screen.getAllByRole("columnheader");
    expect(tableHeaderElements).toHaveLength(2);
    expect(tableHeaderElements[0]).toHaveTextContent("Token");
    expect(tableHeaderElements[1]).toHaveTextContent("Value Per Token");
  });

  /**
   * Test case to render table rows..
   */
  test("Should renders table rows", () => {
    render(<Table columns={simpleData.columns} data={simpleData.data} />);
    const tableRowElements = screen.getAllByRole("row");
    expect(tableRowElements).toHaveLength(4);
  });

  /**
   * Test case to search on table rows..
   */
  test("Should search on table rows", () => {
    render(<Table columns={simpleData.columns} data={simpleData.data} />);

    const searchInputElement = screen.getByRole("search");
    fireEvent.change(searchInputElement, { target: { value: "ethereum" } });
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(2);
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
  });

  /**
   * For Pagination ..
   */

  test("Renders select options of 5, 10, 15, 20, 30, 50", () => {
    render(
      <Table
        columns={simpleData.columns}
        data={[
          ...Array(10)
            .fill("")
            .map(() => simpleData.data)
            .flat(),
        ]}
      />
    );

    const rowsPerPageText = screen.getByText("Rows per page");
    expect(rowsPerPageText).toBeInTheDocument();

    const selectOptions = screen.getAllByRole("option");
    expect(selectOptions).toHaveLength(6);
    expect(selectOptions[0]).toHaveTextContent("5");
    expect(selectOptions[1]).toHaveTextContent("10");
    expect(selectOptions[2]).toHaveTextContent("15");
    expect(selectOptions[3]).toHaveTextContent("20");
    expect(selectOptions[4]).toHaveTextContent("30");
    expect(selectOptions[5]).toHaveTextContent("50");
  });

  /**
   * Render start, end and total count..
   */
  test("Should renders start and end of total", () => {
    /** It will be 10*3= 30 records.. */
    render(
      <Table
        columns={simpleData.columns}
        data={[
          ...Array(10)
            .fill("")
            .map(() => simpleData.data)
            .flat(),
        ]}
      />
    );
    expect(screen.getByText("1-5 of 30")).toBeInTheDocument();
  });

  /**
   * Previous and next button test cases ..
   */
  test("renders previous and next icons", () => {
    /** It will be 10*3= 30 records.. */
    render(
      <Table
        columns={simpleData.columns}
        data={[
          ...Array(10)
            .fill("")
            .map(() => simpleData.data)
            .flat(),
        ]}
      />
    );
    expect(screen.getByRole("previous-icon")).toBeInTheDocument();
    expect(screen.getByRole("next-icon")).toBeInTheDocument();
  });

  /**
   * Previous button should disable..
   */
  test("Should disable previous button on first page", () => {
    /** It will be 10*3= 30 records.. */
    render(
      <Table
        columns={simpleData.columns}
        data={[
          ...Array(10)
            .fill("")
            .map(() => simpleData.data)
            .flat(),
        ]}
      />
    );
    const previousButton = screen.getByRole("previous-icon");
    console.log("previous button is ", previousButton);
    const svgElement = previousButton.querySelector("svg");
    console.log("svg element is ", svgElement);
    if (svgElement) {
      expect(svgElement.getAttribute("color")).toContain(`${disabledTextColor}`);
    }
  });

  /**
   * Next button should disable..
   */
  test("Should disable next button on first page", () => {
    /** It will be 10*3= 30 records.. */
    render(
      <Table
        columns={simpleData.columns}
        data={[
          ...Array(10)
            .fill("")
            .map(() => simpleData.data)
            .flat(),
        ]}
      />
    );

    /**
     * Select 50 from select dropdown..
     */
    const selectElement = screen.getByTestId("row-per-page-select");
    fireEvent.change(selectElement, { target: { value: 50 } });

    const nextButton = screen.getByRole("next-icon");
    const svgElement = nextButton.querySelector("svg");
    if (svgElement) {
      expect(svgElement.getAttribute("color")).toContain(`${disabledTextColor}`);
    }
  });
});
