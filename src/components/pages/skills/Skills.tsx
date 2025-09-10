import { Header } from "../home/header/header.tsx";
import { ContentTransition } from "../../transitions/ContentTransition.tsx";
import { MyTechSkills } from "./MyTechHeading/MyTechHeading.tsx";
import { FrontendTech } from './frontendTech/frontend.tsx'
import { Tools } from "./tools/tools.tsx";

const headerData = {
  home: "Главная",
  about: "Обо мне",
  skills: "Навыки", 
  project: "Проекты",
  contacts: "Контакты"
};


export const Skills = () => {
  return (
    <div>
        <ContentTransition delay={300}>
           <Header header={headerData} />
           <MyTechSkills/>
           <FrontendTech/>
           <Tools/>
        </ContentTransition>
    </div>
  );
}