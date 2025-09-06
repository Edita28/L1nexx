
import { Header } from "./header/header";
import { Cover } from "./cover/cover";
import { ContentTransition } from "../transitions/ContentTransition";
import { Stack } from './stack/stack'
import { Footer } from "./footer/footer";
export const Home = () => {
    const headerData = {
        home: "Главная",
        about: "Обо мне",
        skills: "Навыки", 
        project: "Проекты",
        contacts: "Контакты"
    };
    

    return (
        <div>
            
            <ContentTransition delay={300}>
                <Header header={headerData} />
                <Cover />
                <Stack/>
                <Footer/>
            </ContentTransition>
        </div>
    );
}