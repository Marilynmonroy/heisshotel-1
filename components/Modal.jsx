import React, { useRef } from "react";

const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose();
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-30"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-black rounded-lg w-full md:w-3/4 h-1/3 md:h-3/4 relative"
      >
        <button
          className="absolute top-0 right-0 p-3 md:p-5 z-50"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
