"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuModal = void 0;
var PropTypes = _interopRequireWildcard(require("prop-types"));
var _useSuModalTransition = require("./useSuModalTransition");
var _useCloseOnEscKey = require("./useCloseOnEscKey");
require("./style/style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SuModal = _ref => {
  let {
    children,
    isOpen,
    setIsOpen,
    suModalTransition,
    closeButton,
    closeOnClickOut,
    closeOnEscKey,
    styleOptions
  } = _ref;
  const setTransition = (0, _useSuModalTransition.useSuModalTransition)(isOpen);
  (0, _useCloseOnEscKey.useCloseOnEscKey)(isOpen, setIsOpen, closeOnEscKey);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "sumodal__background",
      onClick: closeOnClickOut ? () => setIsOpen(false) : undefined,
      style: styleOptions && styleOptions.background || null,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(suModalTransition && "sumodal__initpos" || "sumodal__container", " ").concat(suModalTransition && setTransition && "sumodal__finalpos" || ""),
        onClick: e => e.stopPropagation(),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "sumodal__modal",
          style: styleOptions && styleOptions.container || null,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "sumodal__modal__content",
            style: styleOptions && styleOptions.content || null,
            children: children
          }), closeButton && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "sumodal__btn",
            onClick: () => setIsOpen(false),
            children: "X"
          })]
        })
      })
    })
  });
};
exports.SuModal = SuModal;
SuModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  suModalTransition: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeOnClickOut: PropTypes.bool,
  closeOnEscKey: PropTypes.bool,
  styleOptions: PropTypes.object
};
SuModal.defaultProps = {
  children: "",
  suModalTransition: true,
  closeButton: true,
  closeOnClickOut: true,
  closeOnEscKey: true,
  styleOptions: {}
};