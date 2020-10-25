import { createElement as e } from '../utils.js';

export default class TodoItem {
  constructor(title) {
    this._$el = document.createElement('li');
    this.title = title;
    this.render(this.title);
  }

  get element() {
    return this._$el;
  }

  render(title) {
    this._$el.appendChild(
      e(
        'div',
        { class: 'view' },
        e('input', { class: 'toggle', type: 'checkbox' }),
        e('label', { class: 'label' }, title),
        e('button', { class: 'destroy' })
      ),
      e('input', { class: 'edit', value: title })
    );
  }
}