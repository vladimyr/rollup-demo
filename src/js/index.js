import { mount } from 'redom';
import MessageBox from './message-box';
import Heading from './heading';

init();

function init() {
  const $output = document.querySelector('.output');
  if (!$output) return;

  const heading = new Heading();
  heading.update('RE:DOM!');
  mount($output, heading);

  const messageBox = new MessageBox();
  messageBox.render($output);
  messageBox.showMessage('This is example!');
}
