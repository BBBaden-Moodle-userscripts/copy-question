// ==UserScript==
// @name        copy-question
// @namespace   copy-question
// @match       https://moodle.bbbaden.ch/mod/quiz/attempt.php*
// @version     1.0.1
//
// @downloadURL https://github.com/BBBaden-Moodle-userscripts/copy-question/raw/main/copy-question.user.js
// @updateURL   https://github.com/BBBaden-Moodle-userscripts/copy-question/raw/main/copy-question.user.js
// @homepageURL https://github.com/BBBaden-Moodle-userscripts/copy-question
// @supportURL  https://github.com/BBBaden-Moodle-userscripts/copy-question/issues
//
// @description copys the question text to the clipboard
// @author      black-backdoor (https://github.com/black-backdoor)
//
// @icon        https://github.com/BBBaden-Moodle-userscripts/copy-question/raw/main/icon.svg
//
// @run-at      document-end
// @grant       GM_setClipboard
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
GM_setClipboard(text, 'text/plain');
