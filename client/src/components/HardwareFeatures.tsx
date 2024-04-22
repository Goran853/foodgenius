type HardwareFeatureProps = {
  title: String;
  description: String;
};

function HardwareFeatures({ title, description }: HardwareFeatureProps) {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col gap-6 text-center">
        <h3 className="md:text-xl text-2xl">{title}</h3>
        <p className="md:text-sm">{description}</p>
      </div>
    </div>
  );
}
export default HardwareFeatures;
