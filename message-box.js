class MessageBox {
  render(dest) {
    const el = document.createElement('p');
    el.className = 'message-box';
    this._el = dest.appendChild(el);
  }

  showMessage(message = '') {
    if (!this._el) return false;
    this._el.textContent = message.trim();
    return true;
  }
}

export default MessageBox;
