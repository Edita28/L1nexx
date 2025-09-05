import { Header } from "../home/header/header";
import { pageStyles, navigationData } from "../../styles/pageStyles";
import { ContentTransition } from "../transitions/ContentTransition";
import cl from "../transitions/styles.module.scss";

export const About = () => {
  return (
    <div>
      <Header header={navigationData} />
      <main style={pageStyles.content}>
        <ContentTransition delay={200}>
          <h1 style={pageStyles.title} className={cl.fadeInUp}>
            Обо мне
          </h1>
        </ContentTransition>
        <ContentTransition delay={400}>
          <p style={pageStyles.subtitle} className={cl.fadeInUp}>
            Здесь будет информация обо мне, моем опыте и достижениях.
          </p>
        </ContentTransition>
      </main>
    </div>
  );
}