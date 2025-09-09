import cl from './styles.module.scss'
import type { RoadMapProps } from './types'


const defaultRoadMapData: RoadMapProps = {
    RoadMap: {
        heading: "Мой путь обучения"
    },
    RoadMapLearning: {
        heading: "Изучение основ",
        language: "HTML, CSS, JavaScript",
        information: "Освоил основы веб-разработки, изучил семантику HTML, стилизацию CSS и основы JavaScript"
    },
    RoadMapJavaScript: {
        heading: "Углубление в JavaScript",
        language: "ES6+, асинхронность, DOM",
        information: "Изучил современный JavaScript, работу с API, манипуляции с DOM"
    },
    RoadMapTypeScript: {
        heading: "React и TypeScript",
        language: "Компонентная архитектура, типизация",
        information: "Освоил React, хуки, управление состоянием, начал изучать TypeScript"
    },
    RoadMapPortfolio: {
        heading: "Практические проекты",
        portfolio: "Портфолио, веб-приложения",
        information: "Создаю проекты для закрепления знаний и демонстрации навыков"
    },
}


export const RoadMap: React.FC<RoadMapProps> = (props = defaultRoadMapData) => {
    const RoadMapData = { ...defaultRoadMapData, ...props };
    const RoadMap = RoadMapData.RoadMap || defaultRoadMapData.RoadMap;
    const RoadMapLearning = RoadMapData.RoadMapLearning || defaultRoadMapData.RoadMapLearning;
    const RoadMapJavaScript = RoadMapData.RoadMapJavaScript || defaultRoadMapData.RoadMapJavaScript
    const RoadMapTypeScript = RoadMapData.RoadMapTypeScript || defaultRoadMapData.RoadMapTypeScript
    const RoadMapPortfolio = RoadMapData.RoadMapPortfolio || defaultRoadMapData.RoadMapPortfolio

    return (
        <>
            <div className={cl.RoadMap}>
                <div className={cl.RoadMap__container}>
                    <h3>{RoadMap?.heading}</h3>
                    <div className={cl.RoadMap__list}>
                        <div className={cl.RoadMap__item}><section>
                            <h4>{RoadMapLearning?.heading}</h4>
                            <h5>{RoadMapLearning?.language}</h5>
                            <p>{RoadMapLearning?.information}</p>
                        </section></div>
                        <div className={cl.RoadMap__item}><section>
                            <h4>{RoadMapJavaScript?.heading}</h4>
                            <h5>{RoadMapJavaScript?.language}</h5>
                            <p>{RoadMapJavaScript?.information}</p>
                        </section></div>
                        <div className={cl.RoadMap__item}><section>
                            <h4>{RoadMapTypeScript?.heading}</h4>
                            <h5>{RoadMapTypeScript?.language}</h5>
                            <p>{RoadMapTypeScript?.information}</p>
                        </section></div>
                        <div className={cl.RoadMap__item_purple || cl.RoadMap__item}><section>
                            <h4>{RoadMapPortfolio?.heading}</h4>
                            <h5>{RoadMapPortfolio?.portfolio}</h5>
                            <p>{RoadMapPortfolio?.information}</p>
                        </section></div>
                    </div>
                </div>
            </div>
        </>
    )
}