!function(Q){var F={};function I(B){if(F[B])return F[B].exports;var U=F[B]={i:B,l:!1,exports:{}};return Q[B].call(U.exports,U,U.exports,I),U.l=!0,U.exports}I.m=Q,I.c=F,I.d=function(Q,F,B){I.o(Q,F)||Object.defineProperty(Q,F,{enumerable:!0,get:B})},I.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},I.t=function(Q,F){if(1&F&&(Q=I(Q)),8&F)return Q;if(4&F&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var B=Object.create(null);if(I.r(B),Object.defineProperty(B,"default",{enumerable:!0,value:Q}),2&F&&"string"!=typeof Q)for(var U in Q)I.d(B,U,function(F){return Q[F]}.bind(null,U));return B},I.n=function(Q){var F=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return I.d(F,"a",F),F},I.o=function(Q,F){return Object.prototype.hasOwnProperty.call(Q,F)},I.p="",I(I.s=4)}([function(module,exports){eval('(function() { module.exports = window["wc"]["wcBlocksRegistry"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid2NcIixcIndjQmxvY2tzUmVnaXN0cnlcIl0/MjUwNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1EQUFtRCxFQUFFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid2NcIl1bXCJ3Y0Jsb2Nrc1JlZ2lzdHJ5XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')},function(module,exports){eval('(function() { module.exports = window["wp"]["htmlEntities"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid3BcIixcImh0bWxFbnRpdGllc1wiXT85MDIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsK0NBQStDLEVBQUUiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImh0bWxFbnRpdGllc1wiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLyraServerData; });\n/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);\n/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Copyright © Lyra Network and contributors.\n * This file is part of Lyra Collect plugin for WooCommerce. See COPYING.md for license details.\n *\n * @author    Lyra Network (https://www.lyra.com/)\n * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)\n * @copyright Lyra Network and contributors\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)\n */\n\n/**\n * External dependencies.\n */\n\n/**\n * Lyra data comes form the server passed on a global object.\n */\n\nvar getLyraServerData = function getLyraServerData(name) {\n  var lyraServerData = Object(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_0__["getSetting"])(name + \'_data\', null);\n\n  if (!lyraServerData) {\n    return;\n  }\n\n  return lyraServerData;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYmxvY2tzL2x5cmEtdXRpbHMuanM/ZGU4NCJdLCJuYW1lcyI6WyJnZXRMeXJhU2VydmVyRGF0YSIsIm5hbWUiLCJseXJhU2VydmVyRGF0YSIsImdldFNldHRpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBVTtBQUN2QyxNQUFNQyxjQUFjLEdBQUdDLHdFQUFVLENBQUVGLElBQUksR0FBRyxPQUFULEVBQWtCLElBQWxCLENBQWpDOztBQUVBLE1BQUksQ0FBRUMsY0FBTixFQUFzQjtBQUNsQjtBQUNIOztBQUVELFNBQU9BLGNBQVA7QUFDSCxDQVJNIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCDCqSBMeXJhIE5ldHdvcmsgYW5kIGNvbnRyaWJ1dG9ycy5cbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEx5cmEgQ29sbGVjdCBwbHVnaW4gZm9yIFdvb0NvbW1lcmNlLiBTZWUgQ09QWUlORy5tZCBmb3IgbGljZW5zZSBkZXRhaWxzLlxuICpcbiAqIEBhdXRob3IgICAgTHlyYSBOZXR3b3JrIChodHRwczovL3d3dy5seXJhLmNvbS8pXG4gKiBAYXV0aG9yICAgIEdlb2ZmcmV5IENyb2Z0ZSwgQWxzYWNyw6lhdGlvbnMgKGh0dHBzOi8vd3d3LmFsc2FjcmVhdGlvbnMuZnIvKVxuICogQGNvcHlyaWdodCBMeXJhIE5ldHdvcmsgYW5kIGNvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvb2xkLWxpY2Vuc2VzL2dwbC0yLjAuaHRtbCBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSAoR1BMIHYyKVxuICovXG5cbi8qKlxuICogRXh0ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5pbXBvcnQgeyBnZXRTZXR0aW5nIH0gZnJvbSAnQHdvb2NvbW1lcmNlL3NldHRpbmdzJztcblxuLyoqXG4gKiBMeXJhIGRhdGEgY29tZXMgZm9ybSB0aGUgc2VydmVyIHBhc3NlZCBvbiBhIGdsb2JhbCBvYmplY3QuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGdldEx5cmFTZXJ2ZXJEYXRhID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBseXJhU2VydmVyRGF0YSA9IGdldFNldHRpbmcoIG5hbWUgKyAnX2RhdGEnLCBudWxsICk7XG5cbiAgICBpZiAoISBseXJhU2VydmVyRGF0YSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGx5cmFTZXJ2ZXJEYXRhO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n')},function(module,exports){eval('(function() { module.exports = window["wc"]["wcSettings"]; }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgW1wid2NcIixcIndjU2V0dGluZ3NcIl0/YzFiMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLDZDQUE2QyxFQUFFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid2NcIl1bXCJ3Y1NldHRpbmdzXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lyra_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);\nvar _lyra_data$supports;\n\n/**\n * Copyright © Lyra Network and contributors.\n * This file is part of Lyra Collect plugin for WooCommerce. See COPYING.md for license details.\n *\n * @author    Lyra Network (https://www.lyra.com/)\n * @author    Geoffrey Crofte, Alsacréations (https://www.alsacreations.fr/)\n * @copyright Lyra Network and contributors\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License (GPL v2)\n */\n\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\nvar PAYMENT_METHOD_NAME = 'lyrastd';\nvar lyra_data = Object(_lyra_utils__WEBPACK_IMPORTED_MODULE_2__[/* getLyraServerData */ \"a\"])(PAYMENT_METHOD_NAME);\nvar submitButton = '.wc-block-components-checkout-place-order-button';\nvar smartbuttonMethod = '';\nvar smartbuttonAll = false;\nvar hideSmart = (lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.hide_smartbutton) && (lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.hide_smartbutton) === 'true';\nvar hideButton = false;\nvar savedData = false;\nvar newData = null;\n\nvar Content = function Content() {\n  if (lyra_data !== null && lyra_data !== void 0 && lyra_data.payment_fields) {\n    var fields = /*#__PURE__*/React.createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.payment_fields\n      }\n    });\n    return /*#__PURE__*/React.createElement(\"div\", null, fields);\n  } else {\n    return Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__[\"decodeEntities\"])(lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.description);\n  }\n};\n\nvar Label = function Label() {\n  var styles = {\n    divWidth: {\n      width: '95%'\n    },\n    imgFloat: {\n      \"float\": 'right'\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    style: styles.divWidth\n  }, /*#__PURE__*/React.createElement(\"span\", null, lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.title), /*#__PURE__*/React.createElement(\"img\", {\n    style: styles.imgFloat,\n    src: lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.logo_url,\n    alt: lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.title\n  }));\n};\n\nObject(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__[\"registerPaymentMethod\"])({\n  name: PAYMENT_METHOD_NAME,\n  label: /*#__PURE__*/React.createElement(Label, null),\n  ariaLabel: 'Lyra payment method',\n  canMakePayment: function canMakePayment() {\n    return true;\n  },\n  content: /*#__PURE__*/React.createElement(Content, null),\n  edit: /*#__PURE__*/React.createElement(Content, null),\n  supports: {\n    features: (_lyra_data$supports = lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.supports) !== null && _lyra_data$supports !== void 0 ? _lyra_data$supports : []\n  }\n});\n\nvar displayFields = function displayFields() {\n  delete window.FORM_TOKEN;\n  delete window.IDENTIFIER_FORM_TOKEN;\n  delete window.LYRA_HIDE_SINGLE_BUTTON;\n\n  switch (lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.payment_mode) {\n    case 'REST':\n    case 'SMARTFORM':\n    case 'SMARTFORMEXT':\n    case 'SMARTFORMEXTNOLOGOS':\n      if (lyra_data !== null && lyra_data !== void 0 && lyra_data.vars) {\n        window.LYRA_BUTTON_TEXT = jQuery(submitButton).text();\n        eval(lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.vars);\n        hideButton = window.LYRA_HIDE_SINGLE_BUTTON == true;\n        KR.onFormReady(function () {\n          if (hideSmart) {\n            var element = jQuery(\".kr-smart-button\");\n\n            if (element.length > 0) {\n              smartbuttonMethod = element.attr(\"kr-payment-method\");\n              element.hide();\n            } else {\n              element = jQuery(\".kr-smart-form-modal-button\");\n\n              if (element.length > 0) {\n                smartbuttonMethod = \"all\";\n                element.hide();\n              }\n            }\n          }\n        });\n      }\n\n      break;\n\n    default:\n      break;\n  }\n\n  lyraUpdatePaymentBlock(true);\n};\n\nvar onButtonClick = function onButtonClick(e) {\n  if (!jQuery(\"#radio-control-wc-payment-method-options-lyrastd\").is(\":checked\")) {\n    return true;\n  } // In case of form validation error, let WooCommerce deal with it.\n\n\n  if (jQuery('div.wc-block-components-validation-error')[0]) {\n    return true;\n  }\n\n  jQuery('.kr-form-error').html('');\n  window.LYRA_BUTTON_TEXT = jQuery(submitButton).text();\n  document.cookie = 'lyra_force_redir=; Max-Age=0; path=/; domain=' + location.host;\n  document.cookie = 'lyra_use_identifier=; Max-Age=0; path=/; domain=' + location.host;\n\n  if (jQuery(\"#lyra_use_identifier\")) {\n    var use_identifier = jQuery(\"#lyra_use_identifier\").val();\n    document.cookie = 'lyra_use_identifier=' + use_identifier + '; path=/';\n  }\n\n  switch (lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.payment_mode) {\n    case 'MERCHANT':\n      lyrastd_get_card();\n      break;\n\n    case 'IFRAME':\n      window.IFRAME_LINK = lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.link;\n      window.IFRAME_SRC = lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.src;\n      lyrastd_show_iframe();\n      break;\n\n    case 'REST':\n    case 'SMARTFORM':\n    case 'SMARTFORMEXT':\n    case 'SMARTFORMEXTNOLOGOS':\n      if (typeof window.FORM_TOKEN == 'undefined') {\n        document.cookie = 'lyra_force_redir=\"true\"; path=/; domain=' + location.host;\n        break;\n      }\n\n      e.stopPropagation();\n      block();\n      var useIdentifier = jQuery(\"#lyra_use_identifier\").length && jQuery(\"#lyra_use_identifier\").val() === \"true\";\n      var popin = jQuery(\".kr-smart-form-modal-button\").length > 0 || jQuery(\".kr-popin-button\").length > 0;\n\n      if (!useIdentifier && !popin && !hideButton && !hideSmart) {\n        return validateKR(KR);\n      } else {\n        submitForm(KR, popin, useIdentifier);\n        break;\n      }\n\n    default:\n      break;\n  }\n};\n\nvar submitForm = function submitForm(KR) {\n  var popin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var useIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {\n    newData = options.data;\n  });\n  var registerCard = jQuery('input[name=\"kr-do-register\"]').is(':checked');\n\n  if (savedData && newData === savedData) {\n    // Data in checkout page has not changed, no need to calculate token again.\n    submitKR(KR, popin);\n  } else {\n    savedData = newData;\n    jQuery.ajax({\n      method: 'POST',\n      url: lyra_data === null || lyra_data === void 0 ? void 0 : lyra_data.token_url,\n      data: {\n        'use_identifier': useIdentifier\n      },\n      success: function success(data) {\n        var parsed = JSON.parse(data);\n        KR.setFormConfig({\n          language: window.LYRA_LANGUAGE,\n          formToken: parsed.formToken\n        }).then(function (v) {\n          KR = v.KR;\n\n          if (registerCard) {\n            jQuery('input[name=\"kr-do-register\"]').attr('checked', 'checked');\n          }\n\n          return submitKR(KR, popin);\n        });\n      }\n    });\n    return true;\n  }\n};\n\nvar submitKR = function submitKR(KR, popin) {\n  if (hideButton) {\n    var element = jQuery('.kr-smart-button');\n\n    if (element.length > 0) {\n      smartbuttonMethod = element.attr('kr-payment-method');\n    } else {\n      element = jQuery('.kr-smart-form-modal-button');\n\n      if (element.length > 0) {\n        smartbuttonAll = true;\n      }\n    }\n  }\n\n  if (popin || smartbuttonAll) {\n    KR.openPopin();\n    unblock();\n  } else if (hideButton) {\n    KR.openSelectedPaymentMethod();\n    unblock();\n  } else if (smartbuttonMethod.length > 0) {\n    KR.openPaymentMethod(smartbuttonMethod);\n    unblock();\n  } else {\n    jQuery('#lyrastd_rest_processing').css('display', 'block');\n    jQuery('ul.lyrastd-view-top li.block').hide();\n    jQuery('ul.lyrastd-view-bottom').hide();\n    KR.submit();\n  }\n\n  return true;\n};\n\nvar block = function block() {\n  jQuery('form.wc-block-components-form wc-block-checkout__form').block();\n  jQuery(submitButton).prop(\"disabled\", true);\n};\n\nvar unblock = function unblock() {\n  jQuery('form.wc-block-components-form wc-block-checkout__form').unblock();\n  jQuery(submitButton).prop(\"disabled\", false);\n  jQuery('.wc-block-components-button__text').text(\"\").text(window.LYRA_BUTTON_TEXT);\n};\n\nvar validateKR = function validateKR(KR) {\n  KR.validateForm().then(function (v) {\n    submitForm(v.KR);\n  })[\"catch\"](function (v) {\n    // Display error message.\n    var result = v.result;\n    return result.doOnError();\n  });\n  return true;\n};\n\nvar first = true;\n\nvar initFields = function initFields() {\n  if (!first) {\n    displayFields();\n    jQuery(submitButton).on('click', onButtonClick);\n    jQuery('input[type=radio][name=radio-control-wc-payment-method-options]').change(function (e) {\n      if (this.value === 'lyrastd') {\n        displayFields();\n      }\n    });\n  }\n\n  first = false;\n};\n\njQuery(document).on('ready', initFields);\njQuery(window).on('load', initFields);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYmxvY2tzL2x5cmFzdGQuanM/YWNlYSJdLCJuYW1lcyI6WyJQQVlNRU5UX01FVEhPRF9OQU1FIiwibHlyYV9kYXRhIiwiZ2V0THlyYVNlcnZlckRhdGEiLCJzdWJtaXRCdXR0b24iLCJzbWFydGJ1dHRvbk1ldGhvZCIsInNtYXJ0YnV0dG9uQWxsIiwiaGlkZVNtYXJ0IiwiaGlkZV9zbWFydGJ1dHRvbiIsImhpZGVCdXR0b24iLCJzYXZlZERhdGEiLCJuZXdEYXRhIiwiQ29udGVudCIsInBheW1lbnRfZmllbGRzIiwiZmllbGRzIiwiX19odG1sIiwiZGVjb2RlRW50aXRpZXMiLCJkZXNjcmlwdGlvbiIsIkxhYmVsIiwic3R5bGVzIiwiZGl2V2lkdGgiLCJ3aWR0aCIsImltZ0Zsb2F0IiwidGl0bGUiLCJsb2dvX3VybCIsInJlZ2lzdGVyUGF5bWVudE1ldGhvZCIsIm5hbWUiLCJsYWJlbCIsImFyaWFMYWJlbCIsImNhbk1ha2VQYXltZW50IiwiY29udGVudCIsImVkaXQiLCJzdXBwb3J0cyIsImZlYXR1cmVzIiwiZGlzcGxheUZpZWxkcyIsIndpbmRvdyIsIkZPUk1fVE9LRU4iLCJJREVOVElGSUVSX0ZPUk1fVE9LRU4iLCJMWVJBX0hJREVfU0lOR0xFX0JVVFRPTiIsInBheW1lbnRfbW9kZSIsInZhcnMiLCJMWVJBX0JVVFRPTl9URVhUIiwialF1ZXJ5IiwidGV4dCIsImV2YWwiLCJLUiIsIm9uRm9ybVJlYWR5IiwiZWxlbWVudCIsImxlbmd0aCIsImF0dHIiLCJoaWRlIiwibHlyYVVwZGF0ZVBheW1lbnRCbG9jayIsIm9uQnV0dG9uQ2xpY2siLCJlIiwiaXMiLCJodG1sIiwiZG9jdW1lbnQiLCJjb29raWUiLCJsb2NhdGlvbiIsImhvc3QiLCJ1c2VfaWRlbnRpZmllciIsInZhbCIsImx5cmFzdGRfZ2V0X2NhcmQiLCJJRlJBTUVfTElOSyIsImxpbmsiLCJJRlJBTUVfU1JDIiwic3JjIiwibHlyYXN0ZF9zaG93X2lmcmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsImJsb2NrIiwidXNlSWRlbnRpZmllciIsInBvcGluIiwidmFsaWRhdGVLUiIsInN1Ym1pdEZvcm0iLCJhamF4UHJlZmlsdGVyIiwib3B0aW9ucyIsIm9yaWdpbmFsT3B0aW9ucyIsImpxWEhSIiwiZGF0YSIsInJlZ2lzdGVyQ2FyZCIsInN1Ym1pdEtSIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInRva2VuX3VybCIsInN1Y2Nlc3MiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJzZXRGb3JtQ29uZmlnIiwibGFuZ3VhZ2UiLCJMWVJBX0xBTkdVQUdFIiwiZm9ybVRva2VuIiwidGhlbiIsInYiLCJvcGVuUG9waW4iLCJ1bmJsb2NrIiwib3BlblNlbGVjdGVkUGF5bWVudE1ldGhvZCIsIm9wZW5QYXltZW50TWV0aG9kIiwiY3NzIiwic3VibWl0IiwicHJvcCIsInZhbGlkYXRlRm9ybSIsInJlc3VsdCIsImRvT25FcnJvciIsImZpcnN0IiwiaW5pdEZpZWxkcyIsIm9uIiwiY2hhbmdlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUE1QjtBQUNBLElBQUlDLFNBQVMsR0FBR0MsNkVBQWlCLENBQUNGLG1CQUFELENBQWpDO0FBRUEsSUFBSUcsWUFBWSxHQUFHLGtEQUFuQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLEtBQXJCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLENBQUFMLFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsWUFBQUEsU0FBUyxDQUFFTSxnQkFBWCxLQUFnQyxDQUFBTixTQUFTLFNBQVQsSUFBQUEsU0FBUyxXQUFULFlBQUFBLFNBQVMsQ0FBRU0sZ0JBQVgsTUFBZ0MsTUFBaEY7QUFDQSxJQUFJ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QUFaOztBQUNBLElBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDeEIsTUFBSSxDQUFFRCxLQUFOLEVBQWE7QUFDVHZFLGlCQUFhO0FBRWJRLFVBQU0sQ0FBQ3RDLFlBQUQsQ0FBTixDQUFxQnVHLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDdkQsYUFBakM7QUFDQVYsVUFBTSxDQUFDLGlFQUFELENBQU4sQ0FBMEVrRSxNQUExRSxDQUFpRixVQUFTdkQsQ0FBVCxFQUFZO0FBQ3pGLFVBQUksS0FBS3dELEtBQUwsS0FBZSxTQUFuQixFQUE4QjtBQUMxQjNFLHFCQUFhO0FBQ2hCO0FBQ0osS0FKRDtBQUtIOztBQUVEdUUsT0FBSyxHQUFHLEtBQVI7QUFDSCxDQWJEOztBQWVBL0QsTUFBTSxDQUFDYyxRQUFELENBQU4sQ0FBaUJtRCxFQUFqQixDQUFvQixPQUFwQixFQUE2QkQsVUFBN0I7QUFDQWhFLE1BQU0sQ0FBQ1AsTUFBRCxDQUFOLENBQWV3RSxFQUFmLENBQWtCLE1BQWxCLEVBQTBCRCxVQUExQiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgwqkgTHlyYSBOZXR3b3JrIGFuZCBjb250cmlidXRvcnMuXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBMeXJhIENvbGxlY3QgcGx1Z2luIGZvciBXb29Db21tZXJjZS4gU2VlIENPUFlJTkcubWQgZm9yIGxpY2Vuc2UgZGV0YWlscy5cbiAqXG4gKiBAYXV0aG9yICAgIEx5cmEgTmV0d29yayAoaHR0cHM6Ly93d3cubHlyYS5jb20vKVxuICogQGF1dGhvciAgICBHZW9mZnJleSBDcm9mdGUsIEFsc2FjcsOpYXRpb25zIChodHRwczovL3d3dy5hbHNhY3JlYXRpb25zLmZyLylcbiAqIEBjb3B5cmlnaHQgTHlyYSBOZXR3b3JrIGFuZCBjb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL29sZC1saWNlbnNlcy9ncGwtMi4wLmh0bWwgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgKEdQTCB2MilcbiAqL1xuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IHsgcmVnaXN0ZXJQYXltZW50TWV0aG9kIH0gZnJvbSAnQHdvb2NvbW1lcmNlL2Jsb2Nrcy1yZWdpc3RyeSc7XG5pbXBvcnQgeyBkZWNvZGVFbnRpdGllcyB9IGZyb20gJ0B3b3JkcHJlc3MvaHRtbC1lbnRpdGllcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5pbXBvcnQgeyBnZXRMeXJhU2VydmVyRGF0YSB9IGZyb20gJy4vbHlyYS11dGlscyc7XG5cbmNvbnN0IFBBWU1FTlRfTUVUSE9EX05BTUUgPSAnbHlyYXN0ZCc7XG52YXIgbHlyYV9kYXRhID0gZ2V0THlyYVNlcnZlckRhdGEoUEFZTUVOVF9NRVRIT0RfTkFNRSk7XG5cbnZhciBzdWJtaXRCdXR0b24gPSAnLndjLWJsb2NrLWNvbXBvbmVudHMtY2hlY2tvdXQtcGxhY2Utb3JkZXItYnV0dG9uJztcbnZhciBzbWFydGJ1dHRvbk1ldGhvZCA9ICcnO1xudmFyIHNtYXJ0YnV0dG9uQWxsID0gZmFsc2U7XG52YXIgaGlkZVNtYXJ0ID0gbHlyYV9kYXRhPy5oaWRlX3NtYXJ0YnV0dG9uICYmIChseXJhX2RhdGE/LmhpZGVfc21hcnRidXR0b24gPT09ICd0cnVlJyk7XG52YXIgaGlkZUJ1dHRvbiA9IGZhbHNlO1xuXG52YXIgc2F2ZWREYXRhID0gZmFsc2U7XG52YXIgbmV3RGF0YSA9IG51bGw7XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKGx5cmFfZGF0YT8ucGF5bWVudF9maWVsZHMpIHtcbiAgICAgICAgdmFyIGZpZWxkcyA9IDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGx5cmFfZGF0YT8ucGF5bWVudF9maWVsZHN9fSAvPjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7IGZpZWxkcyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVjb2RlRW50aXRpZXMobHlyYV9kYXRhPy5kZXNjcmlwdGlvbik7XG4gICAgfVxufTtcblxudmFyIExhYmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgZGl2V2lkdGg6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnOTUlJ1xuICAgICAgICB9LFxuICAgICAgICBpbWdGbG9hdDoge1xuICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9eyBzdHlsZXMuZGl2V2lkdGggfT5cbiAgICAgICAgICAgIDxzcGFuPnsgbHlyYV9kYXRhPy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9eyBzdHlsZXMuaW1nRmxvYXQgfVxuICAgICAgICAgICAgICAgIHNyYz17IGx5cmFfZGF0YT8ubG9nb191cmwgfVxuICAgICAgICAgICAgICAgIGFsdD17IGx5cmFfZGF0YT8udGl0bGUgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbnJlZ2lzdGVyUGF5bWVudE1ldGhvZCh7XG4gICAgbmFtZTogUEFZTUVOVF9NRVRIT0RfTkFNRSxcbiAgICBsYWJlbDogPExhYmVsIC8+LFxuICAgIGFyaWFMYWJlbDogJ0x5cmEgcGF5bWVudCBtZXRob2QnLFxuICAgIGNhbk1ha2VQYXltZW50OiAoKSA9PiB0cnVlLFxuICAgIGNvbnRlbnQ6IDxDb250ZW50IC8+LFxuICAgIGVkaXQ6IDxDb250ZW50IC8+LFxuICAgIHN1cHBvcnRzOiB7XG4gICAgICAgIGZlYXR1cmVzOiBseXJhX2RhdGE/LnN1cHBvcnRzID8/IFtdLFxuICAgIH0sXG59KTtcblxudmFyIGRpc3BsYXlGaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlKHdpbmRvdy5GT1JNX1RPS0VOKTtcbiAgICBkZWxldGUod2luZG93LklERU5USUZJRVJfRk9STV9UT0tFTik7XG4gICAgZGVsZXRlKHdpbmRvdy5MWVJBX0hJREVfU0lOR0xFX0JVVFRPTik7XG5cbiAgICBzd2l0Y2ggKGx5cmFfZGF0YT8ucGF5bWVudF9tb2RlKSB7XG4gICAgICAgIGNhc2UgJ1JFU1QnOlxuICAgICAgICBjYXNlICdTTUFSVEZPUk0nOlxuICAgICAgICBjYXNlICdTTUFSVEZPUk1FWFQnOlxuICAgICAgICBjYXNlICdTTUFSVEZPUk1FWFROT0xPR09TJzpcbiAgICAgICAgICAgIGlmIChseXJhX2RhdGE/LnZhcnMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuTFlSQV9CVVRUT05fVEVYVCA9IGpRdWVyeShzdWJtaXRCdXR0b24pLnRleHQoKTtcbiAgICAgICAgICAgICAgICBldmFsKGx5cmFfZGF0YT8udmFycyk7XG5cbiAgICAgICAgICAgICAgICBoaWRlQnV0dG9uID0gKHdpbmRvdy5MWVJBX0hJREVfU0lOR0xFX0JVVFRPTiA9PSB0cnVlKTtcblxuICAgICAgICAgICAgICAgIEtSLm9uRm9ybVJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpZGVTbWFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBqUXVlcnkoXCIua3Itc21hcnQtYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYXJ0YnV0dG9uTWV0aG9kID0gZWxlbWVudC5hdHRyKFwia3ItcGF5bWVudC1tZXRob2RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBqUXVlcnkoXCIua3Itc21hcnQtZm9ybS1tb2RhbC1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFydGJ1dHRvbk1ldGhvZCA9IFwiYWxsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhazsgXG5cbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBseXJhVXBkYXRlUGF5bWVudEJsb2NrKHRydWUpO1xufTtcblxudmFyIG9uQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghIGpRdWVyeShcIiNyYWRpby1jb250cm9sLXdjLXBheW1lbnQtbWV0aG9kLW9wdGlvbnMtbHlyYXN0ZFwiKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEluIGNhc2Ugb2YgZm9ybSB2YWxpZGF0aW9uIGVycm9yLCBsZXQgV29vQ29tbWVyY2UgZGVhbCB3aXRoIGl0LlxuICAgIGlmIChqUXVlcnkoJ2Rpdi53Yy1ibG9jay1jb21wb25lbnRzLXZhbGlkYXRpb24tZXJyb3InKVswXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBqUXVlcnkoJy5rci1mb3JtLWVycm9yJykuaHRtbCgnJyk7XG4gICAgd2luZG93LkxZUkFfQlVUVE9OX1RFWFQgPSBqUXVlcnkoc3VibWl0QnV0dG9uKS50ZXh0KCk7XG5cbiAgICBkb2N1bWVudC5jb29raWUgPSAnbHlyYV9mb3JjZV9yZWRpcj07IE1heC1BZ2U9MDsgcGF0aD0vOyBkb21haW49JyArIGxvY2F0aW9uLmhvc3Q7XG4gICAgZG9jdW1lbnQuY29va2llID0gJ2x5cmFfdXNlX2lkZW50aWZpZXI9OyBNYXgtQWdlPTA7IHBhdGg9LzsgZG9tYWluPScgKyBsb2NhdGlvbi5ob3N0O1xuXG4gICAgaWYgKGpRdWVyeShcIiNseXJhX3VzZV9pZGVudGlmaWVyXCIpKSB7XG4gICAgICAgIGxldCB1c2VfaWRlbnRpZmllciA9IGpRdWVyeShcIiNseXJhX3VzZV9pZGVudGlmaWVyXCIpLnZhbCgpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnbHlyYV91c2VfaWRlbnRpZmllcj0nICsgdXNlX2lkZW50aWZpZXIgKyAnOyBwYXRoPS8nO1xuICAgIH1cblxuICAgIHN3aXRjaCAobHlyYV9kYXRhPy5wYXltZW50X21vZGUpIHtcbiAgICAgICAgY2FzZSAnTUVSQ0hBTlQnOlxuICAgICAgICAgICAgbHlyYXN0ZF9nZXRfY2FyZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSUZSQU1FJzpcbiAgICAgICAgICAgICB3aW5kb3cuSUZSQU1FX0xJTksgPSBseXJhX2RhdGE/Lmxpbms7XG4gICAgICAgICAgICAgd2luZG93LklGUkFNRV9TUkMgPSBseXJhX2RhdGE/LnNyYztcbiAgICAgICAgICAgICBseXJhc3RkX3Nob3dfaWZyYW1lKCk7XG5cbiAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdSRVNUJzpcbiAgICAgICAgY2FzZSAnU01BUlRGT1JNJzpcbiAgICAgICAgY2FzZSAnU01BUlRGT1JNRVhUJzpcbiAgICAgICAgY2FzZSAnU01BUlRGT1JNRVhUTk9MT0dPUyc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5GT1JNX1RPS0VOID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ2x5cmFfZm9yY2VfcmVkaXI9XCJ0cnVlXCI7IHBhdGg9LzsgZG9tYWluPScgKyBsb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgYmxvY2soKTtcblxuICAgICAgICAgICAgdmFyIHVzZUlkZW50aWZpZXIgPSBqUXVlcnkoXCIjbHlyYV91c2VfaWRlbnRpZmllclwiKS5sZW5ndGggJiYgalF1ZXJ5KFwiI2x5cmFfdXNlX2lkZW50aWZpZXJcIikudmFsKCkgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgdmFyIHBvcGluID0gKGpRdWVyeShcIi5rci1zbWFydC1mb3JtLW1vZGFsLWJ1dHRvblwiKS5sZW5ndGggPiAwKSB8fCAoalF1ZXJ5KFwiLmtyLXBvcGluLWJ1dHRvblwiKS5sZW5ndGggPiAwKTtcblxuICAgICAgICAgICAgaWYgKCEgdXNlSWRlbnRpZmllciAmJiAhIHBvcGluICYmICEgaGlkZUJ1dHRvbiAmJiAhIGhpZGVTbWFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUtSKEtSKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybShLUiwgcG9waW4sIHVzZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxudmFyIHN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoS1IsIHBvcGluID0gZmFsc2UsIHVzZUlkZW50aWZpZXIgPSBmYWxzZSkge1xuICAgIGpRdWVyeS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIpIHtcbiAgICAgICAgbmV3RGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICB9KTtcblxuICAgIHZhciByZWdpc3RlckNhcmQgPSBqUXVlcnkoJ2lucHV0W25hbWU9XCJrci1kby1yZWdpc3RlclwiXScpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgaWYgKHNhdmVkRGF0YSAmJiAobmV3RGF0YSA9PT0gc2F2ZWREYXRhKSkge1xuICAgICAgICAvLyBEYXRhIGluIGNoZWNrb3V0IHBhZ2UgaGFzIG5vdCBjaGFuZ2VkLCBubyBuZWVkIHRvIGNhbGN1bGF0ZSB0b2tlbiBhZ2Fpbi5cbiAgICAgICBzdWJtaXRLUihLUiwgcG9waW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNhdmVkRGF0YSA9IG5ld0RhdGE7XG4gICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiBseXJhX2RhdGE/LnRva2VuX3VybCxcbiAgICAgICAgICAgIGRhdGE6IHsgJ3VzZV9pZGVudGlmaWVyJzogdXNlSWRlbnRpZmllciB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIEtSLnNldEZvcm1Db25maWcoe1xuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogd2luZG93LkxZUkFfTEFOR1VBR0UsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Ub2tlbjogcGFyc2VkLmZvcm1Ub2tlblxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICBLUiA9IHYuS1I7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlckNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnaW5wdXRbbmFtZT1cImtyLWRvLXJlZ2lzdGVyXCJdJykuYXR0cignY2hlY2tlZCcsJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJtaXRLUihLUiwgcG9waW4pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG52YXIgc3VibWl0S1IgPSBmdW5jdGlvbiAoS1IsIHBvcGluKSB7XG4gICAgaWYgKGhpZGVCdXR0b24pIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBqUXVlcnkoJy5rci1zbWFydC1idXR0b24nKTtcblxuICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgc21hcnRidXR0b25NZXRob2QgPSBlbGVtZW50LmF0dHIoJ2tyLXBheW1lbnQtbWV0aG9kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0galF1ZXJ5KCcua3Itc21hcnQtZm9ybS1tb2RhbC1idXR0b24nKTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNtYXJ0YnV0dG9uQWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICB9XG5cbiAgICAgaWYgKHBvcGluIHx8IHNtYXJ0YnV0dG9uQWxsKSB7XG4gICAgICAgICBLUi5vcGVuUG9waW4oKTtcbiAgICAgICAgIHVuYmxvY2soKTtcbiAgICAgfSBlbHNlIGlmIChoaWRlQnV0dG9uKSB7XG4gICAgICAgICAgS1Iub3BlblNlbGVjdGVkUGF5bWVudE1ldGhvZCgpO1xuICAgICAgICAgIHVuYmxvY2soKTtcbiAgICAgfSBlbHNlIGlmIChzbWFydGJ1dHRvbk1ldGhvZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICBLUi5vcGVuUGF5bWVudE1ldGhvZChzbWFydGJ1dHRvbk1ldGhvZCk7XG4gICAgICAgICB1bmJsb2NrKCk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgICBqUXVlcnkoJyNseXJhc3RkX3Jlc3RfcHJvY2Vzc2luZycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAgalF1ZXJ5KCd1bC5seXJhc3RkLXZpZXctdG9wIGxpLmJsb2NrJykuaGlkZSgpO1xuICAgICAgICAgalF1ZXJ5KCd1bC5seXJhc3RkLXZpZXctYm90dG9tJykuaGlkZSgpO1xuXG4gICAgICAgICBLUi5zdWJtaXQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgYmxvY2sgPSBmdW5jdGlvbigpIHtcbiAgICBqUXVlcnkoJ2Zvcm0ud2MtYmxvY2stY29tcG9uZW50cy1mb3JtIHdjLWJsb2NrLWNoZWNrb3V0X19mb3JtJykuYmxvY2soKTtcbiAgICBqUXVlcnkoc3VibWl0QnV0dG9uKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG59O1xuXG52YXIgdW5ibG9jayA9IGZ1bmN0aW9uKCkge1xuICAgIGpRdWVyeSgnZm9ybS53Yy1ibG9jay1jb21wb25lbnRzLWZvcm0gd2MtYmxvY2stY2hlY2tvdXRfX2Zvcm0nKS51bmJsb2NrKCk7XG4gICAgalF1ZXJ5KHN1Ym1pdEJ1dHRvbikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICBqUXVlcnkoJy53Yy1ibG9jay1jb21wb25lbnRzLWJ1dHRvbl9fdGV4dCcpLnRleHQoXCJcIikudGV4dCh3aW5kb3cuTFlSQV9CVVRUT05fVEVYVCk7XG59O1xuXG52YXIgdmFsaWRhdGVLUiA9IGZ1bmN0aW9uKEtSKSB7XG4gICAgS1IudmFsaWRhdGVGb3JtKCkudGhlbihmdW5jdGlvbih2KSB7XG4gICAgICAgIHN1Ym1pdEZvcm0odi5LUik7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24odikge1xuICAgICAgICAvLyBEaXNwbGF5IGVycm9yIG1lc3NhZ2UuXG4gICAgICAgIHZhciByZXN1bHQgPSB2LnJlc3VsdDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kb09uRXJyb3IoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xufTtcblxudmFyIGZpcnN0ID0gdHJ1ZTtcbnZhciBpbml0RmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEgZmlyc3QpIHtcbiAgICAgICAgZGlzcGxheUZpZWxkcygpO1xuXG4gICAgICAgIGpRdWVyeShzdWJtaXRCdXR0b24pLm9uKCdjbGljaycsIG9uQnV0dG9uQ2xpY2spO1xuICAgICAgICBqUXVlcnkoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9cmFkaW8tY29udHJvbC13Yy1wYXltZW50LW1ldGhvZC1vcHRpb25zXScpLmNoYW5nZShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ2x5cmFzdGQnKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXJzdCA9IGZhbHNlO1xufTtcblxualF1ZXJ5KGRvY3VtZW50KS5vbigncmVhZHknLCBpbml0RmllbGRzKTtcbmpRdWVyeSh3aW5kb3cpLm9uKCdsb2FkJywgaW5pdEZpZWxkcyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n")}]);