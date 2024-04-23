import logoSlider from '@assets/FoodGenius-home-slider.jpg';
import HeroDescription from '@components/HeroDescription';
import BenefitsSection from '@components/BenefitsSection';
import ActionSection from '@components/ActionSection';
import TechSection from './Home/TechSection';

const heroHomeContent = {
  title:
    'FoodGenius ist Kassensystem, Online-Shop und Restaurant / Lieferservice Management aus einer Hand',
  paragraphs: [
    'FoodGenius lässt Dich dabei glänzen, wo Du am besten bist: Gastgeber sein. FoodGenius regelt den Rest.',
    'Viele Systeme können Dir punktuell das Leben erleichtern. Aber nur FoodGenius spart Dir Zeit, Geld und Nerven auf allen Ebenen des Restaurant Managements.',
  ],
};

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
        <HeroDescription {...heroHomeContent} />
      </section>

      {/* Benefits */}
      <section className="bg-gray-light text-center py-20 md:py-8 md:pt-20 lg:py-20 xl:py-24">
        <BenefitsSection />
      </section>

      {/* Action section */}
      <section className="bg-gray-medium h-96 max-md:hidden md:h-56 lg:h-96 xl:h-[28rem]">
        <ActionSection />
      </section>

      {/* Tech Section */}
      <section className="bg-white py-24 w-screen md:py-12">
        <TechSection />
      </section>
    </div>
  );
}
export default Home;
