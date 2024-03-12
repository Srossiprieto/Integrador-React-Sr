import { ModalBackground, ModalContent, CloseButton } from "./ModalStyle";

import { IoIosClose } from "react-icons/io";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
      return null;
    }
  
    return (
      <ModalBackground>
        <ModalContent>
          {children}
          <CloseButton onClick={onClose}><IoIosClose/></CloseButton>
        </ModalContent>
      </ModalBackground>
    );
  }
  
  export default Modal;