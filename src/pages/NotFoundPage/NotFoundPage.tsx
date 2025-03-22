import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-screen overflow-hidden absolute top-0 left-0 bg-dark dark:bg-dark bg-no-repeat bg-contain bg-center flex justify-center"
      style={{ backgroundImage: `url('/notFound.svg')` }}
    >
      <button
        className="bg-dark-light rounded-xl px-10 py-3.5 text-white mt-14 cursor-pointer hover:bg-grey transition-all duration-300 ease-in w-max h-max"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
