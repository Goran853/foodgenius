import armUp from '@assets/FoodGenius-Keyimage-arm-up.png';
import action1 from '@assets/action1.svg';
import kontakt from '@assets/kontakt.svg';

type ActionBlockProps = {
  text: string;
  imgSrc: string;
  imgAlt: string;
};

const actions = [
  {
    text: 'Werde ein Held',
    imgSrc: action1,
    imgAlt: 'Paket Optionen',
  },
  {
    text: 'Ich möchte persönlich beraten werden',
    imgSrc: kontakt,
    imgAlt: 'Kontaktformular',
  },
];

function ActionBlock({ text, imgSrc, imgAlt }: ActionBlockProps) {
  return (
    <div className="bg-white flex justify-center items-center min-h-[30%] p-4 md:p-2">
      <h3 className="flex-grow">{text}</h3>
      <img
        src={imgSrc}
        alt={imgAlt}
        loading="lazy"
        className="action-border md:w-10 md:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"
      />
    </div>
  );
}

function ActionSection() {
  return (
    <div className="grid grid-cols-3 gap-8 h-full max-container">
      {/* Image */}
      <img
        src={armUp}
        alt="Foodgenius Held"
        loading="lazy"
        className="object-contain object-bottom h-32 md:h-56 lg:h-full"
      />

      {/* ActionBlocks */}
      <div className="flex flex-col justify-evenly text-center underline lg:text-2xl xl:text-3xl">
        {actions.map((action) => (
          <ActionBlock key={action.text} {...action} />
        ))}
      </div>
    </div>
  );
}
export default ActionSection;
