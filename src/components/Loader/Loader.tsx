import { ClipLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-40 w-full">
      <ClipLoader color="#8a8a89" size={50} />
    </div>
  );
};

export default Loader;
