export function setAttributes(element, attributes) {
  if (!attributes) return;

  console.log("incoming:", element)

  if (attributes instanceof Map) {
    [...attributes].forEach(([attributeName, propValues]) => {
      for (const [key, value] of Object.entries(propValues)) {
        element[attributeName][key] = value;
      }
    });
  } else if (attributes instanceof Array) {
    attributes.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        element[key] = value;
      }
    });
  } else if (attributes instanceof Object) {
    for (const [key, value] of Object.entries(attributes)) {
      element[key] = value;
    }
  }
}

export function spawnElement(tagName) {
  return document.createElement(tagName);
}

export function getElementById(id) {
  return document.getElementById(id);
}

export function removeElementById(id) {
  document.getElementById(id)?.remove();
}
