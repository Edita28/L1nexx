import cl from "./styles.module.scss";
import type { FrontendProps } from "./types";

const defaultTechnologiesData: FrontendProps = {
    Frontend: {
        heading: "Frontend Technologies",
        html5: "HTML5",
        html5Percent: "90%",
        css3: "CSS3",
        css3Percent: "85%",
        sass: "SCSS/Sass",
        sassPercent: "80%",
        javaScript: "JavaScript",
        javaScriptPercent: "75%",
        typeScript: "TypeScript",
        typeScriptPercent: "65%",
        react: "React",
        reactPercent: "75%"
    },
    FrontendInfo: {
        html5Info: "Семантическая разметка, доступность",
        css3Info: "Flexbox, Grid, анимации, адаптивность",
        sassInfo: "Препроцессоры, миксины, переменные",
        javaScriptInfo: "ES6+, асинхронность, DOM API",
        typeScriptInfo: "Типизация, интерфейсы, дженерики",
        reactInfo: "Хуки, компоненты, состояние",
    },
};

export const FrontendTech: React.FC<FrontendProps> = (props = defaultTechnologiesData ) => {
    const FrontendData = { ...defaultTechnologiesData, ...props };
    const Frontend = FrontendData.Frontend || defaultTechnologiesData.Frontend;
    const FrontendInfo = FrontendData.FrontendInfo || defaultTechnologiesData.FrontendInfo;

    return (
        <>
            <div className={cl.frontend}>
                <div className={cl.frontend__container}>
                    <h2>{Frontend?.heading}</h2>
                    <section className={cl.frontend__section}>
                        <div>
                            <nav>
                                <h3>{Frontend?.html5}</h3>
                                <p>{Frontend?.html5Percent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_html}></section>
                            </section>
                            <p>{FrontendInfo?.html5Info}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{Frontend?.css3}</h3>
                                <p>{Frontend?.css3Percent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_css}></section>
                            </section>
                            <p>{FrontendInfo?.css3Info}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{Frontend?.sass}</h3>
                                <p>{Frontend?.sassPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_sass}></section>
                            </section>
                            <p>{FrontendInfo?.html5Info}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{Frontend?.javaScript}</h3>
                                <p>{Frontend?.javaScriptPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_javaScript}></section>
                            </section>
                            <p>{FrontendInfo?.javaScriptInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{Frontend?.typeScript}</h3>
                                <p>{Frontend?.typeScriptPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_typeScript}></section>
                            </section>
                            <p>{FrontendInfo?.typeScriptInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{Frontend?.react}</h3>
                                <p>{Frontend?.reactPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_react}></section>
                            </section>
                            <p>{FrontendInfo?.reactInfo}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
