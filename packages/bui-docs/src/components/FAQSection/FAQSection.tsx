import clsx from "clsx";
import React, { useState } from "react";
import { Heading } from "../Heading";
import "./FAQSection.scss";

const faqs: { ques: string; ans: string }[] = [
  {
    ques: `What is the BUI component library?`,
    ans: `The BUI component library is a collection of pre-built UI components designed for blockchain-based applications. These components are customizable and can be easily integrated into your Dapp project to enhance its user interface and user experience.`,
  },
  {
    ques: `What are some examples of components included in the BUI component library?`,
    ans: `The BUI component library includes a wide range of components, such as input fields, buttons, forms, tables, charts, and modals. It also includes more specialized components, such as blockchain explorers, wallets, and transaction viewers.`,
  },
  {
    ques: `How do I use the BUI component library in my Dapp project?`,
    ans: `To use the BUI component library in your Dapp project, you can simply import the desired components into your project’s codebase. Then, you can customize the components’ appearance and behavior using CSS and JavaScript to fit your project’s design and functionality requirements.`,
  },
  {
    ques: `Can I create my own custom components using the BUI component library?`,
    ans: `Yes, you can create your own custom components using the BUI component library as a base. You can customize the existing components or create entirely new ones by modifying their source code and styles.`,
  },
  {
    ques: `Is the BUI component library compatible with other blockchain frameworks and platforms?`,
    ans: `Yes, the BUI component library is designed to be platform-agnostic, meaning it can be used with various blockchain frameworks and platforms, such as Ethereum, EOS, and TRON.`,
  },
  {
    ques: `Are there any licensing or usage fees for using the BUI component library?`,
    ans: `No, the BUI component library is open-source and free to use for personal and commercial projects. However, it is important to note that some components may have dependencies or requirements that are subject to their own licensing terms and conditions.`,
  },
  {
    ques: `How can I contribute to the BUI component library?`,
    ans: `There are several ways to contribute to the BUI component library. You can submit bug reports, feature requests, or suggestions for new components by creating an issue on the BUI GitHub repository. You can also contribute directly to the codebase by forking the repository, making changes, and submitting a pull request. Additionally, you can contribute by improving the documentation or providing feedback on the library’s usability and functionality.`,
  },
];

const FAQ = (props: { ques: string; ans: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq">
      <h3 onClick={() => setIsOpen((old) => !old)} className={clsx("faq__title", { active: isOpen })}>
        {props.ques}
        <img src="/img/arrow-down.svg" />
      </h3>
      {isOpen && <p className="faq__content">{props.ans}</p>}
    </div>
  );
};

export const FAQSection = () => {
  return (
    <section className="faqSection">
      <div className="container">
        <div className="row jusitify-content-center">
          <Heading style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginBottom: "50px", whiteSpace: "pre" }}>
            Popular{" "}<span className="gradient">Questions</span>
          </Heading>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {faqs.map((faq) => {
              return <FAQ {...faq} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
