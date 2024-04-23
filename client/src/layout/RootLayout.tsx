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
        loading="lazy"
        className="fixed right-0 top-1/2 z-30 max-md:hidden md:w-8 lg:w-12 xl:w-14 2xl:w-16"
      />
      <header className="z-50">
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
