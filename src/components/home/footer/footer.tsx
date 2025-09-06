import cl from "./styles.module.scss";
import type { footerProps } from "./types";

const defaultFooterData: footerProps = {
  sectionlink: {
    portfolio: "Stokeyer Portfolio",
  },
  copyright: {
    copyrightText: "© 2025 Stokeyer Portfolio",
    created: "Создано с использованием React, TypeScript и ScSS",
  },
};

export const Footer: React.FC<footerProps> = (props = defaultFooterData) => {
    const FooterData = { ...defaultFooterData, ...props };
    const Footerlink = FooterData.sectionlink;
    const FooterCopyrigt = FooterData.copyright;
  return (
    <>
      <div className={cl.footer}>
        <div className={cl.footer__container}>
          <section className={cl.footer__section_link}>
            <nav>
              <a href="./">
                <span className={cl.logo}>FD</span>
              </a>
              <a href="./" className={cl.logo__text}>
                <span>{Footerlink?.portfolio}</span>
              </a>
            </nav>
          </section>
          <section className={cl.footer__section_copyright}>
            <p>{FooterCopyrigt?.copyrightText}</p>
          </section>
        </div>
      </div>
    </>
  );
};
