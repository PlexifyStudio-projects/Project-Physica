import { Outlet } from 'react-router-dom';
import Logo from '../../Logo';
import Header from '../../Header';
import Footer from '../../Footer';
import PageTransition from '../PageTransition/PageTransition';
import './Layout.scss';

function Layout() {
  return (
    <div className="Layout">
      <Logo />
      <Header />
      <main className="Layout__main">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
