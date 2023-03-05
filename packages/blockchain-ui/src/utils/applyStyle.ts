import { isArray } from "lodash";

export const applyStyle = (elm: HTMLElement | HTMLElement[], style: React.CSSProperties) => {
  let elements: HTMLElement[] = [];
  if (isArray(elm)) {
    elements = elm;
  } else {
    elements = [elm];
  }
  elements.forEach((elm) => {
    for (let key in style) {
      // @ts-ignore
      elm.style[key] = style[key];
    }
  });
};
