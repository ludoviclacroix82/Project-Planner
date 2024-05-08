import { createDiv } from "./fnc.js"
import { createList } from "./list.js"
import { lightmode, darkmode } from "./main.js"

export async function sort() {
    const todoButton=document.querySelector('#sortTodo')
    todoButton.setAttribute('open',false)
    todoButton.addEventListener('click', () => {
        let status=todoButton.getAttribute('open')
        if(status=='false') {
        sortMenu('todo',todoButton)
        todoButton.setAttribute('open',true)
        } else {
            document.querySelector('.sortMenu').remove()
            todoButton.setAttribute('open',false)
        }
    })

    const doingButton=document.querySelector('#sortDoing')
    doingButton.setAttribute('open',false)
    doingButton.addEventListener('click', () => {
        let status=doingButton.getAttribute('open')
        if(status=='false') {
        sortMenu('doing',doingButton)
        doingButton.setAttribute('open',true)
        } else {
            document.querySelector('.sortMenu').remove()
            doingButton.setAttribute('open',false)
        }
    })

    const doneButton=document.querySelector('#sortDone')
    doneButton.setAttribute('open',false)
    doneButton.addEventListener('click', () => {
        let status=doneButton.getAttribute('open')
        if(status=='false') {
        sortMenu('done',doneButton)
        doneButton.setAttribute('open',true)
        } else {
            document.querySelector('.sortMenu').remove()
            doneButton.setAttribute('open',false)
        }
    })
}

function sortMenu(list,button) {
    const header=button.parentNode
    const menu=createDiv('div',header,null,'sortMenu')
    const sortByName=createDiv('div',menu,'Sort by name','sortOption')
    const sortByRemaining=createDiv('div',menu,'Sort by remaining time','sortOption')

    sortByName.addEventListener('click', () => {
        menu.remove()
        button.setAttribute('open',false)
        sortData(list,'byName')
    })

    sortByRemaining.addEventListener('click', () => {
        menu.remove()
        button.setAttribute('open',false)
        sortData(list,'byDate')
    })
}

function sortData(list,type) {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    let oList=[]
    let uList=[]
    for(let i=0; i<data.length; i++) {
        if(data[i].state==list) {
            oList.push(data[i])
        } else {
            uList.push(data[i])
        }
    }
    
    if(type=='byName') {
        //sort by name
        oList.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    } else {
        //sort by date
        oList.sort((a, b) => {
            // Convert date strings to Date objects for comparison
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            // Compare dates
            return dateA - dateB;
        });
    }

    oList = oList.concat(uList);
    
    const parents=Array.from(document.querySelectorAll('.list'))
    parents.forEach(element => {
        element.innerHTML=''
    });
    oList.forEach((element) => {
        const parent=document.querySelector('#'+element.state)
        createList(parent, element.name, element.description, element.date, element.taskID);
    });

    const darkmodeChoice=localStorage.getItem('darkmode')
    if(darkmodeChoice=='true') {
        darkmode()
      } else {
        lightmode()
    }
    
    localStorage.setItem('data',JSON.stringify(oList))
}