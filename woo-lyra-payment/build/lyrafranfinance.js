!function(n){var l={};function e(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=l,e.d=function(n,l,t){e.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,l){if(1&l&&(n=e(n)),8&l)return n;if(4&l&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&l&&"string"!=typeof n)for(var a in n)e.d(t,a,function(l){return n[l]}.bind(null,a));return t},e.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(l,"a",l),l},e.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},e.p="",e(e.s=2)}([function(module,exports){eval('(function() { module.exports = window["wc"]["wcBlocksRegistry"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid2NcIixcIndjQmxvY2tzUmVnaXN0cnlcIl0/MjUwNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1EQUFtRCxFQUFFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid2NcIl1bXCJ3Y0Jsb2Nrc1JlZ2lzdHJ5XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')},function(module,exports){eval('(function() { module.exports = window["wc"]["wcSettings"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid2NcIixcIndjU2V0dGluZ3NcIl0/YzFiMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLDZDQUE2QyxFQUFFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid2NcIl1bXCJ3Y1NldHRpbmdzXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external ["wc","wcBlocksRegistry"]\nvar external_wc_wcBlocksRegistry_ = __webpack_require__(0);\n\n// EXTERNAL MODULE: external ["wc","wcSettings"]\nvar external_wc_wcSettings_ = __webpack_require__(1);\n\n// CONCATENATED MODULE: ./client/blocks/lyra-utils.js\n/**\n * Copyright © Lyra Network and contributors.\n * This file is part of Lyra Collect plugin for WooCommerce. See COPYING.md for license details.\n *\n * @author    Lyra Network (https://www.lyra.com/)\n * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)\n * @copyright Lyra Network and contributors\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)\n */\n\n/**\n * External dependencies.\n */\n\n/**\n * Lyra data comes form the server passed on a global object.\n */\n\nvar lyra_utils_getLyraServerData = function getLyraServerData(name) {\n  var lyraServerData = Object(external_wc_wcSettings_["getSetting"])(name + \'_data\', null);\n\n  if (!lyraServerData) {\n    return;\n  }\n\n  return lyraServerData;\n};\n// CONCATENATED MODULE: ./client/blocks/lyrafranfinance.js\nvar _lyra_data$supports;\n\n/**\n * Copyright © Lyra Network and contributors.\n * This file is part of Lyra Collect plugin for WooCommerce. See COPYING.md for license details.\n *\n * @author    Lyra Network (https://www.lyra.com/)\n * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)\n * @copyright Lyra Network and contributors\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)\n */\n\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n\nvar PAYMENT_METHOD_NAME = \'lyrafranfinance\';\nvar lyra_data = lyra_utils_getLyraServerData(PAYMENT_METHOD_NAME);\n\nvar Content = function Content() {\n  var fields = /*#__PURE__*/React.createElement("ul", {\n    dangerouslySetInnerHTML: {\n      __html: lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.payment_fields\n    }\n  });\n  jQuery(\'.wc-block-components-checkout-place-order-button\').on(\'click\', lyra_get_selected_option([\'lyrafranfinance_option\']));\n  return /*#__PURE__*/React.createElement("div", null, lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.description, fields);\n};\n\nvar Label = function Label() {\n  var styles = {\n    divWidth: {\n      width: \'95%\'\n    },\n    imgFloat: {\n      "float": \'right\'\n    }\n  };\n  return /*#__PURE__*/React.createElement("div", {\n    style: styles.divWidth\n  }, /*#__PURE__*/React.createElement("span", null, lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.title), /*#__PURE__*/React.createElement("img", {\n    style: styles.imgFloat,\n    src: lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.logo_url,\n    alt: lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.title\n  }));\n};\n\nObject(external_wc_wcBlocksRegistry_["registerPaymentMethod"])({\n  name: PAYMENT_METHOD_NAME,\n  label: /*#__PURE__*/React.createElement(Label, null),\n  ariaLabel: \'Lyra payment method\',\n  canMakePayment: function canMakePayment() {\n    return true;\n  },\n  content: /*#__PURE__*/React.createElement(Content, null),\n  edit: /*#__PURE__*/React.createElement(Content, null),\n  supports: {\n    features: (_lyra_data$supports = lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.supports) !== null && _lyra_data$supports !== void 0 ? _lyra_data$supports : []\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYmxvY2tzL2x5cmEtdXRpbHMuanM/ZGU4NCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYmxvY2tzL2x5cmFmcmFuZmluYW5jZS5qcz9mN2UxIl0sIm5hbWVzIjpbImdldEx5cmFTZXJ2ZXJEYXRhIiwibmFtZSIsImx5cmFTZXJ2ZXJEYXRhIiwiZ2V0U2V0dGluZyIsIlBBWU1FTlRfTUVUSE9EX05BTUUiLCJseXJhX2RhdGEiLCJDb250ZW50IiwiZmllbGRzIiwiX19odG1sIiwicGF5bWVudF9maWVsZHMiLCJqUXVlcnkiLCJvbiIsImx5cmFfZ2V0X3NlbGVjdGVkX29wdGlvbiIsImRlc2NyaXB0aW9uIiwiTGFiZWwiLCJzdHlsZXMiLCJkaXZXaWR0aCIsIndpZHRoIiwiaW1nRmxvYXQiLCJ0aXRsZSIsImxvZ29fdXJsIiwicmVnaXN0ZXJQYXltZW50TWV0aG9kIiwibGFiZWwiLCJhcmlhTGFiZWwiLCJjYW5NYWtlUGF5bWVudCIsImNvbnRlbnQiLCJlZGl0Iiwic3VwcG9ydHMiLCJmZWF0dXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSw0QkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBVTtBQUN2QyxNQUFNQyxjQUFjLEdBQUdDLDZDQUFVLENBQUVGLElBQUksR0FBRyxPQUFULEVBQWtCLElBQWxCLENBQWpDOztBQUVBLE1BQUksQ0FBRUMsY0FBTixFQUFzQjtBQUNsQjtBQUNIOztBQUVELFNBQU9BLGNBQVA7QUFDSCxDQVJNLEM7Ozs7QUNuQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBRUEsSUFBTUUsbUJBQW1CLEdBQUcsaUJBQTVCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHTCw0QkFBaUIsQ0FBQ0ksbUJBQUQsQ0FBakM7O0FBRUEsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixNQUFJQyxNQUFNLGdCQUFHO0FBQUksMkJBQXVCLEVBQUU7QUFBQ0MsWUFBTSxFQUFFSCxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRUk7QUFBcEI7QUFBN0IsSUFBYjtBQUNBQyxRQUFNLENBQUMsa0RBQUQsQ0FBTixDQUEyREMsRUFBM0QsQ0FBOEQsT0FBOUQsRUFBdUVDLHdCQUF3QixDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUEvRjtBQUVBLHNCQUNJLGlDQUNNUCxTQUROLGFBQ01BLFNBRE4sdUJBQ01BLFNBQVMsQ0FBRVEsV0FEakIsRUFFTU4sTUFGTixDQURKO0FBTUgsQ0FWRDs7QUFZQSxJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCLE1BQU1DLE1BQU0sR0FBRztBQUNYQyxZQUFRLEVBQUU7QUFDTkMsV0FBSyxFQUFFO0FBREQsS0FEQztBQUlYQyxZQUFRLEVBQUU7QUFDTixlQUFPO0FBREQ7QUFKQyxHQUFmO0FBU0Esc0JBQ0k7QUFBSyxTQUFLLEVBQUdILE1BQU0sQ0FBQ0M7QUFBcEIsa0JBQ0ksa0NBQVFYLFNBQVIsYUFBUUEsU0FBUix1QkFBUUEsU0FBUyxDQUFFYyxLQUFuQixDQURKLGVBRUk7QUFDSSxTQUFLLEVBQUdKLE1BQU0sQ0FBQ0csUUFEbkI7QUFFSSxPQUFHLEVBQUdiLFNBQUgsYUFBR0EsU0FBSCx1QkFBR0EsU0FBUyxDQUFFZSxRQUZyQjtBQUdJLE9BQUcsRUFBR2YsU0FBSCxhQUFHQSxTQUFILHVCQUFHQSxTQUFTLENBQUVjO0FBSHJCLElBRkosQ0FESjtBQVVILENBcEJEOztBQXNCQUUsOERBQXFCLENBQUM7QUFDbEJwQixNQUFJLEVBQUVHLG1CQURZO0FBRWxCa0IsT0FBSyxlQUFFLG9CQUFDLEtBQUQsT0FGVztBQUdsQkMsV0FBUyxFQUFFLHFCQUhPO0FBSWxCQyxnQkFBYyxFQUFFO0FBQUEsV0FBTSxJQUFOO0FBQUEsR0FKRTtBQUtsQkMsU0FBTyxlQUFFLG9CQUFDLE9BQUQsT0FMUztBQU1sQkMsTUFBSSxlQUFFLG9CQUFDLE9BQUQsT0FOWTtBQU9sQkMsVUFBUSxFQUFFO0FBQ05DLFlBQVEseUJBQUV2QixTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRXNCLFFBQWIscUVBQXlCO0FBRDNCO0FBUFEsQ0FBRCxDQUFyQiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgwqkgTHlyYSBOZXR3b3JrIGFuZCBjb250cmlidXRvcnMuXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBMeXJhIENvbGxlY3QgcGx1Z2luIGZvciBXb29Db21tZXJjZS4gU2VlIENPUFlJTkcubWQgZm9yIGxpY2Vuc2UgZGV0YWlscy5cbiAqXG4gKiBAYXV0aG9yICAgIEx5cmEgTmV0d29yayAoaHR0cHM6Ly93d3cubHlyYS5jb20vKVxuICogQGF1dGhvciAgICBHZW9mZnJleSBDcm9mdGUsIEFsc2FjcsOpYXRpb25zIChodHRwczovL3d3dy5hbHNhY3JlYXRpb25zLmZyLylcbiAqIEBjb3B5cmlnaHQgTHlyYSBOZXR3b3JrIGFuZCBjb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL29sZC1saWNlbnNlcy9ncGwtMi4wLmh0bWwgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgKEdQTCB2MilcbiAqL1xuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IHsgZ2V0U2V0dGluZyB9IGZyb20gJ0B3b29jb21tZXJjZS9zZXR0aW5ncyc7XG5cbi8qKlxuICogTHlyYSBkYXRhIGNvbWVzIGZvcm0gdGhlIHNlcnZlciBwYXNzZWQgb24gYSBnbG9iYWwgb2JqZWN0LlxuICovXG5cbmV4cG9ydCBjb25zdCBnZXRMeXJhU2VydmVyRGF0YSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgbHlyYVNlcnZlckRhdGEgPSBnZXRTZXR0aW5nKCBuYW1lICsgJ19kYXRhJywgbnVsbCApO1xuXG4gICAgaWYgKCEgbHlyYVNlcnZlckRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBseXJhU2VydmVyRGF0YTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCDCqSBMeXJhIE5ldHdvcmsgYW5kIGNvbnRyaWJ1dG9ycy5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEx5cmEgQ29sbGVjdCBwbHVnaW4gZm9yIFdvb0NvbW1lcmNlLiBTZWUgQ09QWUlORy5tZCBmb3IgbGljZW5zZSBkZXRhaWxzLlxuICpcbiAqIEBhdXRob3IgICAgTHlyYSBOZXR3b3JrIChodHRwczovL3d3dy5seXJhLmNvbS8pXG4gKiBAYXV0aG9yICAgIEdlb2ZmcmV5IENyb2Z0ZSwgQWxzYWNyw6lhdGlvbnMgKGh0dHBzOi8vd3d3LmFsc2FjcmVhdGlvbnMuZnIvKVxuICogQGNvcHlyaWdodCBMeXJhIE5ldHdvcmsgYW5kIGNvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvb2xkLWxpY2Vuc2VzL2dwbC0yLjAuaHRtbCBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSAoR1BMIHYyKVxuICovXG5cbi8qKlxuICogRXh0ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5pbXBvcnQgeyByZWdpc3RlclBheW1lbnRNZXRob2QgfSBmcm9tICdAd29vY29tbWVyY2UvYmxvY2tzLXJlZ2lzdHJ5JztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cbmltcG9ydCB7IGdldEx5cmFTZXJ2ZXJEYXRhIH0gZnJvbSAnLi9seXJhLXV0aWxzJztcblxuY29uc3QgUEFZTUVOVF9NRVRIT0RfTkFNRSA9ICdseXJhZnJhbmZpbmFuY2UnO1xudmFyIGx5cmFfZGF0YSA9IGdldEx5cmFTZXJ2ZXJEYXRhKFBBWU1FTlRfTUVUSE9EX05BTUUpO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICAgIHZhciBmaWVsZHMgPSA8dWwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGx5cmFfZGF0YT8ucGF5bWVudF9maWVsZHN9fSAvPjtcbiAgICBqUXVlcnkoJy53Yy1ibG9jay1jb21wb25lbnRzLWNoZWNrb3V0LXBsYWNlLW9yZGVyLWJ1dHRvbicpLm9uKCdjbGljaycsIGx5cmFfZ2V0X3NlbGVjdGVkX29wdGlvbihbJ2x5cmFmcmFuZmluYW5jZV9vcHRpb24nXSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgbHlyYV9kYXRhPy5kZXNjcmlwdGlvbiB9XG4gICAgICAgICAgICB7IGZpZWxkcyB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCBMYWJlbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIGRpdldpZHRoOiB7XG4gICAgICAgICAgICB3aWR0aDogJzk1JSdcbiAgICAgICAgfSxcbiAgICAgICAgaW1nRmxvYXQ6IHtcbiAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzLmRpdldpZHRoIH0+XG4gICAgICAgICAgICA8c3Bhbj57IGx5cmFfZGF0YT8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHN0eWxlPXsgc3R5bGVzLmltZ0Zsb2F0IH1cbiAgICAgICAgICAgICAgICBzcmM9eyBseXJhX2RhdGE/LmxvZ29fdXJsIH1cbiAgICAgICAgICAgICAgICBhbHQ9eyBseXJhX2RhdGE/LnRpdGxlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5yZWdpc3RlclBheW1lbnRNZXRob2Qoe1xuICAgIG5hbWU6IFBBWU1FTlRfTUVUSE9EX05BTUUsXG4gICAgbGFiZWw6IDxMYWJlbCAvPixcbiAgICBhcmlhTGFiZWw6ICdMeXJhIHBheW1lbnQgbWV0aG9kJyxcbiAgICBjYW5NYWtlUGF5bWVudDogKCkgPT4gdHJ1ZSxcbiAgICBjb250ZW50OiA8Q29udGVudCAvPixcbiAgICBlZGl0OiA8Q29udGVudCAvPixcbiAgICBzdXBwb3J0czoge1xuICAgICAgICBmZWF0dXJlczogbHlyYV9kYXRhPy5zdXBwb3J0cyA/PyBbXSxcbiAgICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')}]);