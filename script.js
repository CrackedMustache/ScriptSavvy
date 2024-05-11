import { alertLaunch } from "./debug.js";
import { getElementById, setAttributes } from "./helpers.js";
import {
  createDropdowns,
  showScriptsDropdown,
  createScriptsDropdown,
  toggleDropdown,
} from "./dropdown.js";

export const selectScriptBtn = document.getElementById("ss_dd_select-script_button");
export const app = document.getElementById("ss_app");
const textArea = getElementById("text-area_main");
const saveButton = getElementById("ss_save-prompt");
const moreButton = getElementById('ss_dd_more-button')

let selectedToggle = false;


export let SSLocalStorage;


export function loadScript(scriptName) {
  setAttributes(selectScriptBtn, {
    className: "ss_dd_select-script_button ss_dd_select-script_selected",
  });
  setAttributes(selectScriptBtn.querySelector('p'), [{ innerHTML: scriptName }]);
}


saveButton.addEventListener("click", () => {
  if (textArea.value == null || textArea.value.length < 3) return;
  const input = prompt("Enter a name for the script!");

  const newObj = { [input]: textArea.value };
  SSLocalStorage.scripts.push(newObj);

  localStorage["ScriptSavvy"] = JSON.stringify(SSLocalStorage);

  createDropdownItems();
});

async function initialize() {
  try {
    SSLocalStorage = await JSON.parse(localStorage["ScriptSavvy"]);
  } catch (error) {
    console.log("Error:", error);
  }

  createDropdowns(true);

  selectScriptBtn.addEventListener("mouseenter", () => {
    toggleDropdown('scripts', true)
  });

  moreButton.addEventListener("mouseenter", () => {
    toggleDropdown('more', true)
  });

}

initialize();

alertLaunch();
