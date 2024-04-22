import logoHeader from '@assets/logo-header.png';
import callIcon from '@assets/FoodGenius-call-icon.svg';
import facebookIcon from '@assets/FoodGenius-facebook-icon.svg';
import HamburgerMenu from './HamburgerMenu';

const navLinks = [
  'Vorteile',
  'Produkt',
  'Referenzen',
  'Jobs',
  'Über uns',
  'Kontakt',
];

function Header() {
  return (
    <nav className=" bg-opacity-80 bg-white w-screen ">
      <div className="flex items-center justify-between max-container h-14 lg:h-20 xl:h-24 2xl:h-28">
        {/* Header Logo */}
        <img
          src={logoHeader}
          alt="FoodGenius"
          loading="lazy"
          className="w-60 lg:w-80 xl:w-96 2xl:w-[28rem]"
        />
        {/* Navbar */}
        <div className="max-md:hidden">
          <div className="flex flex-col">
            <div className="flex justify-end items-start gap-1">
              <img
                src={callIcon}
                alt="Phone"
                loading="lazy"
                className="w-4 xl:w-6"
              />
              <img
                src={facebookIcon}
                alt="Facebook"
                loading="lazy"
                className="w-6 xl:w-9"
              />
            </div>
            <ul className="flex justify-end gap-4 xl:gap-8">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className="text-brand-secondary text-xs lg:text-sm xl:text-lg 2xl:text-xl"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <HamburgerMenu />
    </nav>
  );
}
export default Header;
