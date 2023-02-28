import React, { CSSProperties, FC } from "react";

export const Spacer = ({
  height = 20,
  width = "100%",
}: {
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
}) => {
  return <div style={{ height, width, background: "transparent" }} />;
};

export const HorizontalSpacer = ({
  height = "100%",
  width = 20,
}: {
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
}) => {
  return <div style={{ height, width, background: "transparent" }} />;
};

export const DisplayExample: FC<{
  children: React.ReactNode;
  row?: boolean;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
}> = ({ children, row, alignItems, justifyContent }) => {
  return (
    <div
      style={{
        borderRadius: 8,
        display: "flex",
        flexDirection: row ? "row" : "column",
        alignItems: "center" || alignItems,
        justifyContent,
        flexWrap: "wrap",
        marginBottom: 20,
        border: "1px solid rgb(231, 235, 240)",

        padding: "20px 5px",
      }}
    >
      {children}
    </div>
  );
};
