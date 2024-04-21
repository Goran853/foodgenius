type HardwareFeatureProps = {
  title: String;
  description: String;
};

function HardwareFeatures({ title, description }: HardwareFeatureProps) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h3 className="text-2xl">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}
export default HardwareFeatures;
