import { Link } from 'react-router-dom';

function Benefits() {
  const benefits = [
    {
      title: 'Immer für Dich da Support',
      description:
        'Der FoodGenius SuperService ist rund um die Uhr für Dich da. In unserem Support arbeiten nur qualifizierte IT-ler, die wissen, was den Gastronomen wichtig ist und sich um alle Deine Probleme kümmert.',
    },
    {
      title: 'Die einzige Alles-in-einem Lösung',
      description:
        'FoodGenius ist Bestellannahme und Telefonie, Kassensystem und Online-Shop, Personal- und Tourenplaner, Kellner- und FahrerApp, Hygiene- und Kühlkontrolle, Marketing-Tool, Buchhaltung und Warenwirtschaft in einem.',
    },
    {
      title: 'Voll auf Umsatz ausgerichtet',
      description:
        'FoodGenius bringt Dir bis zu 60 % mehr Umsatz, da FoodGenius nicht ein Detail, sondern alle Abläufe optimiert – und diese aufeinander abstimmt.',
    },
  ];

  return (
    <div className="pt-32 md:pt-0 max-container">
      {/* Benefits */}
      <div className="grid md:grid-cols-3 lg:gap-8 md:gap-4 gap-48 ">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex flex-col">
            <h3 className="lg:text-4xl md:text-2xl text-3xl">
              {benefit.title}
            </h3>
            <p className="lg:text-lg md:text-xs mt-10">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link
          to="/"
          className="border-2 border-black rounded-full py-2 mt-12 block md:inline md:text-xs md:px-6 md:py-1"
        >
          alle vorteile ansehen
        </Link>
      </div>
    </div>
  );
}
export default Benefits;
