type HeroDescriptionProps = {
  title: string;
  paragraphs: string[];
};

function HeroDescription({ title, paragraphs }: HeroDescriptionProps) {
  return (
    <div className="flex flex-col gap-8 items-center max-container text-center md:w-4/5">
      <h2 className="max-w-[80%] text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        {title}
      </h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="md:w-[70%] md:text-sm lg:text-xl xl:text-2xl">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
export default HeroDescription;
