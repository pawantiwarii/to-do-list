const inputBox = document.getElementById("input-box")
const listContainer = document.querySelector("#list-container")
const button = document.querySelector('.button')

button.addEventListener('click',(e)=>{

    if(inputBox.value === ''){
        alert('Add your task in input feild')
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ''
    saveDate()
})


listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        console.log(e.target.tagName)

        e.target.classList.toggle('checked')
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove('span')
        saveDate()
    }

}, false,)

function saveDate(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()