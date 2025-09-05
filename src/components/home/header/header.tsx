import cl from "./styles.module.scss";
import type { HeaderProps } from "./types";
import { useState, useEffect } from "react";

const defaultHeaderData: HeaderProps = {
  header: {
    home: "Главная",
    about: "Обо мне",
    skills: "Навыки",
    project: "Проекты",
    contacts: "Контакты",
  },
};

const NAVIGATION_PATHS: { [key: string]: string } = {
  home: '/',
  about: '/about',
  skills: '/skills',
  project: '/project',
  contacts: '/contacts'
};


export const Header: React.FC<HeaderProps> = (props = defaultHeaderData) => {
  const headerData = { ...defaultHeaderData, ...props };
  
  const [activeItem, setActiveItem] = useState(() => {
    const saved = localStorage.getItem('activeNavItem');
    return saved || "home";
  });

  useEffect(() => {
    localStorage.setItem('activeNavItem', activeItem);
  }, [activeItem]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('/about')) {
      setActiveItem('about');
    } else if (currentPath.includes('/skills')) {
      setActiveItem('skills');
    } else if (currentPath.includes('/project')) {
      setActiveItem('project');
    } else if (currentPath.includes('/contacts')) {
      setActiveItem('contacts');
    } else {
      setActiveItem('home');
    }
  }, []);
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string
  ) => {
    e.preventDefault();
    setActiveItem(item);
    
    const path = NAVIGATION_PATHS[item] || '/';
    
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const renderNavItem = (key: string, href: string, label: string) => (
    <li className={cl[`header__${key}`]}>
      <a
        href={href}
        className={activeItem === key ? cl.active : ""}
        onClick={(e) => handleClick(e, key)}
      >
        {label}
      </a>
    </li>
  );

  return (
    <div className={cl.header}>
      <div className={cl.header__container}>
        <nav>
          <a href="./"><span className={cl.logo}>FD</span></a>
          <a href="./" className={cl.logo__text}><span>Frontend Developer</span></a>
        </nav>
        <section className={cl.header__section}>
          <ul>
            {renderNavItem("home", "./", headerData.header.home)}
            {renderNavItem("about", "./about", headerData.header.about)}
            {renderNavItem("skills", "./skills", headerData.header.skills)}
            {renderNavItem("project", "./project", headerData.header.project)}
            {renderNavItem("contacts", "./contacts", headerData.header.contacts)}
          </ul>
        </section>
      </div>
    </div>
  );
};