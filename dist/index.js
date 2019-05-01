var e=require("react"),t=require("../node_modules/keycode/index");exports.useKeyUp=function(n,o){function r(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.which===t(n)&&o(e)}e.useEffect(function(){return document.addEventListener("keyup",r,!0),function(){document.removeEventListener("keyup",r,!0)}},[n])};
//# sourceMappingURL=index.js.map
