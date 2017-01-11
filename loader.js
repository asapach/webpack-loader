function importScript(src) {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.charset = 'utf-8';
	script.async = true;
	script.timeout = 120000;

    return new Promise((resolve) => {
        script.src = src;
        var timeout = setTimeout(onScriptComplete, 120000);
        script.onerror = script.onload = onScriptComplete;
        function onScriptComplete() {
            // avoid mem leaks in IE.
            script.onerror = script.onload = null;
            clearTimeout(timeout);
            
            resolve();
        };
        head.appendChild(script);
    });
}

Promise.all([
    importScript('js/extra.js'),
    importScript('js/commons.js')
]).then(() => {
    importScript('js/0/entry.js')
})