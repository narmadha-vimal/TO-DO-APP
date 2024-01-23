const inputtask = document.querySelector(".wrapper #taskname");
const addtasks = document.querySelector(".wrapper .addbtn");
const cleartasks = document.querySelector(".wrapper .closebtn");
const tasklist = document.querySelector(".to-do-container .list-of-tasks");

addtasks.addEventListener('click', () => {
    let newtask = inputtask.value;
    addnewtask("tasks-title",false);
     displaytasks();
    inputtask.value = "";
    inputtask.focus;
});


const listofitems = [];

const addnewtask = ("tasks-title",completedtasks) => {
    if(tasks-title === ""){
        console.warn("Inputs cannot be Empty");
        return;
    }else{
        listofitems.push(tasks-title,completedtasks);
        console.log(listofitems);
    }
}

    const displaytasks = () => {
    if(listofitems.length === 0)
{
 console.warn("you dont have any pending tasks");
 return;
} 
 
listofitems.forEach(e =>{
    console.log(e.tasks-title);

    const title = document.createElement("section");
    title.classList.add("tasks-title");
    title.innerHTML = e.tasktitle;

    const tasks = document.createElement("section");
     tasks.classList.add("tasks");
    tasks.appendChild(title);

    tasklist.appendChild(tasks);


 });
    };

    