(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],[,,,,,,function(_,e,r){"use strict";var s=r(3),t=(r(1),r(0));e.a=function(_){var e=_.symbol,r=_.expression,n=_.setExpression;return Object(t.jsx)("button",{className:"calculator-button",onClick:function(){n([].concat(Object(s.a)(r),[e]))},children:e})}},,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_admin_user_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_Users_admin_user_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_Screen__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_EqualsButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_ClearButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),_console=console,c=_console.log,CalculatorBody=function CalculatorBody(_ref){var symbols=_ref.symbols,_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState2=Object(_Users_admin_user_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),expression=_useState2[0],setExpression=_useState2[1];function evaluateExpression(){for(var exp="",i=0;i<expression.length;i++)exp+=expression[i];for(var _i=0;_i<exp.length;_i++){c({i:_i});var cur=exp[_i],next=exp[_i+1],curIdx=_i,nextIdx=_i+1;if("*"===cur){if("*"===next||"/"===next)return}else if("/"===cur){if("*"===next||"/"===next)return}else if("-"===cur&&"-"===next||"+"===cur&&"+"===next){var pos=expression.indexOf(cur),cloneExpression=Object(_Users_admin_user_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(expression),testExpression=Object(_Users_admin_user_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(expression);cloneExpression.splice(pos,2,"+"),exp="";for(var _i2=0;_i2<cloneExpression.length;_i2++)exp+=cloneExpression[_i2],c(cloneExpression[_i2])}}setExpression([eval(exp)])}function clearScreen(){setExpression([])}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"calculator-body",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Screen__WEBPACK_IMPORTED_MODULE_3__.a,{expression:expression}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"keypad",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{class:"numbers",children:symbols.numbers.map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{symbol:_,expression:expression,setExpression:setExpression})}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{class:"calculator-column",children:symbols.operators.map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{symbol:_,expression:expression,setExpression:setExpression})}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_EqualsButton__WEBPACK_IMPORTED_MODULE_5__.a,{func:evaluateExpression}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ClearButton__WEBPACK_IMPORTED_MODULE_6__.a,{func:clearScreen})]})]})};__webpack_exports__.a=CalculatorBody},function(_,e,r){"use strict";r(1);var s=r(0);e.a=function(_){var e=_.expression;return Object(s.jsx)("div",{className:"calculator-screen",children:e})}},function(_,e,r){"use strict";r(1);var s=r(0);e.a=function(_){var e=_.func;return Object(s.jsx)("button",{className:"calculator-button",onClick:e,children:"="})}},function(_,e,r){"use strict";r(1);var s=r(0);e.a=function(_){var e=_.func;return Object(s.jsx)("button",{className:"calculator-button",onClick:e,children:" C "})}},,,,,,function(_,e,r){},function(_,e,r){},,function(_,e,r){"use strict";r.r(e);var s=r(1),t=r.n(s),n=r(7),a=r.n(n),c=(r(17),r(18),r(8)),o=r(0);var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(c.a,{symbols:{numbers:[1,2,3,4,5,6,7,8,9,0],operators:["+","-","*","/","."],equals:["="]}})})};a.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.270d9e62.chunk.js.map