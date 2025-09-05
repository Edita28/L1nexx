import { useState, useEffect } from 'react';
import { Home } from '../components/home/home';
import { About } from '../components/pages/About';
import { Skills } from '../components/pages/Skills';
import { Projects } from '../components/pages/Projects';
import { Contacts } from '../components/pages/Contacts';
import { PageTransition } from '../components/transitions/PageTransition';

// Маппинг путей на компоненты страниц
const ROUTES: { [key: string]: React.ComponentType } = {
  '/': Home,
  '/about': About,
  '/skills': Skills,
  '/project': Projects,
  '/contacts': Contacts,
};

// Главный роутер приложения
export const Router = () => {
  // Текущий путь в URL
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // Состояние анимации
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Слушаем изменения URL (кнопки назад/вперед браузера)
  useEffect(() => {
    const handlePopState = () => {
      setIsTransitioning(true);
      // Предотвращаем скролл во время анимации
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
      // Восстанавливаем скролл при размонтировании
      document.body.classList.remove('animating');
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [currentPath]);

  // Получаем компонент для текущего пути
  const getCurrentComponent = () => {
    const Component = ROUTES[currentPath];
    return Component ? <Component /> : <Home />;
  };

  return (
    <div>
      <PageTransition 
        isVisible={!isTransitioning}
        onAnimationComplete={() => {
          // Дополнительная логика после завершения анимации
        }}
      >
        {getCurrentComponent()}
      </PageTransition>
    </div>
  );
};

export { Router as default };