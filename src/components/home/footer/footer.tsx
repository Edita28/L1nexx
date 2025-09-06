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

export const Footer: React.FC<footerProps> = (props) => {
  const FooterData = { ...defaultFooterData, ...props };
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
                <span>Frontend Developer</span>
              </a>
            </nav>
          </section>
          <section className={cl.footer__section_copyright}></section>
        </div>
      </div>
    </>
  );
};
