export function setAttributes(element, attributeMap) {
  if (!attributeMap) return;

  [...attributeMap].forEach(([propName, propValues]) => {
    for (const [key, value] of Object.entries(propValues)) {
      if (key === "rootLevel") {
        element[propName] = value;
      } else {
        element[propName][key] = value;
      }
    }
  })
}

export function setAttributes2(element, attributeMap, nested = false) {
  if (!attributeMap) return;

  if (nested) {
    [...attributeMap].forEach(([propName, propValues]) => {
      for (const propValue in propValues) {
        element[propName][propValue] = propValues[propValue];
      }
    });
  } else {
    for (const [attribute, valuesObj] of attributeMap.entries()) {
      for (const [key, value] of Object.entries(valuesObj))
        element[attribute] = value;
    }
  }
}

export function attributeMap(attribute, attributeValues) {
  return new Map([[attribute, attributeValues]]);
}

export function spawnElement(tag) {
  return document.createElement(tag);
}

export function getElementById(id) {
  return document.getElementById(id);
}
