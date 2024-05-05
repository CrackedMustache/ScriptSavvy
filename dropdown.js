function createDropdownItems(array) {
  array.forEach((item) => {
    const newItem = document.createElement("div");
    newItem.innerHTML = item;

    dropdown.appendChild(newItem);
  });
}

const header = document.getElementById("scriptsavvy_header");
const dropdownTrigger = document.getElementById("scriptsavvy_dropdown-trigger");
const dropdown = document.getElementById("scriptsavvy_dropdown");
const headerRect = header.getBoundingClientRect();
const dropdownTop = headerRect.top + headerRect.height;

dropdown.style.top = `${dropdownTop}px`;

const testArray = ["asdf", "bingo!", "what the sigma"];

dropdownTrigger.addEventListener('mouseover', () => {
    dropdown.style.visibility = visible;
})






createDropdownItems(testArray);
