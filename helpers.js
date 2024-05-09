export function setAttributes(element, attributes, optionalValue = null) {
  if (!attributes) return;

  if (optionalValue !== null) {
    element[attributes] = optionalValue;
    return;
  }

  [...attributes].forEach(([propName, propValues]) => {
    for (const [key, value] of Object.entries(propValues)) {
        console.log("bug is at here:", element, propName, key, value);
      if (key === "noKey") {
        element[propName] = value;
      } else {
        element[propName][key] = value;
      }
    }
  });
}

export function spawnElement(tag) {
  return document.createElement(tag);
}

export function getElementById(id) {
  return document.getElementById(id);
}

export function removeElementById(id) {
        console.log(id)
        
  document.getElementById(id).remove();
}
