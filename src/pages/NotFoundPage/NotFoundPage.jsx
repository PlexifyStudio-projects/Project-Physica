import { Link } from 'react-router-dom';
import { LuHouse, LuArrowRight } from 'react-icons/lu';
import './NotFoundPage.scss';

function NotFoundPage() {
  return (
    <section className="NotFoundPage">
      <div className="NotFoundPage__container">
        <span className="NotFoundPage__code">404</span>
        <h1 className="NotFoundPage__title">Page Not Found</h1>
        <p className="NotFoundPage__text">
          The page you are looking for doesn't exist or has been moved.
          Let us help you find your way back.
        </p>
        <Link to="/" className="NotFoundPage__link">
          <LuHouse />
          <span>Back to Home</span>
          <LuArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
