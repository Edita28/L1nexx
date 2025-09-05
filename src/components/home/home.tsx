
import { Header } from "./header/header";
import { Cover } from "./cover/cover";
import { ContentTransition } from "../transitions/ContentTransition";

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
            <Header header={headerData} />
            <ContentTransition delay={300}>
                <Cover />
            </ContentTransition>
        </div>
    );
}