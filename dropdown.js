import {
  setAttributes,
  spawnElement,
  getElementById,
  removeElementById,
} from "./helpers.js";

import { SSLocalStorage, app, loadScript } from "./script.js";

const scriptDropdownContOuter = getElementById(
  "ss_dd_script-container_outer"
);
const scriptDropdownMenu = getElementById("ss_dd_script-menu");
const moreDropdownContOuter = getElementById(
  "ss_dd_more-container_outer"
);
const moreDropdownMenu = getElementById("ss_dd_more-menu");

let scriptDropdownActive = false;
let moreDropdownActive = false;

export function createScriptsDropdown() {
  for (let i = 0; i < SSLocalStorage.scripts.length; i++) {
    for (const [key, value] of Object.entries(SSLocalStorage.scripts[i])) {
      const newListItem = spawnElement("ul");

      setAttributes(newListItem, [
        { id: `ss_dd_script-item_${i}` },
        { innerHTML: key },
        { className: "ss_dd_script-item ss_dd-item" },
      ]);

      newListItem.addEventListener("click", () => {
        loadScript(newListItem.innerHTML);
        toggleDropdown("scripts", false);
      });

      scriptDropdownMenu.appendChild(newListItem);
    }
  }
}

export function createDropdowns(all = false) {
  const header = getElementById("scriptsavvy_header");

  const dropdownTop = `${
    header.getBoundingClientRect().top +
    header.getBoundingClientRect().height -
    3
  }px`;
  console.log("okay?");
  setAttributes(
    scriptDropdownContOuter,
    new Map([["style", { top: dropdownTop }]])
  );

  createScriptsDropdown(scriptDropdownMenu);

  if ((all = true)) {
    setAttributes(
      moreDropdownContOuter,
      new Map([["style", { top: dropdownTop }]])
    );
  }
}

function createBackdrop() {
  const backDrop = spawnElement("div");

  setAttributes(backDrop, { id: "ss_backdrop", className: "ss_backdrop" });

  backDrop.addEventListener("mouseover", () => {
    toggleDropdown("scripts", false);
    toggleDropdown("more", false);
  });

  app.appendChild(backDrop);
}

export function showScriptsDropdown() {
  if (scriptDropdownActive) return;
}

export function toggleDropdown(str, boolean) {
  if (str === "scripts") {
    if (scriptDropdownActive === boolean) return;
    if (boolean) {
      setAttributes(scriptDropdownContOuter, {
        className:
          "ss_dd_script-container_outer ss_dd_absolute ss_dd_appear_y ",
      });
      createBackdrop();
      scriptDropdownActive = true;
    } else {
      setAttributes(scriptDropdownContOuter, {
        className: "ss_dd_script-container_outer ss_dd_absolute",
      });

      removeElementById("ss_backdrop");
      scriptDropdownActive = false;
    }
    return;
  }

  if (str === "more") {
    if (moreDropdownActive === boolean) return;
    console.log("HEY1");
    if (boolean) {
      setAttributes(moreDropdownContOuter, {
        className:
          "ss_dd_more-container_outer ss_dd_absolute ss_dd_appear_y ",
      });
      console.log("HEY2");
      createBackdrop();
      moreDropdownActive = true;
    } else {
      console.log("HEY3");
      setAttributes(moreDropdownContOuter, {
        className: "ss_dd_more-container_outer ss_dd_absolute",
      });
      console.log("HEY4");
      removeElementById("ss_backdrop");
      moreDropdownActive = false;
    }
    return;
  }
}
