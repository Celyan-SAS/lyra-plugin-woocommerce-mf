!function(Q){var B={};function F(I){if(B[I])return B[I].exports;var U=B[I]={i:I,l:!1,exports:{}};return Q[I].call(U.exports,U,U.exports,F),U.l=!0,U.exports}F.m=Q,F.c=B,F.d=function(Q,B,I){F.o(Q,B)||Object.defineProperty(Q,B,{enumerable:!0,get:I})},F.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},F.t=function(Q,B){if(1&B&&(Q=F(Q)),8&B)return Q;if(4&B&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var I=Object.create(null);if(F.r(I),Object.defineProperty(I,"default",{enumerable:!0,value:Q}),2&B&&"string"!=typeof Q)for(var U in Q)F.d(I,U,function(B){return Q[B]}.bind(null,U));return I},F.n=function(Q){var B=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return F.d(B,"a",B),B},F.o=function(Q,B){return Object.prototype.hasOwnProperty.call(Q,B)},F.p="",F(F.s=4)}([function(module,exports){eval('(function() { module.exports = window["wc"]["wcBlocksRegistry"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid2NcIixcIndjQmxvY2tzUmVnaXN0cnlcIl0/MjUwNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1EQUFtRCxFQUFFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid2NcIl1bXCJ3Y0Jsb2Nrc1JlZ2lzdHJ5XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')},function(module,exports){eval('(function() { module.exports = window["wp"]["htmlEntities"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid3BcIixcImh0bWxFbnRpdGllc1wiXT85MDIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsK0NBQStDLEVBQUUiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImh0bWxFbnRpdGllc1wiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPayzenServerData; });\n/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);\n/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Copyright © Lyra Network and contributors.\n * This file is part of PayZen plugin for WooCommerce. See COPYING.md for license details.\n *\n * @author    Lyra Network (https://www.lyra.com/)\n * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)\n * @copyright Lyra Network and contributors\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)\n */\n\n/**\n * External dependencies.\n */\n\n/**\n * Payzen data comes form the server passed on a global object.\n */\n\nvar getPayzenServerData = function getPayzenServerData(name) {\n  var payzenServerData = Object(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__["getSetting"])(name + \'_data\', null);\n\n  if (!payzenServerData) {\n    return;\n  }\n\n  return payzenServerData;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYmxvY2tzL3BheXplbi11dGlscy5qcz9hOGI1Il0sIm5hbWVzIjpbImdldFBheXplblNlcnZlckRhdGEiLCJuYW1lIiwicGF5emVuU2VydmVyRGF0YSIsImdldFNldHRpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLElBQUQsRUFBVTtBQUN6QyxNQUFNQyxnQkFBZ0IsR0FBR0Msd0VBQVUsQ0FBRUYsSUFBSSxHQUFHLE9BQVQsRUFBa0IsSUFBbEIsQ0FBbkM7O0FBRUEsTUFBSSxDQUFFQyxnQkFBTixFQUF3QjtBQUNwQjtBQUNIOztBQUVELFNBQU9BLGdCQUFQO0FBQ0gsQ0FSTSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgwqkgTHlyYSBOZXR3b3JrIGFuZCBjb250cmlidXRvcnMuXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBQYXlaZW4gcGx1Z2luIGZvciBXb29Db21tZXJjZS4gU2VlIENPUFlJTkcubWQgZm9yIGxpY2Vuc2UgZGV0YWlscy5cbiAqXG4gKiBAYXV0aG9yICAgIEx5cmEgTmV0d29yayAoaHR0cHM6Ly93d3cubHlyYS5jb20vKVxuICogQGF1dGhvciAgICBHZW9mZnJleSBDcm9mdGUsIEFsc2FjcsOpYXRpb25zIChodHRwczovL3d3dy5hbHNhY3JlYXRpb25zLmZyLylcbiAqIEBjb3B5cmlnaHQgTHlyYSBOZXR3b3JrIGFuZCBjb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL29sZC1saWNlbnNlcy9ncGwtMi4wLmh0bWwgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgKEdQTCB2MilcbiAqL1xuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IHsgZ2V0U2V0dGluZyB9IGZyb20gJ0B3b29jb21tZXJjZS9zZXR0aW5ncyc7XG5cbi8qKlxuICogUGF5emVuIGRhdGEgY29tZXMgZm9ybSB0aGUgc2VydmVyIHBhc3NlZCBvbiBhIGdsb2JhbCBvYmplY3QuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGdldFBheXplblNlcnZlckRhdGEgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHBheXplblNlcnZlckRhdGEgPSBnZXRTZXR0aW5nKCBuYW1lICsgJ19kYXRhJywgbnVsbCApO1xuXG4gICAgaWYgKCEgcGF5emVuU2VydmVyRGF0YSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHBheXplblNlcnZlckRhdGE7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')},function(module,exports){eval('(function() { module.exports = window["wc"]["wcSettings"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid2NcIixcIndjU2V0dGluZ3NcIl0/YzFiMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLDZDQUE2QyxFQUFFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid2NcIl1bXCJ3Y1NldHRpbmdzXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _payzen_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);\nvar _payzen_data$supports;\n\n/**\n * Copyright © Lyra Network and contributors.\n * This file is part of PayZen plugin for WooCommerce. See COPYING.md for license details.\n *\n * @author    Lyra Network (https://www.lyra.com/)\n * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)\n * @copyright Lyra Network and contributors\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)\n */\n\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\nvar PAYMENT_METHOD_NAME = 'payzenstd';\nvar payzen_data = Object(_payzen_utils__WEBPACK_IMPORTED_MODULE_2__[/* getPayzenServerData */ \"a\"])(PAYMENT_METHOD_NAME);\nvar submitButton = '.wc-block-components-checkout-place-order-button';\nvar smartbuttonMethod = '';\nvar smartbuttonAll = false;\nvar hideSmart = (payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.hide_smartbutton) && (payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.hide_smartbutton) === 'true';\nvar hideButton = false;\nvar savedData = false;\nvar newData = null;\n\nvar Content = function Content() {\n  if (payzen_data !== null && payzen_data !== void 0 && payzen_data.payment_fields) {\n    var fields = /*#__PURE__*/React.createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.payment_fields\n      }\n    });\n    return /*#__PURE__*/React.createElement(\"div\", null, fields);\n  } else {\n    return Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__[\"decodeEntities\"])(payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.description);\n  }\n};\n\nvar Label = function Label() {\n  var styles = {\n    divWidth: {\n      width: '95%'\n    },\n    imgFloat: {\n      \"float\": 'right'\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    style: styles.divWidth\n  }, /*#__PURE__*/React.createElement(\"span\", null, payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.title), /*#__PURE__*/React.createElement(\"img\", {\n    style: styles.imgFloat,\n    src: payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.logo_url,\n    alt: payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.title\n  }));\n};\n\nObject(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__[\"registerPaymentMethod\"])({\n  name: PAYMENT_METHOD_NAME,\n  label: /*#__PURE__*/React.createElement(Label, null),\n  ariaLabel: 'Payzen payment method',\n  canMakePayment: function canMakePayment() {\n    return true;\n  },\n  content: /*#__PURE__*/React.createElement(Content, null),\n  edit: /*#__PURE__*/React.createElement(Content, null),\n  supports: {\n    features: (_payzen_data$supports = payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.supports) !== null && _payzen_data$supports !== void 0 ? _payzen_data$supports : []\n  }\n});\n\nvar displayFields = function displayFields() {\n  delete window.FORM_TOKEN;\n  delete window.IDENTIFIER_FORM_TOKEN;\n  delete window.PAYZEN_HIDE_SINGLE_BUTTON;\n\n  switch (payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.payment_mode) {\n    case 'REST':\n    case 'SMARTFORM':\n    case 'SMARTFORMEXT':\n    case 'SMARTFORMEXTNOLOGOS':\n      if (payzen_data !== null && payzen_data !== void 0 && payzen_data.vars) {\n        window.PAYZEN_BUTTON_TEXT = jQuery(submitButton).text();\n        eval(payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.vars);\n        hideButton = window.PAYZEN_HIDE_SINGLE_BUTTON == true;\n        KR.onFormReady(function () {\n          if (hideSmart) {\n            var element = jQuery(\".kr-smart-button\");\n\n            if (element.length > 0) {\n              smartbuttonMethod = element.attr(\"kr-payment-method\");\n              element.hide();\n            } else {\n              element = jQuery(\".kr-smart-form-modal-button\");\n\n              if (element.length > 0) {\n                smartbuttonMethod = \"all\";\n                element.hide();\n              }\n            }\n          }\n        });\n      }\n\n      break;\n\n    default:\n      break;\n  }\n\n  payzenUpdatePaymentBlock(true);\n};\n\nvar onButtonClick = function onButtonClick(e) {\n  if (!jQuery(\"#radio-control-wc-payment-method-options-payzenstd\").is(\":checked\")) {\n    return true;\n  } // In case of form validation error, let WooCommerce deal with it.\n\n\n  if (jQuery('div.wc-block-components-validation-error')[0]) {\n    return true;\n  }\n\n  jQuery('.kr-form-error').html('');\n  window.PAYZEN_BUTTON_TEXT = jQuery(submitButton).text();\n  document.cookie = 'payzen_force_redir=; Max-Age=0; path=/; domain=' + location.host;\n  document.cookie = 'payzen_use_identifier=; Max-Age=0; path=/; domain=' + location.host;\n\n  if (jQuery(\"#payzen_use_identifier\")) {\n    var use_identifier = jQuery(\"#payzen_use_identifier\").val();\n    document.cookie = 'payzen_use_identifier=' + use_identifier + '; path=/';\n  }\n\n  switch (payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.payment_mode) {\n    case 'MERCHANT':\n      payzenstd_get_card();\n      break;\n\n    case 'IFRAME':\n      window.IFRAME_LINK = payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.link;\n      window.IFRAME_SRC = payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.src;\n      payzenstd_show_iframe();\n      break;\n\n    case 'REST':\n    case 'SMARTFORM':\n    case 'SMARTFORMEXT':\n    case 'SMARTFORMEXTNOLOGOS':\n      if (typeof window.FORM_TOKEN == 'undefined') {\n        document.cookie = 'payzen_force_redir=\"true\"; path=/; domain=' + location.host;\n        break;\n      }\n\n      e.stopPropagation();\n      block();\n      var useIdentifier = jQuery(\"#payzen_use_identifier\").length && jQuery(\"#payzen_use_identifier\").val() === \"true\";\n      var popin = jQuery(\".kr-smart-form-modal-button\").length > 0 || jQuery(\".kr-popin-button\").length > 0;\n\n      if (!useIdentifier && !popin && !hideButton && !hideSmart) {\n        return validateKR(KR);\n      } else {\n        submitForm(KR, popin, useIdentifier);\n        break;\n      }\n\n    default:\n      break;\n  }\n};\n\nvar submitForm = function submitForm(KR) {\n  var popin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var useIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {\n    newData = options.data;\n  });\n  var registerCard = jQuery('input[name=\"kr-do-register\"]').is(':checked');\n\n  if (savedData && newData === savedData) {\n    // Data in checkout page has not changed, no need to calculate token again.\n    submitKR(KR, popin);\n  } else {\n    savedData = newData;\n    jQuery.ajax({\n      method: 'POST',\n      url: payzen_data === null || payzen_data === void 0 ? void 0 : payzen_data.token_url,\n      data: {\n        'use_identifier': useIdentifier\n      },\n      success: function success(data) {\n        var parsed = JSON.parse(data);\n        KR.setFormConfig({\n          language: window.PAYZEN_LANGUAGE,\n          formToken: parsed.formToken\n        }).then(function (v) {\n          KR = v.KR;\n\n          if (registerCard) {\n            jQuery('input[name=\"kr-do-register\"]').attr('checked', 'checked');\n          }\n\n          return submitKR(KR, popin);\n        });\n      }\n    });\n    return true;\n  }\n};\n\nvar submitKR = function submitKR(KR, popin) {\n  if (hideButton) {\n    var element = jQuery('.kr-smart-button');\n\n    if (element.length > 0) {\n      smartbuttonMethod = element.attr('kr-payment-method');\n    } else {\n      element = jQuery('.kr-smart-form-modal-button');\n\n      if (element.length > 0) {\n        smartbuttonAll = true;\n      }\n    }\n  }\n\n  if (popin || smartbuttonAll) {\n    KR.openPopin();\n    unblock();\n  } else if (hideButton) {\n    KR.openSelectedPaymentMethod();\n    unblock();\n  } else if (smartbuttonMethod.length > 0) {\n    KR.openPaymentMethod(smartbuttonMethod);\n    unblock();\n  } else {\n    jQuery('#payzenstd_rest_processing').css('display', 'block');\n    jQuery('ul.payzenstd-view-top li.block').hide();\n    jQuery('ul.payzenstd-view-bottom').hide();\n    KR.submit();\n  }\n\n  return true;\n};\n\nvar block = function block() {\n  jQuery('form.wc-block-components-form wc-block-checkout__form').block();\n  jQuery(submitButton).prop(\"disabled\", true);\n};\n\nvar unblock = function unblock() {\n  jQuery('form.wc-block-components-form wc-block-checkout__form').unblock();\n  jQuery(submitButton).prop(\"disabled\", false);\n  jQuery('.wc-block-components-button__text').text(\"\").text(window.PAYZEN_BUTTON_TEXT);\n};\n\nvar validateKR = function validateKR(KR) {\n  KR.validateForm().then(function (v) {\n    submitForm(v.KR);\n  })[\"catch\"](function (v) {\n    // Display error message.\n    var result = v.result;\n    return result.doOnError();\n  });\n  return true;\n};\n\nvar first = true;\n\nvar initFields = function initFields() {\n  if (!first) {\n    displayFields();\n    jQuery(submitButton).on('click', onButtonClick);\n    jQuery('input[type=radio][name=radio-control-wc-payment-method-options]').change(function (e) {\n      if (this.value === 'payzenstd') {\n        displayFields();\n      }\n    });\n  }\n\n  first = false;\n};\n\njQuery(document).on('ready', initFields);\njQuery(window).on('load', initFields);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYmxvY2tzL3BheXplbnN0ZC5qcz83YjQxIl0sIm5hbWVzIjpbIlBBWU1FTlRfTUVUSE9EX05BTUUiLCJwYXl6ZW5fZGF0YSIsImdldFBheXplblNlcnZlckRhdGEiLCJzdWJtaXRCdXR0b24iLCJzbWFydGJ1dHRvbk1ldGhvZCIsInNtYXJ0YnV0dG9uQWxsIiwiaGlkZVNtYXJ0IiwiaGlkZV9zbWFydGJ1dHRvbiIsImhpZGVCdXR0b24iLCJzYXZlZERhdGEiLCJuZXdEYXRhIiwiQ29udGVudCIsInBheW1lbnRfZmllbGRzIiwiZmllbGRzIiwiX19odG1sIiwiZGVjb2RlRW50aXRpZXMiLCJkZXNjcmlwdGlvbiIsIkxhYmVsIiwic3R5bGVzIiwiZGl2V2lkdGgiLCJ3aWR0aCIsImltZ0Zsb2F0IiwidGl0bGUiLCJsb2dvX3VybCIsInJlZ2lzdGVyUGF5bWVudE1ldGhvZCIsIm5hbWUiLCJsYWJlbCIsImFyaWFMYWJlbCIsImNhbk1ha2VQYXltZW50IiwiY29udGVudCIsImVkaXQiLCJzdXBwb3J0cyIsImZlYXR1cmVzIiwiZGlzcGxheUZpZWxkcyIsIndpbmRvdyIsIkZPUk1fVE9LRU4iLCJJREVOVElGSUVSX0ZPUk1fVE9LRU4iLCJQQVlaRU5fSElERV9TSU5HTEVfQlVUVE9OIiwicGF5bWVudF9tb2RlIiwidmFycyIsIlBBWVpFTl9CVVRUT05fVEVYVCIsImpRdWVyeSIsInRleHQiLCJldmFsIiwiS1IiLCJvbkZvcm1SZWFkeSIsImVsZW1lbnQiLCJsZW5ndGgiLCJhdHRyIiwiaGlkZSIsInBheXplblVwZGF0ZVBheW1lbnRCbG9jayIsIm9uQnV0dG9uQ2xpY2siLCJlIiwiaXMiLCJodG1sIiwiZG9jdW1lbnQiLCJjb29raWUiLCJsb2NhdGlvbiIsImhvc3QiLCJ1c2VfaWRlbnRpZmllciIsInZhbCIsInBheXplbnN0ZF9nZXRfY2FyZCIsIklGUkFNRV9MSU5LIiwibGluayIsIklGUkFNRV9TUkMiLCJzcmMiLCJwYXl6ZW5zdGRfc2hvd19pZnJhbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJibG9jayIsInVzZUlkZW50aWZpZXIiLCJwb3BpbiIsInZhbGlkYXRlS1IiLCJzdWJtaXRGb3JtIiwiYWpheFByZWZpbHRlciIsIm9wdGlvbnMiLCJvcmlnaW5hbE9wdGlvbnMiLCJqcVhIUiIsImRhdGEiLCJyZWdpc3RlckNhcmQiLCJzdWJtaXRLUiIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJ0b2tlbl91cmwiLCJzdWNjZXNzIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwic2V0Rm9ybUNvbmZpZyIsImxhbmd1YWdlIiwiUEFZWkVOX0xBTkdVQUdFIiwiZm9ybVRva2VuIiwidGhlbiIsInYiLCJvcGVuUG9waW4iLCJ1bmJsb2NrIiwib3BlblNlbGVjdGVkUGF5bWVudE1ldGhvZCIsIm9wZW5QYXltZW50TWV0aG9kIiwiY3NzIiwic3VibWl0IiwicHJvcCIsInZhbGlkYXRlRm9ybSIsInJlc3VsdCIsImRvT25FcnJvciIsImZpcnN0IiwiaW5pdEZpZWxkcyIsIm9uIiwiY2hhbmdlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxXQUE1QjtBQUNBLElBQUlDLFdBQVcsR0FBR0MsaUZBQW1CLENBQUNGLG1CQUFELENBQXJDO0FBRUEsSUFBSUcsWUFBWSxHQUFHLGtEQUFuQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLEtBQXJCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLENBQUFMLFdBQVcsU0FBWCxJQUFBQSxXQUFXLFdBQVgsWUFBQUEsV0FBVyxDQUFFTSxnQkFBYixLQUFrQyxDQUFBTixXQUFXLFNBQVgsSUFBQUEsV0FBVyxXQUFYLFlBQUFBLFdBQVcsQ0FBRU0sZ0JBQWIsTUFB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WUEsSUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QixNQUFJLENBQUVELEtBQU4sRUFBYTtBQUNUdkUsaUJBQWE7QUFFYlEsVUFBTSxDQUFDdEMsWUFBRCxDQUFOLENBQXFCdUcsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUN2RCxhQUFqQztBQUNBVixVQUFNLENBQUMsaUVBQUQsQ0FBTixDQUEwRWtFLE1BQTFFLENBQWlGLFVBQVN2RCxDQUFULEVBQVk7QUFDekYsVUFBSSxLQUFLd0QsS0FBTCxLQUFlLFdBQW5CLEVBQWdDO0FBQzVCM0UscUJBQWE7QUFDaEI7QUFDSixLQUpEO0FBS0g7O0FBRUR1RSxPQUFLLEdBQUcsS0FBUjtBQUNILENBYkQ7O0FBZUEvRCxNQUFNLENBQUNjLFFBQUQsQ0FBTixDQUFpQm1ELEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCRCxVQUE3QjtBQUNBaEUsTUFBTSxDQUFDUCxNQUFELENBQU4sQ0FBZXdFLEVBQWYsQ0FBa0IsTUFBbEIsRUFBMEJELFVBQTFCIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCDCqSBMeXJhIE5ldHdvcmsgYW5kIGNvbnRyaWJ1dG9ycy5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFBheVplbiBwbHVnaW4gZm9yIFdvb0NvbW1lcmNlLiBTZWUgQ09QWUlORy5tZCBmb3IgbGljZW5zZSBkZXRhaWxzLlxuICpcbiAqIEBhdXRob3IgICAgTHlyYSBOZXR3b3JrIChodHRwczovL3d3dy5seXJhLmNvbS8pXG4gKiBAYXV0aG9yICAgIEdlb2ZmcmV5IENyb2Z0ZSwgQWxzYWNyw6lhdGlvbnMgKGh0dHBzOi8vd3d3LmFsc2FjcmVhdGlvbnMuZnIvKVxuICogQGNvcHlyaWdodCBMeXJhIE5ldHdvcmsgYW5kIGNvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvb2xkLWxpY2Vuc2VzL2dwbC0yLjAuaHRtbCBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSAoR1BMIHYyKVxuICovXG5cbi8qKlxuICogRXh0ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5pbXBvcnQgeyByZWdpc3RlclBheW1lbnRNZXRob2QgfSBmcm9tICdAd29vY29tbWVyY2UvYmxvY2tzLXJlZ2lzdHJ5JztcbmltcG9ydCB7IGRlY29kZUVudGl0aWVzIH0gZnJvbSAnQHdvcmRwcmVzcy9odG1sLWVudGl0aWVzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cbmltcG9ydCB7IGdldFBheXplblNlcnZlckRhdGEgfSBmcm9tICcuL3BheXplbi11dGlscyc7XG5cbmNvbnN0IFBBWU1FTlRfTUVUSE9EX05BTUUgPSAncGF5emVuc3RkJztcbnZhciBwYXl6ZW5fZGF0YSA9IGdldFBheXplblNlcnZlckRhdGEoUEFZTUVOVF9NRVRIT0RfTkFNRSk7XG5cbnZhciBzdWJtaXRCdXR0b24gPSAnLndjLWJsb2NrLWNvbXBvbmVudHMtY2hlY2tvdXQtcGxhY2Utb3JkZXItYnV0dG9uJztcbnZhciBzbWFydGJ1dHRvbk1ldGhvZCA9ICcnO1xudmFyIHNtYXJ0YnV0dG9uQWxsID0gZmFsc2U7XG52YXIgaGlkZVNtYXJ0ID0gcGF5emVuX2RhdGE/LmhpZGVfc21hcnRidXR0b24gJiYgKHBheXplbl9kYXRhPy5oaWRlX3NtYXJ0YnV0dG9uID09PSAndHJ1ZScpO1xudmFyIGhpZGVCdXR0b24gPSBmYWxzZTtcblxudmFyIHNhdmVkRGF0YSA9IGZhbHNlO1xudmFyIG5ld0RhdGEgPSBudWxsO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICAgIGlmIChwYXl6ZW5fZGF0YT8ucGF5bWVudF9maWVsZHMpIHtcbiAgICAgICAgdmFyIGZpZWxkcyA9IDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBheXplbl9kYXRhPy5wYXltZW50X2ZpZWxkc319IC8+O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsgZmllbGRzIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVFbnRpdGllcyhwYXl6ZW5fZGF0YT8uZGVzY3JpcHRpb24pO1xuICAgIH1cbn07XG5cbnZhciBMYWJlbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIGRpdldpZHRoOiB7XG4gICAgICAgICAgICB3aWR0aDogJzk1JSdcbiAgICAgICAgfSxcbiAgICAgICAgaW1nRmxvYXQ6IHtcbiAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzLmRpdldpZHRoIH0+XG4gICAgICAgICAgICA8c3Bhbj57IHBheXplbl9kYXRhPy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9eyBzdHlsZXMuaW1nRmxvYXQgfVxuICAgICAgICAgICAgICAgIHNyYz17IHBheXplbl9kYXRhPy5sb2dvX3VybCB9XG4gICAgICAgICAgICAgICAgYWx0PXsgcGF5emVuX2RhdGE/LnRpdGxlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5yZWdpc3RlclBheW1lbnRNZXRob2Qoe1xuICAgIG5hbWU6IFBBWU1FTlRfTUVUSE9EX05BTUUsXG4gICAgbGFiZWw6IDxMYWJlbCAvPixcbiAgICBhcmlhTGFiZWw6ICdQYXl6ZW4gcGF5bWVudCBtZXRob2QnLFxuICAgIGNhbk1ha2VQYXltZW50OiAoKSA9PiB0cnVlLFxuICAgIGNvbnRlbnQ6IDxDb250ZW50IC8+LFxuICAgIGVkaXQ6IDxDb250ZW50IC8+LFxuICAgIHN1cHBvcnRzOiB7XG4gICAgICAgIGZlYXR1cmVzOiBwYXl6ZW5fZGF0YT8uc3VwcG9ydHMgPz8gW10sXG4gICAgfSxcbn0pO1xuXG52YXIgZGlzcGxheUZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkZWxldGUod2luZG93LkZPUk1fVE9LRU4pO1xuICAgIGRlbGV0ZSh3aW5kb3cuSURFTlRJRklFUl9GT1JNX1RPS0VOKTtcbiAgICBkZWxldGUod2luZG93LlBBWVpFTl9ISURFX1NJTkdMRV9CVVRUT04pO1xuXG4gICAgc3dpdGNoIChwYXl6ZW5fZGF0YT8ucGF5bWVudF9tb2RlKSB7XG4gICAgICAgIGNhc2UgJ1JFU1QnOlxuICAgICAgICBjYXNlICdTTUFSVEZPUk0nOlxuICAgICAgICBjYXNlICdTTUFSVEZPUk1FWFQnOlxuICAgICAgICBjYXNlICdTTUFSVEZPUk1FWFROT0xPR09TJzpcbiAgICAgICAgICAgIGlmIChwYXl6ZW5fZGF0YT8udmFycykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5QQVlaRU5fQlVUVE9OX1RFWFQgPSBqUXVlcnkoc3VibWl0QnV0dG9uKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgZXZhbChwYXl6ZW5fZGF0YT8udmFycyk7XG5cbiAgICAgICAgICAgICAgICBoaWRlQnV0dG9uID0gKHdpbmRvdy5QQVlaRU5fSElERV9TSU5HTEVfQlVUVE9OID09IHRydWUpO1xuXG4gICAgICAgICAgICAgICAgS1Iub25Gb3JtUmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZVNtYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGpRdWVyeShcIi5rci1zbWFydC1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hcnRidXR0b25NZXRob2QgPSBlbGVtZW50LmF0dHIoXCJrci1wYXltZW50LW1ldGhvZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGpRdWVyeShcIi5rci1zbWFydC1mb3JtLW1vZGFsLWJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYXJ0YnV0dG9uTWV0aG9kID0gXCJhbGxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrOyBcblxuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBheXplblVwZGF0ZVBheW1lbnRCbG9jayh0cnVlKTtcbn07XG5cbnZhciBvbkJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoISBqUXVlcnkoXCIjcmFkaW8tY29udHJvbC13Yy1wYXltZW50LW1ldGhvZC1vcHRpb25zLXBheXplbnN0ZFwiKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEluIGNhc2Ugb2YgZm9ybSB2YWxpZGF0aW9uIGVycm9yLCBsZXQgV29vQ29tbWVyY2UgZGVhbCB3aXRoIGl0LlxuICAgIGlmIChqUXVlcnkoJ2Rpdi53Yy1ibG9jay1jb21wb25lbnRzLXZhbGlkYXRpb24tZXJyb3InKVswXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBqUXVlcnkoJy5rci1mb3JtLWVycm9yJykuaHRtbCgnJyk7XG4gICAgd2luZG93LlBBWVpFTl9CVVRUT05fVEVYVCA9IGpRdWVyeShzdWJtaXRCdXR0b24pLnRleHQoKTtcblxuICAgIGRvY3VtZW50LmNvb2tpZSA9ICdwYXl6ZW5fZm9yY2VfcmVkaXI9OyBNYXgtQWdlPTA7IHBhdGg9LzsgZG9tYWluPScgKyBsb2NhdGlvbi5ob3N0O1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICdwYXl6ZW5fdXNlX2lkZW50aWZpZXI9OyBNYXgtQWdlPTA7IHBhdGg9LzsgZG9tYWluPScgKyBsb2NhdGlvbi5ob3N0O1xuXG4gICAgaWYgKGpRdWVyeShcIiNwYXl6ZW5fdXNlX2lkZW50aWZpZXJcIikpIHtcbiAgICAgICAgbGV0IHVzZV9pZGVudGlmaWVyID0galF1ZXJ5KFwiI3BheXplbl91c2VfaWRlbnRpZmllclwiKS52YWwoKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ3BheXplbl91c2VfaWRlbnRpZmllcj0nICsgdXNlX2lkZW50aWZpZXIgKyAnOyBwYXRoPS8nO1xuICAgIH1cblxuICAgIHN3aXRjaCAocGF5emVuX2RhdGE/LnBheW1lbnRfbW9kZSkge1xuICAgICAgICBjYXNlICdNRVJDSEFOVCc6XG4gICAgICAgICAgICBwYXl6ZW5zdGRfZ2V0X2NhcmQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgICAgICAgd2luZG93LklGUkFNRV9MSU5LID0gcGF5emVuX2RhdGE/Lmxpbms7XG4gICAgICAgICAgICAgd2luZG93LklGUkFNRV9TUkMgPSBwYXl6ZW5fZGF0YT8uc3JjO1xuICAgICAgICAgICAgIHBheXplbnN0ZF9zaG93X2lmcmFtZSgpO1xuXG4gICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUkVTVCc6XG4gICAgICAgIGNhc2UgJ1NNQVJURk9STSc6XG4gICAgICAgIGNhc2UgJ1NNQVJURk9STUVYVCc6XG4gICAgICAgIGNhc2UgJ1NNQVJURk9STUVYVE5PTE9HT1MnOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuRk9STV9UT0tFTiA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdwYXl6ZW5fZm9yY2VfcmVkaXI9XCJ0cnVlXCI7IHBhdGg9LzsgZG9tYWluPScgKyBsb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgYmxvY2soKTtcblxuICAgICAgICAgICAgdmFyIHVzZUlkZW50aWZpZXIgPSBqUXVlcnkoXCIjcGF5emVuX3VzZV9pZGVudGlmaWVyXCIpLmxlbmd0aCAmJiBqUXVlcnkoXCIjcGF5emVuX3VzZV9pZGVudGlmaWVyXCIpLnZhbCgpID09PSBcInRydWVcIjtcbiAgICAgICAgICAgIHZhciBwb3BpbiA9IChqUXVlcnkoXCIua3Itc21hcnQtZm9ybS1tb2RhbC1idXR0b25cIikubGVuZ3RoID4gMCkgfHwgKGpRdWVyeShcIi5rci1wb3Bpbi1idXR0b25cIikubGVuZ3RoID4gMCk7XG5cbiAgICAgICAgICAgIGlmICghIHVzZUlkZW50aWZpZXIgJiYgISBwb3BpbiAmJiAhIGhpZGVCdXR0b24gJiYgISBoaWRlU21hcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVLUihLUik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oS1IsIHBvcGluLCB1c2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbnZhciBzdWJtaXRGb3JtID0gZnVuY3Rpb24gKEtSLCBwb3BpbiA9IGZhbHNlLCB1c2VJZGVudGlmaWVyID0gZmFsc2UpIHtcbiAgICBqUXVlcnkuYWpheFByZWZpbHRlcihmdW5jdGlvbihvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSKSB7XG4gICAgICAgIG5ld0RhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgfSk7XG5cbiAgICB2YXIgcmVnaXN0ZXJDYXJkID0galF1ZXJ5KCdpbnB1dFtuYW1lPVwia3ItZG8tcmVnaXN0ZXJcIl0nKS5pcygnOmNoZWNrZWQnKTtcblxuICAgIGlmIChzYXZlZERhdGEgJiYgKG5ld0RhdGEgPT09IHNhdmVkRGF0YSkpIHtcbiAgICAgICAgLy8gRGF0YSBpbiBjaGVja291dCBwYWdlIGhhcyBub3QgY2hhbmdlZCwgbm8gbmVlZCB0byBjYWxjdWxhdGUgdG9rZW4gYWdhaW4uXG4gICAgICAgc3VibWl0S1IoS1IsIHBvcGluKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzYXZlZERhdGEgPSBuZXdEYXRhO1xuICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogcGF5emVuX2RhdGE/LnRva2VuX3VybCxcbiAgICAgICAgICAgIGRhdGE6IHsgJ3VzZV9pZGVudGlmaWVyJzogdXNlSWRlbnRpZmllciB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIEtSLnNldEZvcm1Db25maWcoe1xuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogd2luZG93LlBBWVpFTl9MQU5HVUFHRSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybVRva2VuOiBwYXJzZWQuZm9ybVRva2VuXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgIEtSID0gdi5LUjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2lzdGVyQ2FyZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCdpbnB1dFtuYW1lPVwia3ItZG8tcmVnaXN0ZXJcIl0nKS5hdHRyKCdjaGVja2VkJywnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1Ym1pdEtSKEtSLCBwb3Bpbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cbnZhciBzdWJtaXRLUiA9IGZ1bmN0aW9uIChLUiwgcG9waW4pIHtcbiAgICBpZiAoaGlkZUJ1dHRvbikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGpRdWVyeSgnLmtyLXNtYXJ0LWJ1dHRvbicpO1xuXG4gICAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICBzbWFydGJ1dHRvbk1ldGhvZCA9IGVsZW1lbnQuYXR0cigna3ItcGF5bWVudC1tZXRob2QnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBqUXVlcnkoJy5rci1zbWFydC1mb3JtLW1vZGFsLWJ1dHRvbicpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc21hcnRidXR0b25BbGwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgIH1cblxuICAgICBpZiAocG9waW4gfHwgc21hcnRidXR0b25BbGwpIHtcbiAgICAgICAgIEtSLm9wZW5Qb3BpbigpO1xuICAgICAgICAgdW5ibG9jaygpO1xuICAgICB9IGVsc2UgaWYgKGhpZGVCdXR0b24pIHtcbiAgICAgICAgICBLUi5vcGVuU2VsZWN0ZWRQYXltZW50TWV0aG9kKCk7XG4gICAgICAgICAgdW5ibG9jaygpO1xuICAgICB9IGVsc2UgaWYgKHNtYXJ0YnV0dG9uTWV0aG9kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgIEtSLm9wZW5QYXltZW50TWV0aG9kKHNtYXJ0YnV0dG9uTWV0aG9kKTtcbiAgICAgICAgIHVuYmxvY2soKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgIGpRdWVyeSgnI3BheXplbnN0ZF9yZXN0X3Byb2Nlc3NpbmcnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgIGpRdWVyeSgndWwucGF5emVuc3RkLXZpZXctdG9wIGxpLmJsb2NrJykuaGlkZSgpO1xuICAgICAgICAgalF1ZXJ5KCd1bC5wYXl6ZW5zdGQtdmlldy1ib3R0b20nKS5oaWRlKCk7XG5cbiAgICAgICAgIEtSLnN1Ym1pdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBibG9jayA9IGZ1bmN0aW9uKCkge1xuICAgIGpRdWVyeSgnZm9ybS53Yy1ibG9jay1jb21wb25lbnRzLWZvcm0gd2MtYmxvY2stY2hlY2tvdXRfX2Zvcm0nKS5ibG9jaygpO1xuICAgIGpRdWVyeShzdWJtaXRCdXR0b24pLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbn07XG5cbnZhciB1bmJsb2NrID0gZnVuY3Rpb24oKSB7XG4gICAgalF1ZXJ5KCdmb3JtLndjLWJsb2NrLWNvbXBvbmVudHMtZm9ybSB3Yy1ibG9jay1jaGVja291dF9fZm9ybScpLnVuYmxvY2soKTtcbiAgICBqUXVlcnkoc3VibWl0QnV0dG9uKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgIGpRdWVyeSgnLndjLWJsb2NrLWNvbXBvbmVudHMtYnV0dG9uX190ZXh0JykudGV4dChcIlwiKS50ZXh0KHdpbmRvdy5QQVlaRU5fQlVUVE9OX1RFWFQpO1xufTtcblxudmFyIHZhbGlkYXRlS1IgPSBmdW5jdGlvbihLUikge1xuICAgIEtSLnZhbGlkYXRlRm9ybSgpLnRoZW4oZnVuY3Rpb24odikge1xuICAgICAgICBzdWJtaXRGb3JtKHYuS1IpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgLy8gRGlzcGxheSBlcnJvciBtZXNzYWdlLlxuICAgICAgICB2YXIgcmVzdWx0ID0gdi5yZXN1bHQ7XG4gICAgICAgIHJldHVybiByZXN1bHQuZG9PbkVycm9yKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBmaXJzdCA9IHRydWU7XG52YXIgaW5pdEZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghIGZpcnN0KSB7XG4gICAgICAgIGRpc3BsYXlGaWVsZHMoKTtcblxuICAgICAgICBqUXVlcnkoc3VibWl0QnV0dG9uKS5vbignY2xpY2snLCBvbkJ1dHRvbkNsaWNrKTtcbiAgICAgICAgalF1ZXJ5KCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPXJhZGlvLWNvbnRyb2wtd2MtcGF5bWVudC1tZXRob2Qtb3B0aW9uc10nKS5jaGFuZ2UoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICdwYXl6ZW5zdGQnKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXJzdCA9IGZhbHNlO1xufTtcblxualF1ZXJ5KGRvY3VtZW50KS5vbigncmVhZHknLCBpbml0RmllbGRzKTtcbmpRdWVyeSh3aW5kb3cpLm9uKCdsb2FkJywgaW5pdEZpZWxkcyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n")}]);