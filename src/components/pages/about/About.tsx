import { Header } from "../home/header/header.tsx";
import { Cover } from "../about/cover/cover.tsx"
import { Footer } from "../home/footer/footer.tsx";
import { ContentTransition } from "../../transitions/ContentTransition.tsx";

const headerData = {
  home: "Главная",
  about: "Обо мне",
  skills: "Навыки", 
  project: "Проекты",
  contacts: "Контакты"
};


export const About = () => {
  return (
    <div>
      <ContentTransition delay={300}>
        <Header header={headerData}/>
        <Cover/>
        {/*<Footer/>*/}
      </ContentTransition>
    </div>
  );
}