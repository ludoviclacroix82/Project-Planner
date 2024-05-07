import {createDiv, sleep} from "./fnc.js";

//CREATE LIST
export function createList(parent,name,description,date) {
    createTask(parent,name,description,date)
}

//FORM
export async function form(state) {
    const form=document.querySelector('#form')
    const main=document.querySelector('main')

    //animation
    form.style.display='block'
    form.classList.add('fadeIn')
    main.classList.add('blurIn')

    //button
    form.setAttribute('addTo',state)
}

//ADD FORM
export function addForm() {
    const form=document.querySelector('#form')
    const state=form.getAttribute('addTo')
    
    //form values
    const parent=document.querySelector('#'+state)
    const name=document.querySelector('#taskID').value 
    const description=document.querySelector('#descriptionID').value 
    const date=document.querySelector('#deadlineID').value
    const remaining='test'

    const taskContainer=createTask(parent,name,description,date,remaining)
    
    //task id
    const id=generateID(name)
    taskContainer.id=id
    let index=localStorage.getItem('index')
    localStorage.setItem('index',parseInt(index)+1)

    //local storage
    const newTask = {state:state, name: name, description: description, date: date, taskID:id};
    let tasks = JSON.parse(localStorage.getItem('data') || '[]');
    tasks.push(newTask);
    localStorage.setItem('data', JSON.stringify(tasks));

    //reset form
    document.querySelector('#taskID').value=''
    document.querySelector('#descriptionID').value='' 
    document.querySelector('#deadlineID').value=''

    closeForm()
}

//CREATE TASK
function createTask(parent,name,description,date) {
    const taskContainer=createDiv('div',parent,null,'task')
    taskContainer.setAttribute('draggable',true)

    //task name
    const taskName=createDiv('h3',taskContainer,name)

    // Task remaining
    const now = new Date();
    const taskDate = new Date(date);
    const timeDifference = taskDate.getTime() - now.getTime();
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    let remainingText = dayDifference+' days remaining'
    if(dayDifference==1) {
        remainingText = dayDifference+' day remaining'
    } else if (dayDifference<=0) {
        remainingText = 'Too late!'
    }

    const taskRemaining=createDiv('p',taskContainer,remainingText)

    //task delete
    const taskRemove=createDiv('img',taskContainer,null,'svg')
    taskRemove.src='assets/images/icons/remove.svg'
    taskRemove.alt='remove'
    taskRemove.addEventListener('click', () => {
        if (confirm("Are you sure to remove this task?")) {
            taskContainer.remove();
        }
    })
    return taskContainer
}

//CLOSE FORM
export async function closeForm() {
    const form=document.querySelector('#form')
    const main=document.querySelector('main')

    //animation
    form.classList.add('fadeOut')
    form.classList.remove('fadeIn')
    main.classList.add('blurOut')
    main.classList.remove('blurIn')
    await sleep(300)
    form.style.display='none'
    form.classList.remove('fadeOut')
    main.classList.remove('blurOut')
}

function generateID(name) {
    const index=localStorage.getItem('index')
    const id=name+index
    return id
}