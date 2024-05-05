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

const title = document.getElementById('title')


const header = document.getElementById("scriptsavvy_header");

const dropdown = document.getElementById("scriptsavvy_dropdown");
const headerRect = header.getBoundingClientRect();
const dropdownTop = headerRect.top + headerRect.height + window.scrollY;

console.log(headerRect.top, headerRect.height
)

alertLaunch()