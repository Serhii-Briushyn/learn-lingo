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
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 text-black dark:text-white"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-dark max-w-[343px] w-full rounded-primary relative tablet:max-w-[566px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-xl cursor-pointer transition-all duration-200 ease-in hover:scale-125"
        >
          <svg className="w-8 h-8 stroke-black dark:stroke-white">
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
