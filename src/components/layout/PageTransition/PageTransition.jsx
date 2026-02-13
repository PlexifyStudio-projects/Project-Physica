import { useLocation } from 'react-router-dom';
import './PageTransition.scss';

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div className="PageTransition" key={location.pathname}>
      {children}
    </div>
  );
}

export default PageTransition;
