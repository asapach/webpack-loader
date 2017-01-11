import {onload} from './onload.js';

onload(() => {
    var div = document.createElement('div');
    div.innerHTML = 'test';
    document.body.appendChild(div)
});