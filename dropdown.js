import {
  setAttributes,
  attributeMap,
  spawnElement,
  getElementById,
} from "./helpers.js";

export const app = document.getElementById("ss_app");

export const header = document.getElementById("scriptsavvy_header");

export const dropdownTrigger = document.getElementById(
  "scriptsavvy_dropdown-trigger"
);

export const backdropAttrs = new Map([
  [
    "style",
    {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      position: "absolute",
      zIndex: "5",
    },
  ],
]);

const dropdownContAttrs = new Map([
  [
    "style",
    {
      position: "absolute",
      zIndex: "12",
      top: `${
        header.getBoundingClientRect().top +
        header.getBoundingClientRect().height -
        3
      }`,
    },
  ],
]);

export const dropdownAttrs = new Map([
  [
    "style",
    {
      backgroundColor: "black",
      marginTop: "4px",
    },
  ],
]);

let dropdownActive = false;

function setDropdownProperties(dropdownCont, dropdown) {
  setAttributes(dropdownCont, [
    ...dropdownContAttrs,
    ...new Map([["id", { rootLevel: "ss_dropdown" }]]),
  ]);
  setAttributes(dropdown, dropdownAttrs);
  setAttributes(
    dropdown,
    new Map([["innerHTML", { rootLevel: "asdfasdfasdf" }]])
  );

  dropdownCont.appendChild(dropdown);
  dropdownTrigger.appendChild(dropdownCont);
}

function addBackdrop() {
  const backDrop = spawnElement("div");

  setAttributes(backDrop, backdropAttrs);

  backDrop.id = "ss_backdrop";

  backDrop.addEventListener("mouseover", () => {
    removeDropdown();
  });

  app.appendChild(backDrop);
}

function removeDropdown() {
  if (!dropdownActive) return;
  document.getElementById("ss_dropdown").remove();
  document.getElementById("ss_backdrop").remove();

  dropdownActive = false;
}

function createDropdown() {
  if (dropdownActive) return;

  const dropdownContainer = document.createElement("div");
  const dropdown = document.createElement("div");
  setDropdownProperties(dropdownContainer, dropdown);

  addBackdrop();
  dropdownActive = true;
}

dropdownTrigger.addEventListener("mouseover", createDropdown);
