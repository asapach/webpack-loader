import './content.js';

export function onload(fn) {
    if (document.readyState !== "loading") return fn();
    document.addEventListener("DOMContentLoaded", fn);
}
