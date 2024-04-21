import logoHeader from '@assets/logo-header.png';
import callIcon from '@assets/FoodGenius-call-icon.svg';
import facebookIcon from '@assets/FoodGenius-facebook-icon.svg';
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
      <div className="flex items-center justify-between max-container h-20">
        <img src={logoHeader} alt="FoodGenius" width={300} />
        <div className="flex flex-col">
          <div className="flex justify-end items-start gap-1">
            <img src={callIcon} alt="Phone" width={21} />
            <img src={facebookIcon} alt="Facebook" width={35} />
          </div>
          <ul className="flex justify-end space-x-4">
            {links.map((link) => (
              <li key={link} className="text-brand-secondary text-sm">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
