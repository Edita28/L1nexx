import { useState, useEffect } from 'react';
import { Home } from '../components/pages/home/home';
import { About } from '../components/pages/about/About';
import { Skills } from '../components/pages/skills/Skills';
import { Projects } from '../components/pages/Projects';
import { Contacts } from '../components/pages/Contacts';
import { PageTransition } from '../components/transitions/PageTransition';
import { NotFound } from '../components/pages/NotFound/NotFound'; // Импортируем NotFound

const ROUTES: { [key: string]: React.ComponentType } = {
  '/': Home,
  '/about': About,
  '/skills': Skills,
  '/project': Projects,
  '/contacts': Contacts,
};

export const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setIsTransitioning(true);
      document.body.classList.add('animating');
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
        setIsTransitioning(false);
      }, 150);
    };

    window.addEventListener('popstate', handlePopState);
    return () => { 
      window.removeEventListener('popstate', handlePopState);
      document.body.classList.remove('animating');
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [currentPath]);

  const getCurrentComponent = () => {
    const Component = ROUTES[currentPath];
    return Component ? <Component /> : <NotFound />; // Возвращаем NotFound при отсутствии совпадений
  };

  return (
    <div>
      <PageTransition 
        isVisible={!isTransitioning}
        onAnimationComplete={() => {
        }}
      >
        {getCurrentComponent()}
      </PageTransition>
    </div>
  );
};

export { Router as default };