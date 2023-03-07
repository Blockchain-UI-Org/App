import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Heading, Paragraph, Subtitle, Typography } from "./typography";

describe("Typography", () => {
  it("successfully render Default Typography with P tag", () => {
    render(<Typography >Default Typography</Typography>);
    const comp = screen.getByText("Default Typography");
    expect(comp).toBeInTheDocument();
    expect(comp.tagName).toBe("P");
  });

  it("successfully render default Heading with H1 tag", () => {
    render(<Heading >Default Heading</Heading>);
    const comp = screen.getByText("Default Heading");
    expect(comp).toBeInTheDocument();
    expect(comp.tagName).toBe("H1");
  });

  it.each(["H1", "H2", "H3", "H4", "H5", "H6"])("successfully render Heading with tag %s", (heading) => {
    render(<Heading as={heading.toLowerCase() as "h1"} >Default Heading</Heading>);
    const comp = screen.getByText("Default Heading");
    expect(comp.tagName).toBe(heading)
  });
  
  it("successfully render Subtitle with H4 Tag", () => {
    render(<Subtitle >Default Subtitle</Subtitle>);
    const comp = screen.getByText("Default Subtitle");
    expect(comp).toBeInTheDocument();
    expect(comp.tagName).toBe("H4")
  });

  it.each(["subtitle1", "subtitle2"] as const)("successfully render Subtitle with variant %s", (varient) => {
    render(<Subtitle variant={varient} >Default Subtitle</Subtitle>);
    const comp = screen.getByText("Default Subtitle");
    expect(comp.tagName).toBe("H4")
  })

  it("successfully render Paragraph with P tag", () => {
    render(<Paragraph >Default Paragraph</Paragraph>);
    const comp = screen.getByText("Default Paragraph");
    expect(comp).toBeInTheDocument();
    expect(comp.tagName).toBe("P");
  });

  it.each(["body1", "body2"] as const)("successfully render Paragraph with variant %s", (varient) => {
    render(<Paragraph variant={varient} >Default Paragraph</Paragraph>);
    const comp = screen.getByText("Default Paragraph");
    expect(comp.tagName).toBe("P")
  })


});
