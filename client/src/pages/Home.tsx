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
          className="object-top object-cover h-52 sticky top-0 w-full -z-20 md:max-lg:mt-6 lg:h-72 xl:h-96 2xl:h-[26rem]"
        />
        <div className="grid grid-cols-2 absolute top-0 left-0 right-0 -z-20 xl:h-96 2xl:h-[28rem] lg:h-72 h-60 max-container">
          <h1 className="col-start-2 self-center text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ">
            <span className="block">Genial effizienter</span>Restaurant-Manager
          </h1>
        </div>
      </div>

      {/* Hero description */}
      <section className="bg-white flex justify-center py-10 max-md:mt-20 xl:py-20">
        <div className="flex flex-col gap-8 items-center max-container text-center md:w-4/5">
          <h2 className="max-w-[80%] text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            FoodGenius ist Kassensystem, Online-Shop und Restaurant /
            Lieferservice Management aus einer Hand
          </h2>
          <p className="md:w-[70%] md:text-sm lg:text-xl xl:text-2xl">
            <span className="inline xl:block">
              FoodGenius lässt Dich dabei glänzen, wo Du am besten bist:&nbsp;
            </span>
            <span className="inline xl:block">
              Gastgeber sein. FoodGenius regelt den Rest.
            </span>
          </p>
          <p className="md:w-[70%] md:text-sm lg:text-xl xl:text-2xl">
            <span className="md:block">
              Viele Systeme können Dir punktuell das Leben erleichtern.
            </span>{' '}
            Aber nur FoodGenius spart Dir Zeit, Geld und Nerven auf allen Ebenen
            des Restaurant Managements.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-light text-center py-20 md:py-8 md:pt-20 lg:py-20 xl:py-24">
        <Benefits />
      </section>

      {/* Action section */}
      <section className="bg-gray-medium h-96 max-md:hidden md:h-56 lg:h-96 xl:h-[28rem]">
        <div className="grid grid-cols-3 gap-8 h-full max-container">
          <img
            src={armUp}
            alt="Foodgenius Held"
            className="object-contain object-bottom h-32 md:h-56 lg:h-full"
          />

          <div className="flex flex-col justify-evenly text-center underline lg:text-2xl xl:text-3xl">
            <div className="bg-white flex justify-center items-center min-h-[30%] p-4 md:p-2">
              <h3 className="flex-grow">Werde ein Held</h3>
              <img
                src={action1}
                alt="Paket Optionen"
                className="action-border md:w-10 md:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"
              />
            </div>

            <div className="bg-white p-4 md:p-2 flex justify-center items-center min-h-[30%]">
              <h3 className="flex-grow">
                <span>Ich möchte persönlich </span>
                <span className="block">beraten werden</span>
              </h3>
              <img
                src={kontakt}
                alt="Kontakt Formular"
                className="action-border md:w-10 md:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="bg-white py-24 w-screen md:py-12">
        <div className="flex flex-col items-center max-container">
          <img
            src={hardware}
            alt="Foodgenius Hardware"
            className="object-contain h-full"
          />
          <p className="pt-8 pb-12 text-center md:w-[60%] md:text-sm lg:text-xl xl:text-2xl">
            FoodGenius lässt sich individuell auf Deine Wünsche anpassen. Ganz
            egal wie groß dein Restaurant oder Lieferservice ist und welche
            Ziele Du hast - FoodGenius begleitet Dich auf Deinem Weg des
            Erfolgs.
          </p>
        </div>

        {/* Hardware Features */}
        <div className="grid gap-16 text-center max-container md:grid-cols-4 md:gap-6">
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
