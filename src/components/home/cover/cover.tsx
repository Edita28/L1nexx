import cl from './styles.module.scss'
import avatar from '../../assets/cover/avatar.png'
import type {CoverProps} from './types'


const defaultCoverData: CoverProps = {
    CoverInfo: {
        nickname: 'L1nexx',
        job: 'Frontend Developer',
        text: 'Начинающий разработчик с опытом создания современных веб-приложений на \n React, TypeScript, JavaScript, HTML, CSS и SCSS'
    }
}


export const Cover: React.FC<CoverProps> = (props = defaultCoverData) => {
    const CoverData = { ...defaultCoverData, ...props };
    const coverInfo = CoverData.CoverInfo || defaultCoverData.CoverInfo;

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
            </div>
        </div>
        </>
    )
}