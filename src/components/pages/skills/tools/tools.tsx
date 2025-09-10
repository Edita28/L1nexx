import cl from './styles.module.scss'
import type {toolsProps} from './types'

const defaultToolsData: toolsProps = {
    tools: {
        heading: 'Tools & Workflow',
        git: 'Git',
        gitPercent: '70%',
        webpack: 'Webpack',
        webpackPercent: '60%',
        vite: 'Vite',
        vitePercent: '75%',
        npm: 'NPM/Yarn',
        npmPercent: '80%',
        vsCode: 'VS Code',
        vsCodePercent: '90%',
        chromeDevTools: 'Chrome DevTools',
        chromeDevToolsPercent: '75%'
    },
    toolsInfo: {
        gitInfo: "Контроль версий, ветвление",
        webpackInfo: "Сборка проектов, оптимизация",
        viteInfo: "Быстрая разработка, HMR",
        npmInfo: "Управление пакетами",
        vscodeInfo: "Настройка, расширения, отладка",
        chromeDevToolsInfo: "Отладка, профилирование"
    }
}

export const Tools: React.FC<toolsProps> = (props = defaultToolsData) => {
    const toolsData = {...defaultToolsData, ...props}
    const tools = toolsData.tools || defaultToolsData.tools
    const toolsInfo = toolsData.toolsInfo || defaultToolsData.toolsInfo

    return(
        <>
            <div className={cl.tools}>
                <div className={cl.tools__container}>
                    <h2>{tools?.heading}</h2>
                    <section className={cl.tools__section}>
                        <div>
                            <nav>
                                <h3>{tools?.git}</h3>
                                <p>{tools?.gitPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_git}></section>
                            </section>
                            <p>{toolsInfo?.gitInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{tools?.webpack}</h3>
                                <p>{tools?.webpackPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_webpack}></section>
                            </section>
                            <p>{toolsInfo?.webpackInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{tools?.vite}</h3>
                                <p>{tools?.vitePercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_vite}></section>
                            </section>
                            <p>{toolsInfo?.viteInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{tools?.npm}</h3>
                                <p>{tools?.npmPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_npm}></section>
                            </section>
                            <p>{toolsInfo?.npmInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{tools?.vsCode}</h3>
                                <p>{tools?.vsCodePercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_vsCode}></section>
                            </section>
                            <p>{toolsInfo?.vscodeInfo}</p>
                        </div>
                        <div>
                            <nav>
                                <h3>{tools?.chromeDevTools}</h3>
                                <p>{tools?.chromeDevToolsPercent}</p>
                            </nav>
                            <section className={cl.Progress__line_gray}>
                                <section className={cl.Progress__line_chromeDevTools}></section>
                            </section>
                            <p>{toolsInfo?.chromeDevToolsInfo}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}