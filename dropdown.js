import {
  setAttributes,
  spawnElement,
  getElementById,
  removeElementById,
} from "./helpers.js";

import { SSLocalStorage, app, loadScript } from "./script.js";

const dropdownContOuter = getElementById("ss_dropdown-container-outer");
const dropdown = getElementById("ss_dropdown");
let dropdownActive = false;

export function createDropdownItems() {
  for (let i = 0; i < SSLocalStorage.scripts.length; i++) {
    for (const [key, value] of Object.entries(SSLocalStorage.scripts[i])) {
      const newListItem = spawnElement("ul");

      setAttributes(newListItem, [
        { id: `dropdown-element_${i}` },
        { innerHTML: key },
        { className: "ss_dropdown-item" },
      ]);

      newListItem.addEventListener("click", () => {
        loadScript(newListItem.innerHTML);
        hideDropdown();
      });

      dropdown.appendChild(newListItem);
    }
  }

  const newListItem = spawnElement("ul");

  setAttributes(newListItem, [
    { id: `dropdown-element_12` },
    { innerHTML: "+ Create new script" },
    { className: "ss_dropdown-item" },
  ]);

  dropdown.appendChild(newListItem);
}

export function createDropdown() {
  const dropdown = getElementById("ss_dropdown");
  const header = getElementById("scriptsavvy_header");

  const dropdownContHeight = `${
    header.getBoundingClientRect().top +
    header.getBoundingClientRect().height -
    3
  }px`;

  setAttributes(
    dropdownContOuter,
    new Map([["style", { top: dropdownContHeight }]])
  );

  createDropdownItems(dropdown);
}

function createBackdrop() {
  const backDrop = spawnElement("div");

  setAttributes(backDrop, { id: "ss_backdrop", className: "ss_backdrop" });

  backDrop.addEventListener("mouseover", hideDropdown);

  app.appendChild(backDrop);
}

export function showDropdown() {
  if (dropdownActive) return;

  setAttributes(dropdownContOuter, {
    className: "ss_dropdown-container-outer appear_y",
  });

  createBackdrop();

  dropdownActive = true;
}

function hideDropdown() {
  setAttributes(dropdownContOuter, {
    className: "ss_dropdown-container-outer",
  });

  removeElementById("ss_backdrop");
  dropdownActive = false;
}
