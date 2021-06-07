import { lpButton as longpress, lpButton } from '../longpressbutton.js';

const element = document.createElement('div');
element.textContent = 'Press 2s';
element.onclick = () => {
  alert('third button 2s');
};

lpButton.init();

const customButton = longpress.newButton(element, 2000);

document.body.append(customButton);
