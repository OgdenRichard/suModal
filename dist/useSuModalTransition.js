"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSuModalTransition = void 0;
var _react = require("react");
/**
 * Custom hook to add transition after the main component is mounted
 * Returns boolean value to add css transition classes in main component
 * @param {Boolean} isRendered
 * @returns {Boolean}
 */
const useSuModalTransition = isRendered => {
  const [hasTransition, sethasTransition] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (isRendered && !hasTransition) {
      sethasTransition(true);
    } else if (!isRendered && hasTransition) {
      sethasTransition(false);
    }
  }, [isRendered, hasTransition]);
  return hasTransition;
};
exports.useSuModalTransition = useSuModalTransition;