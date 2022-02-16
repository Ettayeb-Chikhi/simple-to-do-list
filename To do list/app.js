// function to add a task 

let addTask = document.getElementById("add-btn");
addTask.addEventListener("click",addToList);

function addToList(){
    let container = document.getElementsByClassName("undone-tasks")[0];
    let div = document.createElement("div");
    div.className="task-content";
    let par = document.createElement("p");
    if(document.getElementById("task").value.length>0){
        par.textContent=document.getElementById("task").value;
        let check = document.createElement("input");
        check.type="submit";
        check.value="done"
        check.className="done-btn";
        check.addEventListener("click",doneTask);
        let remove = document.createElement("input");
        remove.type="submit";
        remove.value="remove";
        remove.className="remove-btn";
        remove.addEventListener("click",removeTask);
        container.appendChild(div);
        div.appendChild(par);
        div.appendChild(check);
        div.appendChild(remove);
        document.getElementById("task").value="";
    }else{
        alert("task connot be empty");
    }
    
}

// function to done  a task
function doneTask(e){
    let container = document.getElementsByClassName("done-task")[0];
    let task= e.target.parentNode.textContent;
    let div=document.createElement("div");
    div.className="content";
    let par = document.createElement("p");
    let del = document.createElement("del");
    del.textContent=task;
    let remove = document.createElement("input");
    remove.type="submit";
    remove.value="remove";
    remove.className="remove-btn";
    remove.addEventListener("click",removeTask)
    par.appendChild(del);
    div.appendChild(par);
    div.appendChild(remove);
    container.appendChild(div);
    // now removing the task
     const parent = e.target.parentNode;
     while(parent.firstChild){
         parent.removeChild(parent.firstChild);
     }
}

// function to remove a task
function removeTask(e){
    const parent = e.target.parentNode;
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
/*
check.addEventListener("click",function(){
        console.log("hi");
        if(this.checked){
            const parent = this.parentNode;
            console.log("checked");
            while(parent.firstChild){
                parent.removeChild(parent.firstChild);
            }
        }else{
            console.log("unchecked");
        }
    })
*/