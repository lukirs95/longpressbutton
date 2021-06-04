import {default as Button} from './longpress.js';

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    const fn = button.onclick;
    const data = button.dataset;
    const classList = button.classList;
    const newButton = new Button(button.innerText, fn, data.duration, classList);
    console.log(newButton);
    data.longpress ? button.replaceWith(newButton) : null;
})