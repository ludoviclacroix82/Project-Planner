import {createDiv, sleep} from "./fnc.js";
import {dragDrop} from "./dragdrop.js";
import {darkmode, lightmode} from "./main.js";

//CREATE LIST
export function createList(parent,name,description,date,id) {
    createTask(parent,name,description,date,id)
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

    //update darkmode
    const darkmodeChoice=localStorage.getItem('darkmode')
    if(darkmodeChoice=='true') {
        darkmode()
      } else {
        lightmode()
    }
    
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
function createTask(parent,name,description,date,id) {
    const taskContainer=createDiv('div',parent,null,'task')
    taskContainer.setAttribute('draggable',true)
    taskContainer.id=id

    const taskDiv1=createDiv('div',taskContainer,null,'div1')

    //task name
    createDiv('h3',taskDiv1,name)

    // Task remaining
    const now = new Date();
    const taskDate = new Date(date);
    const timeDifference = taskDate.getTime() - now.getTime();
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    let remainingText = dayDifference+' days'
    if(dayDifference==1) {
        remainingText = dayDifference+' day'
    } else if (dayDifference<=0) {
        remainingText = 'Too late!'
    }

    createDiv('p',taskDiv1,remainingText)

    //task description
    const arrow=createDiv('img',taskDiv1,null,'svg')
    arrow.src='assets/images/icons/arrow-down.svg'

    const taskDiv2=createDiv('div',taskContainer,null,'div2')
    createDiv('h4',taskDiv2,'Description:')
    createDiv('p',taskDiv2,description)

    taskDiv2.style.display='none'
    taskDiv2.setAttribute('open',false)

    arrow.addEventListener('click', () => {
        const open=taskDiv2.getAttribute('open')
        console.log(open)
        if(open=='false') {
            taskDiv2.style.display='block'
            taskContainer.style.height='auto'
            taskDiv2.setAttribute('open',true)
            arrow.src='assets/images/icons/arrow-up.svg'
        } else {
            taskDiv2.style.display='none'
            taskContainer.style.height='8%'
            taskDiv2.setAttribute('open',false)
            arrow.src='assets/images/icons/arrow-down.svg'
        }
    })

    //task delete
    const taskRemove=createDiv('img',taskDiv1,null,'svg')
    taskRemove.src='assets/images/icons/remove.svg'
    taskRemove.alt='remove'
    taskRemove.addEventListener('click', () => {
        if (confirm("Are you sure to remove this task?")) {
            taskContainer.remove();
        }
    })
    dragDrop()
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