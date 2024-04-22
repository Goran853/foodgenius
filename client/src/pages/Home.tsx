import Benefits from '@components/Benefits';
import armUp from '@assets/FoodGenius-Keyimage-arm-up.png';
import logoSlider from '@assets/FoodGenius-home-slider.jpg';
import hardware from '@assets/home_hardware.jpg';
import HardwareFeatures from '@components/HardwareFeatures';
import action1 from '@assets/action1.svg';
import kontakt from '@assets/kontakt.svg';

function Home() {
  return (
    <div className="text-brand-secondary -mt-20">
      {/* Hero image and title */}
      <div className="max-md:hidden">
        <img
          src={logoSlider}
          alt="Glücklicher Kunde"
          className="sticky top-0 -z-20 w-full lg:h-96 object-top object-cover h-52 md:max-lg:mt-6"
        />
        <div className="grid grid-cols-2 absolute top-0 left-0 right-0 -z-20 lg:h-96 h-60 max-container">
          <h1 className="lg:text-4xl text-2xl col-start-2 self-center text-center ">
            <span className="block">Genial effizienter</span>Restaurant-Manager
          </h1>
        </div>
      </div>

      {/* Hero description */}
      <section className="flex justify-center py-10 bg-white max-md:mt-20 ">
        <div className="text-center max-container flex flex-col gap-8 items-center">
          <h2 className="md:text-4xl text-3xl max-w-[80%]">
            FoodGenius ist Kassensystem, Online-Shop und Restaurant /
            Lieferservice Management aus einer Hand
          </h2>
          <p className="md:text-2xl ">
            <span className="inline xl:block">
              FoodGenius lässt Dich dabei glänzen, wo Du am besten bist:&nbsp;
            </span>
            <span className="inline xl:block">
              Gastgeber sein. FoodGenius regelt den Rest.
            </span>
          </p>
          <p className="md:text-2xl">
            <span className="md:block">
              Viele Systeme können Dir punktuell das Leben erleichtern.
            </span>{' '}
            Aber nur FoodGenius spart Dir Zeit, Geld und Nerven auf allen Ebenen
            des Restaurant Managements.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="text-center bg-gray-light lg:py-36 py-20">
        <Benefits />
      </section>

      {/* Action section */}
      <section className="bg-gray-medium h-96 max-md:hidden">
        <div className="max-container grid grid-cols-3 gap-8 h-full">
          <img
            src={armUp}
            alt="Foodgenius Held"
            className="object-contain object-bottom h-full"
          />
          <div className="flex flex-col justify-evenly text-2xl underline text-center">
            <div className="bg-white p-4 flex justify-between items-center">
              <h3>Werde ein Held</h3>
              <img
                src={action1}
                alt="Paket Optionen"
                className="action-border"
              />
            </div>
            <div className="bg-white p-4 flex justify-between items-center">
              <h3>Ich möchte persönlich beraten werden</h3>
              <img
                src={kontakt}
                alt="Kontakt Formular"
                className="action-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="py-24 bg-white w-screen ">
        <div className="flex flex-col items-center max-container">
          <img
            src={hardware}
            alt="Foodgenius Hardware"
            className="object-contain h-full"
          />
          <p className="text-center md:text-2xl md:w-[60%] pt-8 pb-12">
            FoodGenius lässt sich individuell auf Deine Wünsche anpassen. Ganz
            egal wie groß dein Restaurant oder Lieferservice ist und welche
            Ziele Du hast - FoodGenius begleitet Dich auf Deinem Weg des
            Erfolgs.
          </p>
        </div>

        {/* Hardware Features */}
        <div className="grid md:grid-cols-4 gap-16 text-center max-container">
          <HardwareFeatures
            title="Starterbildschirm"
            description="Genialer Durchblick mit dem FoodGenius Dashboard: Du hast Zahlen,
              Ware und Mitarbeiter im Blick – und das gute Geschäft ist kein
              Zufall."
          />
          <HardwareFeatures
            title="SmartDelivery"
            description="FoodGenius plant die Routen Deiner Fahrer intelligent und
              eigenständig: Das schafft Übersicht, reduziert Lieferzeiten und
              erhöht die Kundenzufriedenheit."
          />

          <HardwareFeatures
            title="PerfectDish"
            description="Die Zubereitungsstation sorgt dafür, dass jeder weiß, was er zu
              tun hat und was die anderen gerade machen. Sonderwünsche Deiner
              Gäste werden mit Sicherheit berücksichtigt dank dem FoodGenius
              Checksystem."
          />

          <HardwareFeatures
            title="GeniusCommunity"
            description="Jede gute Beziehung basiert auf einer konstant geführten,
              positiven Kommunikation. FoodGenius GeniusCommunity ist eine Art
              nach Themen und Prioritäten geordnete WhatsApp Gruppe, die Du
              moderierst."
          />
        </div>
      </section>
    </div>
  );
}
export default Home;
