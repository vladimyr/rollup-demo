import { el } from 'redom';

class Heading {
  constructor() {
    this.el = el('h1.heading');
  }
  update(data) {
    this.el.textContent = `Hello ${data}!`;
  }
}

export default Heading;
