const startButton=document.getElementById("start-button");
const welcomeMessage=document.getElementById("welcome");
const mainDiv=document.getElementById("inner-html");

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function openTaskList()
{
    let taskInput=document.createElement("input");
    let addButton=document.createElement("span");

    taskInput.setAttribute("type","text");
    taskInput.setAttribute("placeholder","Write task here...");
    taskInput.setAttribute("id","task-input");

    addButton.setAttribute("onclick","addTask()");
    addButton.setAttribute("id","add-task");
    addButton.innerHTML="Add";

    welcomeMessage.replaceWith(taskInput);
    startButton.replaceWith(addButton);
}
function addTask()
{
    let newTask=document.createElement("li");
    let taskName=document.getElementById("task-input").value;
    let checkInput=document.createTextNode(taskName);

    newTask.appendChild(checkInput);

    if(taskName==='')
    {
        alert("Write down a task to add to your todo list!");
    }
    else
    {
        document.getElementById("task-list").appendChild(newTask);
    }

    document.getElementById("task-input").value="";
}

startButton.addEventListener("click",openTaskList);
addButton.addEventListener("click",addTask)