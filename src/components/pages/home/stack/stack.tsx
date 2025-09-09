import React from "react";
import cl from "./styles.module.scss";
import type { StackProps } from "./types";


const defaultStackData: StackProps = {
  stack: {
    header: "Технологический стек",
    cover: "Основные технологии, с которыми я работаю",
    react: "React",
    typescript: "TypeScript",
    javascript: "JavaScript",
    html5: "HTML5",
    css3: "CSS3",
    scss: "SCSS",
    more: "Подробнее о навыках"
  },
};

const handleNavigation = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    
};

export const Stack: React.FC<StackProps> = (props = defaultStackData) => {
  const stackData = { ...defaultStackData, ...props };
  const stackInfo = stackData.stack || defaultStackData.stack;

  return (
    <div className={cl.stack}>
      <h2>{stackInfo?.header}</h2>
      <p>{stackInfo?.cover}</p>
      <div className={cl.stack__container}>
        <a href="https://react.dev/"><section className={cl.stack__react}>
          <h3>R</h3>
          <p>{stackInfo?.react}</p>
        </section></a>
        <a href="https://www.typescriptlang.org/"><section className={cl.stack__typescript}>
          <h3>T</h3>
          <p>{stackInfo?.typescript}</p>
        </section></a>
        <a href="https://javascript.info/"><section className={cl.stack__javascript}>
          <h3>J</h3>
          <p>{stackInfo?.javascript}</p>
        </section></a>
        <a href="https://html.spec.whatwg.org/multipage/"><section className={cl.stack__html}>
          <h3>H</h3>
          <p>{stackInfo?.html5}</p>
        </section></a>
        <a href="https://devdocs.io/css/"><section className={cl.stack__css}>
            <h3>C</h3>
            <p>{stackInfo?.css3}</p>
        </section></a>
        <a href="https://sass-lang.com/"><section className={cl.stack__scss}>
            <h3>S</h3>
            <p>{stackInfo?.scss}</p>
        </section></a>
      </div>
      <button onClick={() => handleNavigation('/skills')} className={cl.stack__button}>Подробнее о навыках <svg className={cl.stack__button_svg} fill="none" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></svg></button>
    </div>
  );
};
