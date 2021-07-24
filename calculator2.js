//using data attributes so as not to mix the styling classes and javascript classes. USE DATA ATTRIBUTES INSTEAD OF CLASSES. This way it s easier to see which parts of the html are being used by the css, and which parts are being used by javascript.

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const previousOperantTextElement = document.querySelectorAll('[data-previous-operand]');
const currentOperantTextElement = document.querySelectorAll('[data-current-operand]');

 