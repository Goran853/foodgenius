import logoHeader from '@assets/logo-header.png';
import callIcon from '@assets/FoodGenius-call-icon.svg';
import facebookIcon from '@assets/FoodGenius-facebook-icon.svg';
import HamburgerMenu from './HamburgerMenu';
import { navBarLinks } from '@data/navBarLinks';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className="bg-opacity-80 bg-white w-screen">
      <div className="flex items-center justify-between max-container h-14 lg:h-20 xl:h-24 2xl:h-28">
        {/* Header Logo */}
        <Link to="/">
          <img
            src={logoHeader}
            alt="FoodGenius"
            loading="lazy"
            className="w-60 lg:w-80 xl:w-96 2xl:w-[28rem]"
          />
        </Link>

        {/* Navbar */}
        <div className="max-md:hidden">
          <div className="flex flex-col">
            {/* Icons */}
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

            {/* Links */}
            <ul className="flex justify-end gap-4 xl:gap-8">
              {navBarLinks.map((link) => (
                <div
                  key={link.name}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <NavLink to="/" className="navBarLink-style">
                    {link.name}
                  </NavLink>

                  {/* Sublinks */}
                  {hoveredLink === link.name &&
                    link.links &&
                    link.links.length > 0 && (
                      <div className="absolute bg-white shadow-md ">
                        {link.links.map((subLink) => (
                          <NavLink
                            to="/"
                            key={subLink}
                            className="block px-4 py-2 navBarLink-style"
                          >
                            {subLink}
                          </NavLink>
                        ))}
                      </div>
                    )}
                </div>
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
