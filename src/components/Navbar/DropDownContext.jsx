import React, { createContext, useState } from 'react';

export const DropDownContext = createContext();

export const DropDownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  } ; 

  return (
    <DropDownContext.Provider value={{ isOpen, toggle }}>
      {children}
    </DropDownContext.Provider>
  );
};