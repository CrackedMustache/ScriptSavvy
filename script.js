import { alertLaunch } from "./debug.js";
import { getElementById, setAttributes } from "./helpers.js";
import {
  createDropdowns,
  showScriptsDropdown,
  createScriptsDropdown,
  toggleDropdown,
  createEmptyScriptsDropdown,
} from "./dropdown.js";

export const selectScriptBtn = document.getElementById(
  "ss_dd_select-script_button"
);
export const app = document.getElementById("ss_app");
const textArea = getElementById("text-area_main");
const saveButton = getElementById("ss_save-prompt");
const moreButton = getElementById("ss_dd_more-button");

let loadedScript;

export let SSLocalStorage;

export function loadScript(scriptName) {
  setAttributes(selectScriptBtn, {
    className:
      "ss_dd_select-script_button ss_dd_trigger-button ss_dd_select-script_selected ",
  });
  setAttributes(selectScriptBtn.querySelector("p"), [
    { innerHTML: scriptName },
  ]);
  setAttributes(textArea, { value: SSLocalStorage.scripts[scriptName] });
}

export function newScript() {
  const scriptName = prompt("Enter new script name");

  setScript(scriptName);
}

function setScript(scriptName) {
  loadedScript = scriptName;
  selectScriptBtn.innerHTML = scriptName;
}

saveButton.addEventListener("click", () => {
  if (textArea.value == null || textArea.value.length < 3) return;

  const input = prompt("Enter a name for the script!");

  const localStorageObj = Object.fromEntries(SSLocalStorage["scripts"]);

  localStorageObj[input] = textArea.value;

  SSLocalStorage["scripts"] = new Map(Object.entries(localStorageObj));
  console.log(SSLocalStorage["scripts"]);
  localStorage["ScriptSavvy"] = JSON.stringify(Object.entries(SSLocalStorage));
  console.log(localStorage["ScriptSavvy"]);
  createScriptsDropdown();
});

function initialize() {
  try {
    SSLocalStorage = JSON.parse(localStorage["ScriptSavvy"]);
    SSLocalStorage["scripts"] = new Map(
      Object.entries(SSLocalStorage["scripts"])
    );
  } catch (error) {
    console.log("Error:", error);
    localStorage["ScriptSavvy"] = JSON.stringify({ scripts: new Map() });
  }

  createDropdowns(true);

  selectScriptBtn.addEventListener("mouseenter", () => {
    toggleDropdown("scripts", true);
  });

  moreButton.addEventListener("mouseenter", () => {
    toggleDropdown("more", true);
  });
}

initialize();

alertLaunch();
