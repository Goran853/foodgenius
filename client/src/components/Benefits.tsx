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
    <div className="pt-32 max-container md:pt-0">
      {/* Benefits */}
      <div className="grid gap-48 md:grid-cols-3 md:gap-4 lg:gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex flex-col">
            <h3 className="text-3xl md:text-2xl lg:text-4xl xl:min-h-20 2xl:text-5xl">
              {benefit.title}
            </h3>

            <p className="mt-10 md:text-xs lg:text-base xl:text-lg 2xl:text-xl">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link
          to="/"
          className="border-2 border-black rounded-full py-2 mt-12 block md:inline md:text-xs md:px-6 md:py-1 xl:text-2xl xl:py-1 xl:px-10 2xl:text-3xl"
        >
          alle vorteile ansehen
        </Link>
      </div>
    </div>
  );
}
export default Benefits;
