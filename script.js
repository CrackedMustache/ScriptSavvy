import { debugAdd, alertLaunch, alertNow } from "./debug.js"

// ## get localstorage example
//
//const getStorage = chrome.storage.local.get('texty').then(({ texty }) => {
//    textArea.innerHTML = texty
//});

// ## set localstorage example
//
//const texty = "asdf1234"
//const localSetExample = chrome.storage.local.set({texty: texty});

// ## eventListenerExample
//
//textArea.addEventListener('change', (response) => {
//    window.alert(String(response))
//})

// ## document.getElement example
//
// const textArea = document.getElementById('text-area__main')



alertLaunch()