export default class LongPressButton {
  /**
   * 
   * @param {string} label 
   * @param {function} fn 
   * @param {number} timeout 
   * @param {DOMTokenList} classList 
   * @returns HtmlButtonElement
   */
    constructor(label = 'OK', fn = () => {}, timeout = 2000, classList) {
      this._button = document.createElement('button');
      this._button.classList = classList;
      this._loader = document.createElement('div');
      this._loader.className = 'loader';
      this._label = document.createElement('span');
      this._label.textContent = label;
      
      this._fn = fn;
      
      this._touch = false;
      this._timeout = timeout;
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
          console.log('press End');
        }
      }, true);
  
      this._button.append(this._loader, this._label);

      return this._button;
    }

/**
 * #private Method
 */
    _onAnimationEnd() {
      this._button.classList.remove('loaded');
      this._button.removeEventListener('animationend', this._onAnimationEnd.bind(this));
    }
  
    _exec(event) {
      this._touch = false;
      this._loader.classList.remove('loading');
      this._button.classList.add('loaded');
      this._button.addEventListener('animationend', () => this._onAnimationEnd());
      this._fn(event);
      // this._button.dispatchEvent(new MouseEvent('longpress', event));
    }
  }