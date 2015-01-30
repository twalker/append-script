/**
* appendScript
* Promises to append a script to the document.
*
* @example
* appendScript('http://example.com/foo.js')
* 	.then(()=> 'go hawks!')
*/
export default function appendScript(url){
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.onerror = reject;
    script.onreadystatechange = script.onload = function() {
      var state = script.readyState;
      if (!state || /loaded|complete/.test(state)){
        resolve();
      }
    }
    window.document.head.appendChild(script);
  });
}
