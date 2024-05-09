import { debugAdd, alertLaunch, alertNow } from "./debug.js";
import { getElementById } from "./helpers.js";
import { createDropdown, removeDropdown } from "./dropdown.js";

export const dropdownTrigger = document.getElementById(
  "scriptsavvy_dropdown-trigger"
);
export const app = document.getElementById("ss_app");

// ## get localstorage example
//

export let loadedScripts = {};

chrome.storage.local.get("scripts").then(({ scripts }) => {
  loadedScripts = scripts;
  console.log("in call", scripts, loadedScripts);
});

console.log(loadedScripts);

// ## set localstorage example
//
//const texty = "asdf1234"
//const localSetExample = chrome.storage.local.set({texty: texty});

// ## eventListenerExample
//
//textArea.addEventListener('change', (response) => {
//    window.alert(String(response))
//})

// ## document.getElement example
//
// const textArea = document.getElementById('text-area__main')

const textArea = getElementById("text-area_main");

const saveButton = getElementById("ss_save-prompt");

saveButton.addEventListener("click", () => {
  if (textArea.value == null || textArea.value.length < 3) return;
  const input = prompt("Enter a name for the script!");
  loadedScripts[input] = textArea.value;

  chrome.storage.local.set({
    'scripts': loadedScripts}, function() {
      console.log(`Value set to: ${loadedScripts}`)
    });

});

function initialize() {
  chrome.storage.local.get("scripts").then(({ scripts }) => {
    loadedScripts = scripts;
    console.log("in call", scripts, loadedScripts);
  });

  dropdownTrigger.addEventListener("mouseover", createDropdown);
}

initialize();

alertLaunch();
