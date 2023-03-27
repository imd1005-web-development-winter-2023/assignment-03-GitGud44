const startButton=document.getElementById("start-button");
const welcomeMessage=document.getElementById("welcome");


//array of tasks
const tasks=[];

const totalTasks=document.createElement("h3");
const totalTasksMessage=" total tasks";

const taskList=document.createElement("ul");
const form=document.getElementById("form")

const taskInput=document.createElement("input");
const addButton=document.createElement("span");

taskList.setAttribute("id","task-list");

taskInput.setAttribute("type","text");
taskInput.setAttribute("placeholder","Write task here...");
taskInput.setAttribute("id","task-input");

addButton.setAttribute("onclick","addTask()");
addButton.setAttribute("id","add-task");
addButton.innerHTML="Add";

function openTaskList()
{
    welcomeMessage.replaceWith(taskInput);
    startButton.replaceWith(addButton);
    form.appendChild(taskList);
}

function addTask(e)
{
    let newTask=document.createElement("li");
    newTask.setAttribute("class","list");
    let taskName=document.getElementById("task-input").value;
    let checkInput=document.createTextNode(taskName);

    newTask.appendChild(checkInput);

    e.preventDefault();

    if(taskName==='')
    {
        alert("Write down a task to add to your todo list!");
    }
    else
    {
        tasks.push(taskName);
        document.getElementById("task-list").appendChild(newTask);
        totalTasks.innerHTML=tasks.length;
        totalTasks.append(totalTasksMessage);
        form.appendChild(totalTasks);
        appendCloseButton(newTask);
    }
    
    document.getElementById("task-input").value="";
}

function appendCloseButton(task)
{
    let span = document.createElement("SPAN");
    let x = document.createTextNode("\u00D7");
    span.className = "close";
    span.setAttribute("onclick","removeTask");
    span.appendChild(x);
    task.appendChild(span);
}

function removeTask()
{

}

startButton.addEventListener("click",openTaskList);
addButton.addEventListener("click",addTask);
