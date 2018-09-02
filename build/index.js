module.exports=function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=function(e){function Input(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Input),(t=function(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}(this,_getPrototypeOf(Input).call(this,e))).state={error:!1,errorMessage:""},t.handleInputChange=t.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(t))),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Input,n["Component"]),function(e,t,r){t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r)}(Input,[{key:"handleInputChange",value:function(e){var t=this.props,r=t.minLength,n=t.upper,o=t.lower,i=t.special,u=t.message,a=this.state.errorMessage,_=e.target.value,p="^";u&&"string"==typeof u&&this.setState({errorMessage:u}),r&&"number"==typeof r&&r>0&&(p+="(?=.{".concat(r,",})")),n&&(p+="(?=.*[A-Z])"),o&&(p+="(?=.*[a-z])"),i&&(p+="(?=.*[0-9])"),new RegExp(p).test(_)?this.setState({error:!1}):this.setState({error:!0,errorMessage:a.length?a:"Invalid password"})}},{key:"render",value:function(){var e=this.props.style,t=this.state,r=t.error,n=t.errorMessage;return o.a.createElement("div",null,o.a.createElement("input",{type:"password",className:"pass-input",onChange:this.handleInputChange,style:e}),r&&o.a.createElement("div",{className:"error"},n))}}]),Input}();t.default=i}]);