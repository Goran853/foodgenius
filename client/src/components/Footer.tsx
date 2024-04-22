import logoFooter from '@assets/logo-footer-e1508923672710.png';
import facebookFooter from '@assets/footer-facebook.svg';
import phoneIcon from '@assets/phone.svg';
import emailWhite from '@assets/email-white.svg';
import { Link } from 'react-router-dom';

type ContactProps = {
  department: string;
  phone: string;
  availability: string;
  email?: string;
};

type FooterLink = {
  name: string;
  url: string;
  imgSrc?: string;
  imgAlt?: string;
};

const contacts = [
  {
    department: 'Vertrieb',
    phone: '06858 / 9797-600',
    availability: 'Mo-Fr 09-18 Uhr',
    email: 'vertrieb@foodgenius.de',
  },

  {
    department: 'Support',
    phone: '06858 / 9797-0',
    availability: 'Mo-Fr 09-18 Uhr',
    email: 'support@foodgenius.de',
  },
  {
    department: 'Buchhaltung',
    phone: '06858 / 9797-200',
    availability: 'Mo-Fr 09-12 Uhr',
    email: 'buchhaltung@foodgenius.de',
  },
  {
    department: 'Notdienst',
    phone: '06858 / 9797-110',
    availability: 'Immer erreichbar',
  },
];

const footerLinks: FooterLink[] = [
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
    <div className="flex flex-col gap-1 md:pb-8 items-center md:items-start">
      <p className="lg:text-2xl md:text-sm font-strong ">{department}</p>

      <div className="flex gap-4">
        <img src={phoneIcon} alt="Handy" className="w-4 md:w-2" />
        <p className="lg:text-xl md:text-sm">{phone}</p>
      </div>

      <p className="lg:text-lg md:text-xs text-sm">{availability}</p>

      {email && (
        <div className="flex gap-4 underline lg:text-xl md:text-sm">
          <img src={emailWhite} alt="Handy" className="w-6 md:w-3" />
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-primary text-white text-lg w-screen py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 md:p-0 w-full max-w-full md:max-container mx-auto">
        <div className="flex justify-center w-full">
          <img
            src={logoFooter}
            alt="Foodgenius logo"
            className="object-contain self-start w-16"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-0">
          {contacts.map((contact) => (
            <Contact key={contact.department} {...contact} />
          ))}
        </div>

        {/* Links */}
        <ul className="flex flex-wrap md:flex-col justify-center gap-6 underline md:items-center md:self-start md:text-right md:text-sm">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.url} key={link.name}>
                {link.imgSrc ? (
                  <img
                    src={link.imgSrc}
                    alt={link.imgAlt}
                    className="w-4 md:w-2"
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
