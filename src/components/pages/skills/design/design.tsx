import cl from './styles.module.scss'
import type {designProps} from './types'

const defaultDesignData: designProps = {
    design: {
        heading: "Design & UX",
        resDesign: "Responsive Design",
        resDesignPercent: "85%",
        ui: "UI/UX Principles",
        uiPercent: "70%",
        cssFrame: "CSS Frameworks",
        cssFramePercent: "80%",
        figma: "Figma",
        figmaPercent: "65%"
    },
    designInfo: {
        resDesignInfo: "Адаптивная верстка",
        uiInfo: "Пользовательский опыт",
        cssFrameInfo: "ScSS, Tailwind CSS",
        figmaInfo: "Работа с макетами"
    }
}


export const Design: React.FC<designProps> = (props = defaultDesignData ) =>{
    const designData = {...defaultDesignData, ...props}
    const design = designData.design || defaultDesignData.design
    const designInfo = designData.designInfo || defaultDesignData.designInfo

    return(
        <>
            <div className={cl.tools}>
                <div className={cl.tools__container}>
                    <h2>{design?.heading}</h2>
                    <section className={cl.tools__section}>
                        <div>
                            <nav>
                                <h3>{design?.resDesign}</h3>
                                <p>{design?.resDesignPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_git}></section>
                            </section>
                            <p>{designInfo?.resDesignInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{design?.cssFrame}</h3>
                                <p>{design?.cssFramePercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_webpack}></section>
                            </section>
                            <p>{designInfo?.cssFrameInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{design?.ui}</h3>
                                <p>{design?.uiPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_vite}></section>
                            </section>
                            <p>{designInfo?.uiInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{design?.figma}</h3>
                                <p>{design?.figmaPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_npm}></section>
                            </section>
                            <p>{designInfo?.figmaInfo}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}