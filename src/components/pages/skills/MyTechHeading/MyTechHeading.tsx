import cl from './styles.module.scss'
import type {MyTechSkillsProps} from './types'

const defaultMyTechSkillsData: MyTechSkillsProps = {
    MyTechSkills: {
        heading: 'Навыки и технологии',
        headingInfo: 'Мой технический стек и уровень владения'
    }
}

export const MyTechSkills: React.FC<MyTechSkillsProps> = (props = defaultMyTechSkillsData) => {
    const MyTechSkillsData = {...defaultMyTechSkillsData, ...props}
    const MyTechSkills =  MyTechSkillsData.MyTechSkills || defaultMyTechSkillsData.MyTechSkills 

    return (
        <>
            <div className={cl.MyTechSkills}>
                <div className={cl.MyTechSkills__container}>
                    <h3>{MyTechSkills?.heading}</h3>
                    <p>{MyTechSkills?.headingInfo}</p>
                </div>
            </div>
        </>
    )}
