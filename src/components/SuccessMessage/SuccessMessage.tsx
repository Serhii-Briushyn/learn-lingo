interface SuccessMessageProps {
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center gap-12 text-center">
      <h2 className="text-xl font-bold">
        Thank you for your trust! <br /> We will get in touch with you.
      </h2>
      <button
        onClick={onClose}
        className="bg-accent text-black flex items-center justify-center font-bold text-lg rounded-xl w-full h-[60px] hover:bg-accent-light transition-all duration-300 ease-in cursor-pointer"
      >
        OK
      </button>
    </div>
  );
};

export default SuccessMessage;
