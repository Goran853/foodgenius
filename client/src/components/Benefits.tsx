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
    <div className="pt-32 max-container">
      <div className="grid md:grid-cols-3 md:gap-8 gap-48 ">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex flex-col">
            <h3 className="lg:text-4xl md:text-2xl text-3xl">
              {benefit.title}
            </h3>
            <p className="lg:text-lg md:text-sm mt-10">{benefit.description}</p>
          </div>
        ))}
      </div>
      <Link
        to="/"
        className="border-2 border-black rounded-full py-2 mt-12 block "
      >
        alle vorteile ansehen
      </Link>
    </div>
  );
}
export default Benefits;
