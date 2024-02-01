import { useEffect, useCallback } from "react";

/**
 * Custom React hook
 * Allows user to close modal using Esc key
 * Removes event listener on unmount
 * @param {boolean} isOpen
 * @param {Function} setIsOpen
 * @param {boolean} closeOnEscKey
 * @returns {Function}
 */
export const useCloseOnEscKey = (isOpen, setIsOpen, closeOnEscKey) => {
  const handleEscKeyUp = useCallback(
    (event) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    },
    [setIsOpen, isOpen]
  );

  return useEffect(() => {
    if (closeOnEscKey) {
      window.addEventListener("keydown", handleEscKeyUp);
    }

    return () => {
      if (closeOnEscKey) {
        window.removeEventListener("keydown", handleEscKeyUp);
      }
    };
  }, [closeOnEscKey, handleEscKeyUp]);
};
