!function(n){var e={};function t(l){if(e[l])return e[l].exports;var Q=e[l]={i:l,l:!1,exports:{}};return n[l].call(Q.exports,Q,Q.exports,t),Q.l=!0,Q.exports}t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var Q in n)t.d(l,Q,function(e){return n[e]}.bind(null,Q));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(module,exports){eval('(function() { module.exports = window["wc"]["wcBlocksRegistry"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid2NcIixcIndjQmxvY2tzUmVnaXN0cnlcIl0/MjUwNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1EQUFtRCxFQUFFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid2NcIl1bXCJ3Y0Jsb2Nrc1JlZ2lzdHJ5XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')},function(module,exports){eval('(function() { module.exports = window["wc"]["wcSettings"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid2NcIixcIndjU2V0dGluZ3NcIl0/YzFiMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLDZDQUE2QyxFQUFFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid2NcIl1bXCJ3Y1NldHRpbmdzXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external ["wc","wcBlocksRegistry"]\nvar external_wc_wcBlocksRegistry_ = __webpack_require__(0);\n\n// EXTERNAL MODULE: external ["wc","wcSettings"]\nvar external_wc_wcSettings_ = __webpack_require__(1);\n\n// CONCATENATED MODULE: ./client/blocks/payzen-utils.js\n/**\n * Copyright © Lyra Network and contributors.\n * This file is part of PayZen plugin for WooCommerce. See COPYING.md for license details.\n *\n * @author    Lyra Network (https://www.lyra.com/)\n * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)\n * @copyright Lyra Network and contributors\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)\n */\n\n/**\n * External dependencies.\n */\n\n/**\n * Payzen data comes form the server passed on a global object.\n */\n\nvar payzen_utils_getPayzenServerData = function getPayzenServerData(name) {\n  var payzenServerData = Object(external_wc_wcSettings_["getSetting"])(name + \'_data\', null);\n\n  if (!payzenServerData) {\n    return;\n  }\n\n  return payzenServerData;\n};\n// CONCATENATED MODULE: ./client/blocks/payzenregroupedother.js\nvar _payzen_data$supports;\n\n/**\n * Copyright © Lyra Network and contributors.\n * This file is part of PayZen plugin for WooCommerce. See COPYING.md for license details.\n *\n * @author    Lyra Network (https://www.lyra.com/)\n * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)\n * @copyright Lyra Network and contributors\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)\n */\n\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\nvar PAYMENT_METHOD_NAME = \'payzenregroupedother\';\nvar payzen_data = payzen_utils_getPayzenServerData(PAYMENT_METHOD_NAME);\n\nvar Content = function Content() {\n  var fields = /*#__PURE__*/React.createElement("ul", {\n    dangerouslySetInnerHTML: {\n      __html: payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.payment_fields\n    }\n  });\n  jQuery(\'.wc-block-components-checkout-place-order-button\').on(\'click\', payzen_get_selected_option([\'payzenregroupedother_card_type\']));\n  return /*#__PURE__*/React.createElement("div", null, payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.description, fields);\n};\n\nvar Label = function Label() {\n  var styles = {\n    divWidth: {\n      width: \'95%\'\n    },\n    imgFloat: {\n      "float": \'right\'\n    }\n  };\n  return /*#__PURE__*/React.createElement("div", {\n    style: styles.divWidth\n  }, /*#__PURE__*/React.createElement("span", null, payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.title), /*#__PURE__*/React.createElement("img", {\n    style: styles.imgFloat,\n    src: payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.logo_url,\n    alt: payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.title\n  }));\n};\n\nObject(external_wc_wcBlocksRegistry_["registerPaymentMethod"])({\n  name: PAYMENT_METHOD_NAME,\n  label: /*#__PURE__*/React.createElement(Label, null),\n  ariaLabel: \'Payzen payment method\',\n  canMakePayment: function canMakePayment() {\n    return true;\n  },\n  content: /*#__PURE__*/React.createElement(Content, null),\n  edit: /*#__PURE__*/React.createElement(Content, null),\n  supports: {\n    features: (_payzen_data$supports = payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.supports) !== null && _payzen_data$supports !== void 0 ? _payzen_data$supports : []\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYmxvY2tzL3BheXplbi11dGlscy5qcz9hOGI1Iiwid2VicGFjazovLy8uL2NsaWVudC9ibG9ja3MvcGF5emVucmVncm91cGVkb3RoZXIuanM/YzIwMSJdLCJuYW1lcyI6WyJnZXRQYXl6ZW5TZXJ2ZXJEYXRhIiwibmFtZSIsInBheXplblNlcnZlckRhdGEiLCJnZXRTZXR0aW5nIiwiUEFZTUVOVF9NRVRIT0RfTkFNRSIsInBheXplbl9kYXRhIiwiQ29udGVudCIsImZpZWxkcyIsIl9faHRtbCIsInBheW1lbnRfZmllbGRzIiwialF1ZXJ5Iiwib24iLCJwYXl6ZW5fZ2V0X3NlbGVjdGVkX29wdGlvbiIsImRlc2NyaXB0aW9uIiwiTGFiZWwiLCJzdHlsZXMiLCJkaXZXaWR0aCIsIndpZHRoIiwiaW1nRmxvYXQiLCJ0aXRsZSIsImxvZ29fdXJsIiwicmVnaXN0ZXJQYXltZW50TWV0aG9kIiwibGFiZWwiLCJhcmlhTGFiZWwiLCJjYW5NYWtlUGF5bWVudCIsImNvbnRlbnQiLCJlZGl0Iiwic3VwcG9ydHMiLCJmZWF0dXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxnQ0FBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLElBQUQsRUFBVTtBQUN6QyxNQUFNQyxnQkFBZ0IsR0FBR0MsNkNBQVUsQ0FBRUYsSUFBSSxHQUFHLE9BQVQsRUFBa0IsSUFBbEIsQ0FBbkM7O0FBRUEsTUFBSSxDQUFFQyxnQkFBTixFQUF3QjtBQUNwQjtBQUNIOztBQUVELFNBQU9BLGdCQUFQO0FBQ0gsQ0FSTSxDOzs7O0FDbkJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBLElBQU1FLG1CQUFtQixHQUFHLHNCQUE1QjtBQUNBLElBQUlDLFdBQVcsR0FBR0wsZ0NBQW1CLENBQUNJLG1CQUFELENBQXJDOztBQUVBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEIsTUFBSUMsTUFBTSxnQkFBRztBQUFJLDJCQUF1QixFQUFFO0FBQUNDLFlBQU0sRUFBRUgsV0FBRixhQUFFQSxXQUFGLHVCQUFFQSxXQUFXLENBQUVJO0FBQXRCO0FBQTdCLElBQWI7QUFDQUMsUUFBTSxDQUFDLGtEQUFELENBQU4sQ0FBMkRDLEVBQTNELENBQThELE9BQTlELEVBQXVFQywwQkFBMEIsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBakc7QUFFQSxzQkFDSSxpQ0FDTVAsV0FETixhQUNNQSxXQUROLHVCQUNNQSxXQUFXLENBQUVRLFdBRG5CLEVBRU1OLE1BRk4sQ0FESjtBQU1ILENBVkQ7O0FBWUEsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQixNQUFNQyxNQUFNLEdBQUc7QUFDWEMsWUFBUSxFQUFFO0FBQ05DLFdBQUssRUFBRTtBQURELEtBREM7QUFJWEMsWUFBUSxFQUFFO0FBQ04sZUFBTztBQUREO0FBSkMsR0FBZjtBQVNBLHNCQUNJO0FBQUssU0FBSyxFQUFHSCxNQUFNLENBQUNDO0FBQXBCLGtCQUNJLGtDQUFRWCxXQUFSLGFBQVFBLFdBQVIsdUJBQVFBLFdBQVcsQ0FBRWMsS0FBckIsQ0FESixlQUVJO0FBQ0ksU0FBSyxFQUFHSixNQUFNLENBQUNHLFFBRG5CO0FBRUksT0FBRyxFQUFHYixXQUFILGFBQUdBLFdBQUgsdUJBQUdBLFdBQVcsQ0FBRWUsUUFGdkI7QUFHSSxPQUFHLEVBQUdmLFdBQUgsYUFBR0EsV0FBSCx1QkFBR0EsV0FBVyxDQUFFYztBQUh2QixJQUZKLENBREo7QUFVSCxDQXBCRDs7QUFzQkFFLDhEQUFxQixDQUFDO0FBQ2xCcEIsTUFBSSxFQUFFRyxtQkFEWTtBQUVsQmtCLE9BQUssZUFBRSxvQkFBQyxLQUFELE9BRlc7QUFHbEJDLFdBQVMsRUFBRSx1QkFITztBQUlsQkMsZ0JBQWMsRUFBRTtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBSkU7QUFLbEJDLFNBQU8sZUFBRSxvQkFBQyxPQUFELE9BTFM7QUFNbEJDLE1BQUksZUFBRSxvQkFBQyxPQUFELE9BTlk7QUFPbEJDLFVBQVEsRUFBRTtBQUNOQyxZQUFRLDJCQUFFdkIsV0FBRixhQUFFQSxXQUFGLHVCQUFFQSxXQUFXLENBQUVzQixRQUFmLHlFQUEyQjtBQUQ3QjtBQVBRLENBQUQsQ0FBckIiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IMKpIEx5cmEgTmV0d29yayBhbmQgY29udHJpYnV0b3JzLlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUGF5WmVuIHBsdWdpbiBmb3IgV29vQ29tbWVyY2UuIFNlZSBDT1BZSU5HLm1kIGZvciBsaWNlbnNlIGRldGFpbHMuXG4gKlxuICogQGF1dGhvciAgICBMeXJhIE5ldHdvcmsgKGh0dHBzOi8vd3d3Lmx5cmEuY29tLylcbiAqIEBhdXRob3IgICAgR2VvZmZyZXkgQ3JvZnRlLCBBbHNhY3LDqWF0aW9ucyAoaHR0cHM6Ly93d3cuYWxzYWNyZWF0aW9ucy5mci8pXG4gKiBAY29weXJpZ2h0IEx5cmEgTmV0d29yayBhbmQgY29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9vbGQtbGljZW5zZXMvZ3BsLTIuMC5odG1sIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIChHUEwgdjIpXG4gKi9cblxuLyoqXG4gKiBFeHRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cbmltcG9ydCB7IGdldFNldHRpbmcgfSBmcm9tICdAd29vY29tbWVyY2Uvc2V0dGluZ3MnO1xuXG4vKipcbiAqIFBheXplbiBkYXRhIGNvbWVzIGZvcm0gdGhlIHNlcnZlciBwYXNzZWQgb24gYSBnbG9iYWwgb2JqZWN0LlxuICovXG5cbmV4cG9ydCBjb25zdCBnZXRQYXl6ZW5TZXJ2ZXJEYXRhID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBwYXl6ZW5TZXJ2ZXJEYXRhID0gZ2V0U2V0dGluZyggbmFtZSArICdfZGF0YScsIG51bGwgKTtcblxuICAgIGlmICghIHBheXplblNlcnZlckRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBwYXl6ZW5TZXJ2ZXJEYXRhO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IMKpIEx5cmEgTmV0d29yayBhbmQgY29udHJpYnV0b3JzLlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUGF5WmVuIHBsdWdpbiBmb3IgV29vQ29tbWVyY2UuIFNlZSBDT1BZSU5HLm1kIGZvciBsaWNlbnNlIGRldGFpbHMuXG4gKlxuICogQGF1dGhvciAgICBMeXJhIE5ldHdvcmsgKGh0dHBzOi8vd3d3Lmx5cmEuY29tLylcbiAqIEBhdXRob3IgICAgR2VvZmZyZXkgQ3JvZnRlLCBBbHNhY3LDqWF0aW9ucyAoaHR0cHM6Ly93d3cuYWxzYWNyZWF0aW9ucy5mci8pXG4gKiBAY29weXJpZ2h0IEx5cmEgTmV0d29yayBhbmQgY29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9vbGQtbGljZW5zZXMvZ3BsLTIuMC5odG1sIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIChHUEwgdjIpXG4gKi9cblxuLyoqXG4gKiBFeHRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cbmltcG9ydCB7IHJlZ2lzdGVyUGF5bWVudE1ldGhvZCB9IGZyb20gJ0B3b29jb21tZXJjZS9ibG9ja3MtcmVnaXN0cnknO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IHsgZ2V0UGF5emVuU2VydmVyRGF0YSB9IGZyb20gJy4vcGF5emVuLXV0aWxzJztcblxuY29uc3QgUEFZTUVOVF9NRVRIT0RfTkFNRSA9ICdwYXl6ZW5yZWdyb3VwZWRvdGhlcic7XG52YXIgcGF5emVuX2RhdGEgPSBnZXRQYXl6ZW5TZXJ2ZXJEYXRhKFBBWU1FTlRfTUVUSE9EX05BTUUpO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICAgIHZhciBmaWVsZHMgPSA8dWwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBheXplbl9kYXRhPy5wYXltZW50X2ZpZWxkc319IC8+O1xuICAgIGpRdWVyeSgnLndjLWJsb2NrLWNvbXBvbmVudHMtY2hlY2tvdXQtcGxhY2Utb3JkZXItYnV0dG9uJykub24oJ2NsaWNrJywgcGF5emVuX2dldF9zZWxlY3RlZF9vcHRpb24oWydwYXl6ZW5yZWdyb3VwZWRvdGhlcl9jYXJkX3R5cGUnXSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgcGF5emVuX2RhdGE/LmRlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgIHsgZmllbGRzIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IExhYmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgZGl2V2lkdGg6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnOTUlJ1xuICAgICAgICB9LFxuICAgICAgICBpbWdGbG9hdDoge1xuICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9eyBzdHlsZXMuZGl2V2lkdGggfT5cbiAgICAgICAgICAgIDxzcGFuPnsgcGF5emVuX2RhdGE/LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17IHN0eWxlcy5pbWdGbG9hdCB9XG4gICAgICAgICAgICAgICAgc3JjPXsgcGF5emVuX2RhdGE/LmxvZ29fdXJsIH1cbiAgICAgICAgICAgICAgICBhbHQ9eyBwYXl6ZW5fZGF0YT8udGl0bGUgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbnJlZ2lzdGVyUGF5bWVudE1ldGhvZCh7XG4gICAgbmFtZTogUEFZTUVOVF9NRVRIT0RfTkFNRSxcbiAgICBsYWJlbDogPExhYmVsIC8+LFxuICAgIGFyaWFMYWJlbDogJ1BheXplbiBwYXltZW50IG1ldGhvZCcsXG4gICAgY2FuTWFrZVBheW1lbnQ6ICgpID0+IHRydWUsXG4gICAgY29udGVudDogPENvbnRlbnQgLz4sXG4gICAgZWRpdDogPENvbnRlbnQgLz4sXG4gICAgc3VwcG9ydHM6IHtcbiAgICAgICAgZmVhdHVyZXM6IHBheXplbl9kYXRhPy5zdXBwb3J0cyA/PyBbXSxcbiAgICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')}]);