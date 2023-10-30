// ==UserScript==
// @name        copy-question
// @namespace   copy-question
// @match       https://moodle.bbbaden.ch/mod/quiz/attempt.php*
// @grant       GM_setClipboard
// @version     1.0.0
// @author      black-backdoor (https://github.com/black-backdoor)
// @description copys the question text to the clipboard
// ==/UserScript==


// Find the HTML element with the class "formulation clearfix"
const element = document.querySelector('.formulation.clearfix');

// Extract the text from the element
let text = element.innerText;

// Remove "Fragetext" from the text
text = text.replace('Fragetext', '');

// Remove "Meine Auswahl widerrufen" from the text
text = text.replace('Meine Auswahl widerrufen', '');

// Trim any leading or trailing whitespace
text = text.trim();

// Log the modified text to the console
console.log(text);

// Copy the text to the clipboard
GM_setClipboard(text, 'text/plain')