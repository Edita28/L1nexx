import cl from './styles.module.scss'
import type {CoverProps} from './types'
import React from 'react'

const defaultCoverData: CoverProps = {
    CoverHeader: {
        header: 'Обо мне',
        header_info: 'Узнайте больше о моем пути в разработке'
    }
}



export const Cover: React.FC<CoverProps> = (props = defaultCoverData) => {
    const CoverData = { ...defaultCoverData, ...props };
    const CoverHeader= CoverData.CoverHeader || defaultCoverData.CoverHeader;

    return(
        <>
        <div className={cl.Cover}>
            <div className={cl.Cover__container}>
                <h2>{CoverHeader?.header}</h2>
                <p>{CoverHeader?.header_info}</p>
                <section className={cl.Cover__section}>
                    <div className={cl.Cover__information}>
                        
                    </div>
                    <div className={cl.Cover__cards}></div>
                </section>
            </div>
        </div>
        </>
    )
}   