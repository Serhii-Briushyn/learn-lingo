import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/" className="flex gap-2 items-center text-xl font-medium">
        <img src="/favicon.svg" alt="Logo" className="w-7 h-7" />
        LearnLingo
      </Link>
    </>
  );
};

export default Logo;
