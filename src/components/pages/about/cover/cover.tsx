import cl from './styles.module.scss'
import type {CoverProps} from './types'
import React from 'react'

const defaultCoverData: CoverProps = {
    CoverHeader: {
        header: 'Обо мне',
        header_info: 'Узнайте больше о моем пути в разработке'
    },
    CoverInfo: {
        heading: 'Мой путь в программировании',
        CoverInfo__text_1: "Привет! Меня зовут Stokeyer, и я начинающий Frontend\nразработчик с большой страстью к созданию красивых и\nфункциональных веб-интерфейсов. Мой путь в программировании\nначался с изучения основ  HTML и CSS, и с тех пор\nя постоянно развиваюсь в этой области.",
        CoverInfo__text_2: "За время обучения я освоил современные технологии, такие\nкак React, TypeScript, и различные инструменты для стилизации\nвключая SCSS и CSS-фреймворки. Я верю в важность написания\nчистого, поддерживаемого кода и следую лучшим практикам\nразработки.",
        CoverInfo__text_3: "Моя цель — стать частью команды, где я смогу применить свои\nзнания, продолжить обучение и внести вклад в создание\nкачественных продуктов, которые решают реальные проблемы\nпользователей."
    },
    CoverCards: {
        heading: 'Быстрые факты',
        location: 'Локация',
        locationInfo: 'Симферополь, Россия',
        experience: 'Опыт',
        experienceInfo: 'Начинающий\nразработчик',
        education: 'Образование',
        educationInfo: 'Самообучение + курсы',
        language: 'Языки',
        languageInfo: 'Русский (родной),\nАнглийский (A1)'
    },
    CoverMotivation: {
        heading: 'Что меня мотивирует',
        CoverMotivation__First: "Создание интуитивных пользовательских интерфейсов",
        CoverMotivation__Second: "Изучение новых технологий и подходов к разработке",       
        CoverMotivation__Third: "Решение сложных задач через код",
        CoverMotivation__Fourth: "Работа в команде и обмен знаниями",
    },
    CoverReady: {
        heading: 'Готов к работе',
        information: 'Ищу возможность\nприсоединиться к\nкоманде в качестве Junior\nFrontend разработчика.',
        intern: '✓ Готов к стажировке',
        education: '✓ Открыт к обучению',
        team: '✓ Командный игрок'
    }
}



export const Cover: React.FC<CoverProps> = (props = defaultCoverData) => {
    const CoverData = { ...defaultCoverData, ...props };
    const CoverHeader = CoverData.CoverHeader || defaultCoverData.CoverHeader;
    const CoverInfo = CoverData.CoverInfo || defaultCoverData.CoverInfo;
    const CoverCards = CoverData.CoverCards  || defaultCoverData.CoverCards
    const CoverMotivation = CoverData.CoverMotivation || defaultCoverData.CoverMotivation
    const CoverReady = CoverData.CoverReady || defaultCoverData.CoverReady

    return(
        <>
        <div className={cl.Cover}>
            <div className={cl.Cover__container}>
                <h2>{CoverHeader?.header}</h2>
                <p>{CoverHeader?.header_info}</p>
                <section className={cl.Cover__section}>
                    <div className={cl.Cover__information}>
                        <h2>{CoverInfo?.heading}</h2>
                        <div className={cl.Cover__information_container}>
                            <p>{CoverInfo?.CoverInfo__text_1}</p>
                            <p>{CoverInfo?.CoverInfo__text_2}</p>
                            <p>{CoverInfo?.CoverInfo__text_3}</p>
                        </div> 
                        <div className={cl.Cover__motivation}>
                            <h3>{CoverMotivation?.heading}</h3>
                            <ul>
                                <li><p>{CoverMotivation?.CoverMotivation__First}</p></li>
                                <li><p>{CoverMotivation?.CoverMotivation__Second}</p></li>
                                <li><p>{CoverMotivation?.CoverMotivation__Third}</p></li>
                                <li><p>{CoverMotivation?.CoverMotivation__Fourth}</p></li>
                            </ul>
                        </div> 
                    </div>
                    <div className={cl.Cover__cards}>
                        <div className={cl.Cover__cards_facts}>
                            <h3>{CoverCards?.heading}</h3>
                            <section>
                                <h4>{CoverCards?.location}</h4>
                                <p>{CoverCards?.locationInfo}</p>
                            </section>
                            <section>
                                <h4>{CoverCards?.experience}</h4>
                                <p>{CoverCards?.experienceInfo}</p>
                            </section>
                            <section>
                                <h4>{CoverCards?.education}</h4>
                                <p>{CoverCards?.educationInfo}</p>
                            </section>
                            <section>
                                <h4>{CoverCards?.language}</h4>
                                <p>{CoverCards?.languageInfo}</p>
                            </section>
                        </div>
                        <div className={cl.Cover__cards_ready}>
                            <h3>{CoverReady?.heading}</h3>
                            <section>
                                <p>{CoverReady?.information}</p>
                                <nav>
                                    <p>{CoverReady?.intern}</p>
                                    <p>{CoverReady?.education}</p>
                                    <p>{CoverReady?.team}</p>
                                </nav>
                            </section>
                        </div>
                    </div>

                </section>
            </div>
        </div>
        </>
    )
}   