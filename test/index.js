import {default as longpress} from '../longpress.js';

const btn2 = document.querySelector('button.btn2');
btn2.onclick = () => {
    alert('button 2 clicked...');
}

longpress.init();

const element = document.createElement('div');
element.textContent = 'button 3';
element.onclick = () => {
    console.log('4th click...');
}

const customButton = longpress.newButton(element, 500);

customButton.addEventListener('longpress', (event) => alert(event));

document.body.append(customButton);