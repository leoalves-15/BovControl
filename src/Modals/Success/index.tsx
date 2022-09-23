import React, { useState } from "react";
import Check from "../../assets/images/check.svg";
import GenericModal from "../Generic";

const SuccessModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <GenericModal
          acept={() => setIsOpen((prev) => !prev)}
          colorButton="green"
          Text="Success"
          Image={Check}
        />
      )}
    </>
  );
};

export default SuccessModal;
