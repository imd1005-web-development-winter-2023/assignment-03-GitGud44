const startButton=document.getElementById("start-button");
const welcomeMessage=document.getElementById("welcome");

const tasks=[];

const totalTasks=document.createElement("h3");
const totalTasksMessage=" total tasks";

const tasksCompleted=document.createElement("h3");
const tasksCompletedMessage=" tasks completed";

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
    let checkedTask=document.createElement("li");
    checkedTask.setAttribute("class","checked");
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
        tasks.push(newTask);
        document.getElementById("task-list").appendChild(newTask);

        const index=tasks.indexOf(newTask);
        appendCloseButton(newTask,index);

        let checkedList = document.querySelector("UL");
        checkedList.addEventListener("click", function(ev) {
            if (ev.target.tagName === "LI") {
                ev.target.classList.toggle("checked");
            }
            isCompleted();
        },false);
    }
    
    form.appendChild(totalTasks);
    totalTasks.innerHTML=tasks.length;
    totalTasks.append(totalTasksMessage);

    document.getElementById("task-input").value="";
}


function appendCloseButton(task,index)
{
    let span = document.createElement("SPAN");
    let x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    task.appendChild(span);

    span.onclick = function() {
        
        this.parentNode.remove();
        tasks.splice(this.index,1);
        
        if (tasks.length>0)
        {
            totalTasks.innerHTML=tasks.length;
            totalTasks.append(totalTasksMessage);
        }
        else
        {
            totalTasks.innerHTML="No tasks to do";
        }
    }
}

function isCompleted()
{
    let completed=document.getElementsByClassName("checked").length;

        totalTasks.appendChild(tasksCompleted);

        if(completed>0)
        {
            tasksCompleted.innerHTML=completed;
            tasksCompleted.append(tasksCompletedMessage);
        }
        else
        {
            tasksCompleted.innerHTML="No tasks completed";
        }

}

startButton.addEventListener("click",openTaskList);
addButton.addEventListener("click",addTask);
checkedList.addEventListener("click", addCheck);
