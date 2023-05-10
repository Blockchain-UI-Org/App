import classes from "./Heading.module.css";

import React from "react";
import clsx from "clsx";

export const Heading = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) => {
  return <h1 {...props} className={clsx(classes.heading, props.className)} />;
};
