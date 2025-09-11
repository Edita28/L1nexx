import cl from './styles.module.scss'
import type {QualityProps} from './types'


const defaultQualityData: QualityProps = {
    
}

export const Quality: React.FC<QualityProps> = () => {
    return(
        <>
        <div className={cl.Quality}>
            <div className={cl.Quality__container}>
                <section>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </div>
        </div>
        </>
    )
}