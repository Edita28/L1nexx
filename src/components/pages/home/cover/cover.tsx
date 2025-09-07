import React from 'react'
import cl from './styles.module.scss'
import avatar from '../../../assets/cover/avatar.png'
import type {CoverProps} from './types'


const defaultCoverData: CoverProps = {
    CoverInfo: {
        nickname: 'Stokeyer',
        job: 'Frontend Developer',
        text: 'Начинающий разработчик с опытом создания современных веб-приложений на \n React, TypeScript, JavaScript, HTML, CSS и SCSS'
    },
    CoverCards: {
        title_code: 'Чистый код',
        title_design: "Адаптивный дизайн",
        title_education: "Быстрое обучение",
        info_code: "Пишу читаемый и поддерживаемый \n код следуя лучшим практикам",
        info_design: "Создаю интерфейсы, которые отлично \n работают на всех устройствах",
        info_education: "Быстро осваиваю новые технологии и \n готов к вызовам"
    }
}


export const Cover: React.FC<CoverProps> = (props = defaultCoverData) => {
    const CoverData = { ...defaultCoverData, ...props };
    const coverInfo = CoverData.CoverInfo || defaultCoverData.CoverInfo;
    const coverCards = CoverData.CoverCards || defaultCoverData.CoverCards

    const handleNavigation = (path: string) => {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
        
    };

    return(
        <>
        <div className={cl.Cover}>
            <div className={cl.Cover__container}>
                <section className={cl.Cover__info}>
                    <img src={avatar}/>
                    <h1 className={cl.Cover__nickname}>{coverInfo?.nickname}</h1>
                    <h2 className={cl.Cover__job}>{coverInfo?.job || 'Frontend Developer'}</h2>
                    <p className={cl.Cover__text}>{coverInfo?.text || 'Начинающий разработчик с опытом создания современных веб-приложений'}</p>
                </section>
                <div className={cl.Cover__button_container}>
                    <button onClick={() => handleNavigation('/project')} className={cl.Cover__button_project}>Посмотреть проекты</button>
                    <button onClick={() => handleNavigation('/contacts')} className={cl.Cover__button_contacts}>Связаться со мной</button>
                </div>
                <div className={cl.Cover__cards}>
                    <div className={cl.Cover__cards_code}>
                        <span><svg className={cl.Cover__cards_code_svg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></span>
                        <h2>{coverCards?.title_code}</h2>
                        <p>{coverCards?.info_code}</p>
                    </div>
                    <div className={cl.Cover__cards_design}>
                        <span><svg className={cl.Cover__cards_design_svg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></span>
                        <h2>{coverCards?.title_design}</h2>
                        <p>{coverCards?.info_design}</p>
                    </div>
                    <div className={cl.Cover__cards_education}>
                        <span><svg className={cl.Cover__cards_education_svg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></span>
                        <h2>{coverCards?.title_education}</h2>
                        <p>{coverCards?.info_education}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}