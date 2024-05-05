const alertArray = [];

function alertAdd(input) {
    if (alertArray) console.log('falsy')
    const newInput = `\\n${input}`

    alertArray.push(newInput)
}

const textArea = document.getElementById('text-area__main')


const oldText = chrome.storage.local.get('texty').then(({ texty }) => {
    textArea.innerHTML = texty
});

//textArea.innerHTML=oldText



/*
const button = document.getElementById('btn_898')

button.addEventListener('click', () => {
    add("YES!")
})
*/
textArea.addEventListener('Inputs', (i) => {
    add(i)
})




const texty = "asdf1234"
const newText = chrome.storage.local.set({texty: texty})

if (alertArray.length > 0) {
    window.alert(alertArray)
}
