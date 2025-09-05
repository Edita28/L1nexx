import { useState, useEffect } from 'react';
import cl from './styles.module.scss';

interface PageTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
  onAnimationComplete?: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  isVisible, 
  onAnimationComplete 
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      document.body.classList.remove('animating');
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    } else {
      document.body.classList.add('animating');
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';

      const timer = setTimeout(() => {
        setShouldRender(false);
        onAnimationComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimationComplete]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('animating');
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`${cl.pageTransition} ${isVisible ? cl.visible : cl.hidden}`}
    >
      {children}
    </div>
  );
};
