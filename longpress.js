class LongPressButton {
    constructor(button) {
      this._button = button;
      this._button.className = 'longpress';
      this._loader = document.createElement('div');
      this._loader.className = 'loader';
      this._label = document.createElement('span');
      this._label.textContent = this._button.textContent;
      this._button.textContent = '';

      this._fn = button.onclick;
      this._button.onclick = () => {};

      this._touch = false;
      this._timeout = this._button.dataset.duration;
      this._loader.style.animationDuration = `${this._timeout}ms`;
      this._timer = undefined;
    
      this._button.addEventListener('touchstart', (event) => {
        event.preventDefault();
        this._touch = true;
        this._loader.classList.add('loading');
        this._timer = window.setTimeout((event) => this._exec(event), this._timeout, event);
      }, true)
  
      window.addEventListener('touchend', (event) => {
        event.preventDefault();
        if (this._touch) {
          this._loader.classList.remove('loading');
          clearTimeout(this._timer);
          this._touch = false;
        }
      }, true);

      this._button.addEventListener('mousedown', (event) => {
        event.preventDefault();
        this._touch = true;
        this._loader.classList.add('loading');
        this._timer = window.setTimeout((event) => this._exec(event), this._timeout, event);
      }, true)
  
      window.addEventListener('mouseup', (event) => {
        event.preventDefault();
        if (this._touch) {
          this._loader.classList.remove('loading');
          clearTimeout(this._timer);
          this._touch = false;
        }
      }, true);
  
      this._button.append(this._loader, this._label);

      return this._button;
    }

    _onAnimationEnd() {
      this._loader.classList.remove('loaded');
      this._loader.removeEventListener('animationend', this._onAnimationEnd.bind(this));
    }
  
    _exec(event) {
      this._touch = false;
      this._loader.classList.remove('loading');
      this._loader.classList.add('loaded');
      this._loader.addEventListener('animationend', () => this._onAnimationEnd());
      this._fn(event);
    }
  }

/**
 * @param {HTMLElement} searchArea
 */
const init = (searchArea = undefined) => {
  const buttons = searchArea ? searchArea.querySelectorAll('button') : document.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button.dataset.longpress) new LongPressButton(button);
  });
  return buttons;
}

export default {
  /**
   * Create new LongPressButton and return the Button itself
   * 
   * @param {HTMLButtonElement} button
   * @returns HtmlButtonElement
   */
  newButton: (button) => new LongPressButton(button),
/**
 * Initialize document and create LongPressButtons.
 * 
 * @param {HTMLElement} searchArea
 */
  init
}