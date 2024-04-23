import logoFooter from '@assets/logo-footer-e1508923672710.png';
import facebookFooter from '@assets/footer-facebook.svg';
import phoneIcon from '@assets/phone.svg';
import emailWhite from '@assets/email-white.svg';
import { Link } from 'react-router-dom';
import { contacts } from '@data/contacts';
import { FooterLink as TFooterLink } from '../types';

type ContactProps = {
  department: string;
  phone: string;
  availability: string;
  email?: string;
};

const footerLinks: TFooterLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/foodgenius.de/',
    imgSrc: facebookFooter,
    imgAlt: 'Facebook Logo',
  },
  { name: 'TeamViewer', url: 'https://get.teamviewer.com/foodgenius' },
  { name: 'Impressum', url: 'https://foodgenius.de/impressum/' },
  { name: 'Datenschutz', url: 'https://foodgenius.de/datenschutz/' },
];

function Contact({ department, phone, availability, email }: ContactProps) {
  return (
    <div className="flex flex-col gap-1 items-center md:pb-8 md:items-start 2xl:gap-2">
      <p className="font-strong md:text-sm lg:text-xl xl:text-2xl">
        {department}
      </p>

      <div className="flex gap-4">
        <img
          src={phoneIcon}
          alt="Handy"
          loading="lazy"
          className="w-4 md:w-2 lg:w-3 2xl:w-4"
        />
        <p className="md:text-sm lg:text-xl xl:text-2xl">{phone}</p>
      </div>

      <p className="text-sm md:text-xs lg:text-lg 2xl:text-xl">
        {availability}
      </p>

      {email && (
        <div className="flex gap-4 underline md:text-sm lg:text-xl 2xl:text-2xl">
          <img
            src={emailWhite}
            alt="Handy"
            loading="lazy"
            className="w-6 md:w-3 lg:w-4 xl:w-5 2xl:w-6"
          />
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-primary py-6 text-white text-lg w-screen">
      <div className="grid grid-cols-1 gap-6 max-w-full mx-auto py-8 w-full md:grid-cols-3 md:max-container md:p-0">
        {/* Footer Logo */}
        <div className="flex justify-center w-full">
          <img
            src={logoFooter}
            alt="Foodgenius logo"
            loading="lazy"
            className="object-contain self-start w-16 xl:w-24"
          />
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-4 md:gap-0">
          {contacts.map((contact) => (
            <Contact key={contact.department} {...contact} />
          ))}
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 underline md:flex-col md:items-center md:self-start md:text-right md:text-sm lg:text-xl xl:text-2xl">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.url} key={link.name}>
                {link.imgSrc ? (
                  <img
                    src={link.imgSrc}
                    alt={link.imgAlt}
                    loading="lazy"
                    className="w-4 md:w-2 xl:w-4"
                  />
                ) : (
                  link.name
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
