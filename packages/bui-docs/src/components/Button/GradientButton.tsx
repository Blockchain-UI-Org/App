import clsx from "clsx";
import classes from "./GradientButton.module.css";
import React from "react";

export const GradientButton = (
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
  return <button {...props} className={clsx(classes.gradientButton, props.className)} />;
};
