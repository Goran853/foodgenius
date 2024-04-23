import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const links: string[] = [
  'Vorteile',
  'Produkt',
  'Referenzen',
  'Jobs',
  'Über uns',
  'Kontakt',
];

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    document.body.className = isOpen ? 'overflow-hidden' : '';
  }, [isOpen]);

  const icon = isOpen ? <IoClose size={35} /> : <RxHamburgerMenu size={30} />;

  return (
    <div className="absolute top-4 right-4">
      <button onClick={handleClick} className="md:hidden">
        {icon}
      </button>

      {/* NavMenu */}
      {isOpen && (
        <nav className="fixed left-0 top-0 h-screen w-80 max-[400px]:w-4/5 z-30 bg-red-400 overflow-y-hidden menu-gradient">
          <ul className="text-white text-2xl p-4 font-strong">
            {links.map((link) => (
              <li key={link} className="pb-1">
                {link}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
export default HamburgerMenu;
