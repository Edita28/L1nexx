import { Header } from "../home/header/header";
import { ContentTransition } from "../transitions/ContentTransition";
import cl from "../transitions/styles.module.scss";

// Данные навигации
const headerData = {
  home: "Главная",
  about: "Обо мне",
  skills: "Навыки", 
  project: "Проекты",
  contacts: "Контакты"
};

// Стили для контента
const contentStyles = {
  padding: "60px 20px",
  textAlign: "center" as const,
  maxWidth: "1200px",
  margin: "0 auto"
};

const titleStyles = {
  fontSize: "2.5rem",
  marginBottom: "20px",
  color: "#1f2937",
  fontWeight: "700" as const
};

const subtitleStyles = {
  fontSize: "1.2rem",
  color: "#6b7280",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: "1.6"
};

// Страница "Проекты"
export const Projects = () => {
  return (
    <div>
      <Header header={headerData} />
      <main style={contentStyles}>
        <ContentTransition delay={200}>
          <h1 style={titleStyles} className={cl.fadeInUp}>
            Проекты
          </h1>
        </ContentTransition>
        <ContentTransition delay={400}>
          <p style={subtitleStyles} className={cl.fadeInUp}>
            Здесь будут представлены мои проекты и работы.
          </p>
        </ContentTransition>
      </main>
    </div>
  );
}