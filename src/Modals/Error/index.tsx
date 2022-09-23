import React, { useState } from "react";
import Error from "../../assets/images/error.svg";
import GenericModal from "../Generic";

const ErrorModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <GenericModal
          acept={() => setIsOpen((prev) => !prev)}
          Text="Error try again before"
          Image={Error}
        />
      )}
    </>
  );
};

export default ErrorModal;
