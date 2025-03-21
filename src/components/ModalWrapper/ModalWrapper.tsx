import ReactDOM from "react-dom";
import { useModalHandlers } from "hooks/useModalHandlers";
import { ReactNode } from "react";

interface ModalWrapperProps {
  onClose: () => void;
  children: ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ onClose, children }) => {
  useModalHandlers(onClose);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-[343px] w-full rounded-primary relative p-8 tablet:max-w-[566px] tablet:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-xl cursor-pointer transition-all ease-in hover:scale-125"
        >
          <svg className="w-8 h-8 stroke-black">
            <use href={`/sprite.svg#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalWrapper;
