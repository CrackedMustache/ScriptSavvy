import {
  setAttributes,
  spawnElement,
  getElementById,
  removeElementById,
} from "./helpers.js";

import { loadedScripts, app } from "./script.js";

let dropdownActive = false;

export const header = document.getElementById("scriptsavvy_header");

export const dropdownTrigger = document.getElementById(
  "scriptsavvy_dropdown-trigger"
);

export const backdropAttrs = new Map([
  [
    "id",
    {
      noKey: "ss_backdrop",
    },
  ],
  [
    "className",
    {
      noKey: "ss_backdrop",
    },
  ],
]);

const dropdownContAttrs = new Map([
  [
    "style",
    {
      top: `${
        header.getBoundingClientRect().top +
        header.getBoundingClientRect().height -
        3
      }`,
    },
  ],
  [
    "className",
    {
      noKey: "ss_dropdown-container",
    },
  ],
]);

function addBackdrop() {
  const backDrop = spawnElement("div");

  setAttributes(backDrop, backdropAttrs);

  backDrop.addEventListener("mouseover", () => {
    removeDropdown();
  });

  app.appendChild(backDrop);
}

function createDropdownItems(dropdown) {
  for (let i = 0; i < loadedScripts.length; i++) {
    const newListItem = spawnElement("p");

    setAttributes(newListItem, "id", `dropdown-element_${i}`);
    setAttributes(newListItem, "innerHTML", loadedScripts[i][0]);
    setAttributes(newListItem, "className", "ss_dropdown-item");

    console.log("setAttributes worked!");
    dropdown.appendChild(newListItem);
  }
}

export function createDropdown() {
  if (dropdownActive) return;

  const dropdownCont = spawnElement("div");
  const dropdown = spawnElement("div");

  setAttributes(dropdownCont, dropdownContAttrs);

  setAttributes(dropdown, "className", "ss_dropdown");
  setAttributes(dropdown, "id", "ss_dropdown");


  dropdownTrigger.appendChild(dropdownCont);
  dropdownCont.appendChild(dropdown);
  createDropdownItems(dropdown);

  addBackdrop();

  dropdownActive = true;
}

export function removeDropdown() {
  if (!dropdownActive) return;

  removeElementById("ss_dropdown");
  removeElementById("ss_backdrop");

  dropdownActive = false;
}
