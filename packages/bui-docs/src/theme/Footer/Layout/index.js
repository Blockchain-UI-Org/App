import React from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
const FooterLinks = [
  {
    href: "https://www.chromatic.com/library?appId=63a670b1ce0472f1c60a3f59",

    label: "Library",
    className: "external-link",
  },
];
const icons = [
  {
    href: "https://twitter.com/ui_blockchain",
    label: "",
    className: "fa-brands fa-twitter twitter-icon",

    "aria-label": "Twitter Page",
  },
  {
    label: "",
    href: "https://github.com/Blockchain-UI-Org/Library",
    className: "fa-brands fa-github",
    "aria-label": "GitHub repository",
  },
];
export default function FooterLayout({ style, links, logo, copyright }) {
  const { footer } = useThemeConfig();
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container ">
        <div className="row py-5 justify-content-center">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-3 d-flex justify-content-center">
                <Link className={"footer__link"} to={"/"}>Blockchain UI</Link>
              </div>
              {[...footer.links[0].items, ...FooterLinks].map((item) => {
                if (item.href) {
                  return (
                    <div className="col-sm-3 d-flex justify-content-center">
                      <a className={clsx("footer__link",item.className)} target="_blank" href={item.href}>
                        {item.label}
                      </a>
                    </div>
                  );
                }
                return (
                  <div className="col-sm-3 d-flex justify-content-center">
                    <Link className={clsx("footer__link",item.className)} target="_blank" href={item.href} to={item.to}>
                      {item.label}
                    </Link>
                  </div>
                );
              })}
              <div className="col-sm-3">
                {icons.map((item) => {
                  return (
                    <a className={clsx("footer__link",item.className)} target="_blank" href={item.href}>
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">{copyright}</div>
        </div>
      </div>
    </footer>
  );
}
