import logoFooter from '@assets/logo-footer-e1508923672710.png';
import facebookFooter from '@assets/footer-facebook.svg';
import phoneIcon from '@assets/phone.svg';
import kontakt from '@assets/kontakt.svg';

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

type ContactProps = {
  department: string;
  phone: string;
  availability: string;
  email?: string;
};

function Contact({ department, phone, availability, email }: ContactProps) {
  return (
    <div className="flex flex-col gap-1 pb-8">
      <p className=" text-2xl font-strong">{department}</p>
      <div className="flex gap-4">
        <img src={phoneIcon} alt="Handy" />
        <p className="text-xl">{phone}</p>
      </div>
      <p className="text-lg">{availability}</p>
      {email && (
        <div className="flex gap-4 underline text-xl">
          <img src={phoneIcon} alt="Handy" />
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-primary text-white text-lg w-screen">
      <div className="grid max-container gap-8 grid-fr py-8">
        <img src={logoFooter} alt="Foodgenius logo" />
        <div>
          {contacts.map((contact) => (
            <Contact key={contact.department} {...contact} />
          ))}
        </div>
        <ul className="text-right">
          <li>
            <img src={facebookFooter} alt="Facebook logo" />
          </li>
          <li>TeamViewer</li>
          <li>Impressum</li>
          <li>Datenschutz</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
