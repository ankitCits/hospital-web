import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
