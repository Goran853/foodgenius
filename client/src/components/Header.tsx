import logoHeader from '@assets/logo-header.png';
import callIcon from '@assets/FoodGenius-call-icon.svg';
import facebookIcon from '@assets/FoodGenius-facebook-icon.svg';
import HamburgerMenu from './HamburgerMenu';
const links = [
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
      <div className="flex items-center justify-between max-container lg:h-20 h-14">
        <img src={logoHeader} alt="FoodGenius" className="lg:w-40 w-60" />
        <div className="max-md:hidden">
          <div className="flex flex-col">
            <div className="flex justify-end items-start gap-1">
              <img src={callIcon} alt="Phone" className="w-4" />
              <img src={facebookIcon} alt="Facebook" className="w-6" />
            </div>
            <ul className="flex justify-end space-x-4 ">
              {links.map((link) => (
                <li
                  key={link}
                  className="text-brand-secondary lg:text-sm text-xs"
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
