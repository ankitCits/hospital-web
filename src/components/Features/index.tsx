import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="w-full mx-auto text-center" style={{ maxWidth: "570px", marginBottom: "100px" }}>
            <h2 className="mb-4 text-3xl font-bold !leading-tight sm:text-4xl md:text-[45px]">
              <span className="text-orange-500">Transform</span> <span className="text-black dark:text-white">Your Hospital</span>
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              From streamlined workflows to seamless patient journeys, A2Z Hospital Management Software HMS empowers hospitals to excel in every aspect.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
