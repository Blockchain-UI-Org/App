import clsx from "clsx";
import classes from "./GradientInput.module.css";
import React from "react";

export const GradientInput = (
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => {
  return (
    <div className={classes.wrapper}>
      <input {...props} className={clsx(classes.input, props.className)} />
    </div>
  );
};
