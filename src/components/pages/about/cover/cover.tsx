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
    }
}



export const Cover: React.FC<CoverProps> = (props = defaultCoverData) => {
    const CoverData = { ...defaultCoverData, ...props };
    const CoverHeader= CoverData.CoverHeader || defaultCoverData.CoverHeader;
    const CoverInfo= CoverData.CoverInfo || defaultCoverData.CoverInfo;

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
                        
                    </div>
                    <div className={cl.Cover__cards}>
                        <div className={cl.Cover__cards_facts}>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}   