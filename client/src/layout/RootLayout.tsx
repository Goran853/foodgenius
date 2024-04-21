import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import stickyContact from '@assets/sticky-contact.png';

function RootLayout() {
  return (
    <div className="flex flex-col items-center">
      <img
        src={stickyContact}
        alt="Kontakt Icon"
        className="fixed right-0 top-1/2 z-30 w-12"
      />
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default RootLayout;
