import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error, Stack } from '@pnotify/core';

function showErrorNotify(message) {
  if (typeof window.maxOpenClose === 'undefined') {
    window.maxOpenClose = new Stack({
      dir1: 'down',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
      modal: false,
      maxOpen: 2,
      maxStrategy: 'close',
      maxClosureCausesWait: false,
    });
  }

  error({
    text: message,
    delay: 5000,
    stack: window.maxOpenClose,
  });
}

export default showErrorNotify;
