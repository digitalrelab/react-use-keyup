var e,t=require("react"),n=(e=require("keycode"))&&"object"==typeof e&&"default"in e?e.default:e;exports.useKeyUp=function(e,o){function u(t){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),t.which===n(e)&&o(t)}t.useEffect(function(){return document.addEventListener("keyup",u,!0),function(){document.removeEventListener("keyup",u,!0)}},[e])};
//# sourceMappingURL=index.js.map
