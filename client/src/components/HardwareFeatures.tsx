type HardwareFeatureProps = {
  title: String;
  description: String;
};

function HardwareFeatures({ title, description }: HardwareFeatureProps) {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col gap-6 text-center">
        <h3 className="lg:text-xl md:text-sm text-2xl">{title}</h3>
        <p className="lg:text-sm md:text-xs">{description}</p>
      </div>
    </div>
  );
}
export default HardwareFeatures;
