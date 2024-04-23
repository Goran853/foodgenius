type HardwareFeatureProps = {
  title: String;
  description: String;
};

function HardwareFeatures({ title, description }: HardwareFeatureProps) {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col gap-6 text-center">
        <h3 className="text-2xl md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {title}
        </h3>

        <p className="md:text-xs lg:text-sm xl:text-lg 2xl:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}
export default HardwareFeatures;
