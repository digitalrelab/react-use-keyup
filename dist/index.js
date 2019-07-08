var e,t=require("react"),n=(e=require("keycode"))&&"object"==typeof e&&"default"in e?e.default:e;exports.useKeyUp=function(e,u){function r(t){t.preventDefault(),t.which===n(e)&&u(t)}t.useEffect(function(){return document.addEventListener("keyup",r,!0),function(){document.removeEventListener("keyup",r,!0)}},[e])};
//# sourceMappingURL=index.js.map
