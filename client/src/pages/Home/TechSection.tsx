import hardware from '@assets/home_hardware.jpg';
import SoftwareFeatures from 'pages/Home/SoftwareFeatures';

const features = [
  {
    title: 'Starterbildschirm',
    description:
      'Genialer Durchblick mit dem FoodGenius Dashboard: Du hast Zahlen, Ware und Mitarbeiter im Blick - und das gute Geschäft ist kein Zufall.',
  },
  {
    title: 'SmartDelivery',
    description:
      'FoodGenius plant die Routen Deiner Fahrer intelligent und eigenständig: Das schafft Übersicht, reduziert Lieferzeiten und erhöht die Kundenzufriedenheit.',
  },
  {
    title: 'PerfectDish',
    description:
      'Die Zubereitungsstation sorgt dafür, dass jeder weiß, was er zu tun hat und was die anderen gerade machen. Sonderwünsche Deiner Gäste werden mit Sicherheit berücksichtigt dank dem FoodGenius Checksystem.',
  },
  {
    title: 'GeniusCommunity',
    description:
      'Jede gute Beziehung basiert auf einer konstant geführten, positiven Kommunikation. FoodGenius GeniusCommunity ist eine Art nach Themen und Prioritäten geordnete WhatsApp Gruppe, die Du moderierst.',
  },
];

function TechSection() {
  return (
    <>
      <div className="flex flex-col items-center max-container">
        <img
          src={hardware}
          alt="Foodgenius Hardware"
          loading="lazy"
          className="object-contain h-full"
        />
        <p className="pt-8 pb-12 text-center md:w-[60%] md:text-sm lg:text-xl xl:text-2xl">
          FoodGenius lässt sich individuell auf Deine Wünsche anpassen. Ganz
          egal wie groß dein Restaurant oder Lieferservice ist und welche Ziele
          Du hast - FoodGenius begleitet Dich auf Deinem Weg des Erfolgs.
        </p>
      </div>

      {/* Software Features */}
      <div className="grid gap-16 text-center max-container md:grid-cols-4 md:gap-6">
        {features.map(({ title, description }) => (
          <SoftwareFeatures
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
    </>
  );
}
export default TechSection;
