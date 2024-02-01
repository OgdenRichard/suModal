import * as PropTypes from "prop-types";
import { useSuModalTransition } from "./useSuModalTransition";
import { useCloseOnEscKey } from "./useCloseOnEscKey";
import "./style/style.css";

/**
 * SuModal main component
 * Renders a modal accordingly to specified parameters
 * @param {string|ReactNode|arrayOf[ReactNode]} children
 * @param {boolean} isOpen
 * @param {Function} setIsOpen
 * @param {boolean} suModalTransition
 * @param {boolean} closeButton
 * @param {boolean} closeOnClickOut
 * @param {boolean} closeOnEscKey
 * @param {boolean} styleOptions
 * @returns {ReactNode}
 */

export const SuModal = ({
  children,
  isOpen,
  setIsOpen,
  suModalTransition,
  closeButton,
  closeOnClickOut,
  closeOnEscKey,
  styleOptions,
}) => {
  const setTransition = useSuModalTransition(isOpen);
  useCloseOnEscKey(isOpen, setIsOpen, closeOnEscKey);

  return (
    <>
      <div
        className="sumodal__background"
        onClick={closeOnClickOut ? () => setIsOpen(false) : undefined}
        style={(styleOptions && styleOptions.background) || null}
      >
        <div
          className={`${
            (suModalTransition && "sumodal__initpos") || "sumodal__container"
          } ${
            (suModalTransition && setTransition && "sumodal__finalpos") || ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="sumodal__modal"
            style={(styleOptions && styleOptions.container) || null}
          >
            <div
              className="sumodal__modal__content"
              style={(styleOptions && styleOptions.content) || null}
            >
              {children}
            </div>
            {closeButton && (
              <button
                type="button"
                className="sumodal__btn"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

SuModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  suModalTransition: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeOnClickOut: PropTypes.bool,
  closeOnEscKey: PropTypes.bool,
  styleOptions: PropTypes.object,
};

SuModal.defaultProps = {
  children: "",
  suModalTransition: true,
  closeButton: true,
  closeOnClickOut: true,
  closeOnEscKey: true,
  styleOptions: {},
};
