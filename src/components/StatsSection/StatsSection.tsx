import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <section className="grid grid-cols-2 gap-4 tablet:flex justify-between desktop:justify-center items-center desktop:gap-25 border-[1.5px] border-dashed border-accent rounded-primary p-10 ">
      <div className="flex items-center max-desktop:flex-col gap-4">
        <p className="text-xl tablet:text-2xl desktop:text-3xl font-medium">
          <CountUp end={32000} duration={4} separator="," /> +
        </p>
        <p className="text-xs tablet:text-sm tablet:leading-tight desktop:max-w-24 opacity-70">
          Experienced tutors
        </p>
      </div>
      <div className="flex items-center max-desktop:flex-col gap-4">
        <p className="text-xl tablet:text-2xl desktop:text-3xl font-medium">
          <CountUp end={300000} duration={4} separator="," /> +
        </p>
        <p className="text-xs tablet:text-sm tablet:leading-tight desktop:max-w-24 opacity-70">
          5-star tutor reviews
        </p>
      </div>
      <div className="flex items-center max-desktop:flex-col gap-4">
        <p className="text-xl tablet:text-2xl desktop:text-3xl font-medium">
          <CountUp end={120} duration={4} separator="," /> +
        </p>
        <p className="text-xs tablet:text-sm tablet:leading-tight desktop:max-w-24 opacity-70">
          Subjects taught
        </p>
      </div>
      <div className="flex items-center max-desktop:flex-col gap-4">
        <p className="text-xl tablet:text-2xl desktop:text-3xl font-medium">
          <CountUp end={200} duration={4} separator="," /> +
        </p>
        <p className="text-xs tablet:text-sm tablet:leading-tight desktop:max-w-24 opacity-70">
          Tutor nationalities
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
