(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  }
})(function (exports, module) {
  "use strict";

  /**
  * appendScript
  * Promises to append a script to the document.
  *
  * @example
  * appendScript('http://example.com/foo.js')
  * 	.then(()=> 'go hawks!')
  */
  module.exports = appendScript;
  function appendScript(url) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.onerror = reject;
      script.onreadystatechange = script.onload = function () {
        var state = script.readyState;
        if (!state || /loaded|complete/.test(state)) {
          resolve();
        }
      };
      window.document.head.appendChild(script);
    });
  }
});
