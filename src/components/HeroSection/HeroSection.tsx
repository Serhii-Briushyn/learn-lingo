import ColorPicker from "components/ColorPicker/ColorPicker";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col desktop:flex-row gap-6 desktop:h-[530px]">
      <div className="bg-grey-light rounded-primary w-full py-24 px-4 tablet:px-16">
        <h1 className="text-4xl desktop:text-5xl font-medium text-left mb-8 leading-[1.16] ">
          Unlock your potential with the best{" "}
          <span className="bg-accent-light rounded-xl px-2 italic font-normal">
            language
          </span>{" "}
          tutors
        </h1>
        <p className="text-base/snug font-normal text-justify tablet:text-left mb-16 max-w-[471px]">
          Embark on an Exciting Language Journey with Expert Language Tutors.
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Link to="/teachers">
          <button className="bg-accent flex items-center justify-center font-bold text-lg rounded-xl w-full tablet:w-[267px] h-[60px] hover:bg-accent-light transition-all ease-in cursor-pointer">
            Get started
          </button>
        </Link>
      </div>

      <div className="bg-accent-light rounded-primary w-full desktop:max-w-[568px] h-[530px] relative pt-20 ">
        <img
          className="w-auto h-auto object-cover m-auto"
          src="/girl-photo.png"
          alt="Girl Photo"
        />
        <div className="bg-linear-to-bl from-gradient-from to-gradient-to rounded-t-lg max-w-72 tablet:max-w-[375px] w-full h-[176px] absolute  bottom-0 left-1/2 -translate-x-1/2 z-10 flex justify-center items-center">
          <svg className="w-[47px] h-[57px] fill-accent-light    ">
            <use href={`/sprite.svg#icon-apple`} />
          </svg>
        </div>
        <ColorPicker />
      </div>
    </section>
  );
};

export default HeroSection;
