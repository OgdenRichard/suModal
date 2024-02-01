import { useEffect, useState } from "react";

/**
 * Custom hook to add transition after the main component is mounted
 * Returns boolean value to add css transition classes in main component
 * @param {Boolean} isRendered
 * @returns {Boolean}
 */
export const useSuModalTransition = (isRendered) => {
  const [hasTransition, sethasTransition] = useState(false);

  useEffect(() => {
    if (isRendered && !hasTransition) {
      sethasTransition(true);
    } else if (!isRendered && hasTransition) {
      sethasTransition(false);
    }
  }, [isRendered, hasTransition]);

  return hasTransition;
};
