// ==UserScript==
// @name        copy-question
// @namespace   copy-question
// @match       https://moodle.bbbaden.ch/mod/quiz/attempt.php*
// @match       https://moodle.bbbaden.ch/userscript/extensions
// @version     1.1.1
//
// @downloadURL https://github.com/BBBaden-Moodle-userscripts/copy-question/raw/main/copy-question.user.js
// @updateURL   https://github.com/BBBaden-Moodle-userscripts/copy-question/raw/main/copy-question.user.js
// @homepageURL https://github.com/BBBaden-Moodle-userscripts/copy-question
// @supportURL  https://github.com/BBBaden-Moodle-userscripts/copy-question/issues
//
// @description copys the question text to the clipboard
// @author      black-backdoor
//
// @icon        https://github.com/BBBaden-Moodle-userscripts/copy-question/raw/main/icon.svg
//
// @run-at      document-end
// @grant       GM_setClipboard
// @grant       GM_info
//
// @require     https://github.com/black-backdoor/DataBridge/raw/main/DataBridge.lib.user.js
// ==/UserScript==

if(window.location.href == "https://moodle.bbbaden.ch/userscript/extensions"){
    //------------------------ DataBridge ------------------------
    // Create a new DataBridge
    const UserScriptManagerCon = new Connection("BBBUserScriptManager");

    // Register an event listener for the extensionInstalled event
    Protocol.registerMessageType(UserScriptManagerCon, 'getInstalled', function (msg) {
        UserScriptManagerCon.send({
            "header": {
                "receiver": msg.header.sender,
                "protocolVersion": "1.0",
                "messageType": "extensionInstalled",
            },
            "body": {
                "script": {
                    "scriptName": GM_info.script.name,
                    "scriptVersion": GM_info.script.version,
                }
            }
        });
    });
    return;
}

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
