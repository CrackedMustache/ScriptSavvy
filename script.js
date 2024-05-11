import { alertLaunch } from "./debug.js";
import { getElementById, setAttributes } from "./helpers.js";
import {
  createDropdown,
  showDropdown,
  createDropdownItems,
} from "./dropdown.js";

export const selectScriptBtn = document.getElementById(
  "ss_dropdown-trigger"
);
export const app = document.getElementById("ss_app");
const textArea = getElementById("text-area_main");
const saveButton = getElementById("ss_save-prompt");
let selectedToggle = false;

// ## get localstorage example
//

export let SSLocalStorage;
const toggleButton = getElementById("toggle_selected");
toggleButton.addEventListener("click", toggleSelected);

function toggleSelected() {

  if (selectedToggle) {
    selectScriptBtn.className = "select_script script_unselected";
  } else {
    selectScriptBtn.className = "select_script script_selected";
  }

  selectedToggle = !selectedToggle
}


export function loadScript(scriptName) {
  setAttributes(selectScriptBtn, { className: "select_script script_selected" });
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

  createDropdown();

  selectScriptBtn.addEventListener("mouseenter", showDropdown);
}

initialize();

alertLaunch();
