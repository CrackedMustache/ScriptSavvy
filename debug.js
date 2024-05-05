const debugArrayLaunch = [];
const debugArrayNow = [];

export function debugAdd(input) {
  const newInput = debugArrayLaunch.length === 0 ? `${input}` : `\n${input}`;

  debugArrayLaunch.push(newInput);
}

export function alertLaunch() {
  if (debugArrayLaunch.length > 0) window.alert(debugArrayLaunch);
}

export function alertNow() {
  window.alert(debugArrayNow);
}
