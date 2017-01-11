import content from './content.js';
import {onload} from './onload.js';

onload(() => {
    var div = document.createElement('div');
    div.innerHTML = content;
    document.body.appendChild(div);
});