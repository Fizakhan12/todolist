function add(){
    let taskInput = document.getElementById('inputtext');
    let taskList = document.getElementById('list');
    let notification = document.getElementById('notify');
    

    if(taskInput.value == '')
    {
        alert("Please enter something!");
    }
    else
    {
        //Create list element
        let newTask=document.createElement('li');
        newTask.class="lists";
        
        let checkBox=document.createElement("input");
        checkBox.type="checkbox";
        checkBox.name="completed";
        checkBox.id="select";

        checkBox.onclick=function(){
            // newTask.classList.toggle("completed");
            // var checkbox2 = document.getElementById("select");
            // var optionsSelect = document.getElementById("options");

            // optionsSelect.style.display = checkbox2.checked ? "block" : "none";
            // console.log(checkBox.value);


            if(this.checked)
            {
                newTask.style.textDecoration='line-through';
            }
            else{
                newTask.style.textDecoration = 'none';
            }

        }

        let todoText=taskInput.value;
        taskList.appendChild(newTask);
        var textNode = document.createTextNode(todoText);

        newTask.appendChild(checkBox);
        newTask.appendChild(textNode);




        //Click checkbox options will come

        // function options() {
        //     var checkBox = document.getElementById("select");
        //     var optionsSelect = document.getElementById("options");

        //     // If the checkbox is checked, display the options; otherwise, hide them
        //     optionsSelect.style.display = checkBox.checked ? "block" : "none";
        // }
        
        //Create notification
        notification.innerText = 'Task successfully added!';
        notification.style.display = 'block';

        //Set time duration for notification
        setTimeout(function () {
            notification.style.display = 'none';
        }, 2000);

        //Creating delete button

            let deleteButton = document.createElement('button');
            deleteButton.appendChild(document.createTextNode('X'));
            deleteButton.className = 'delete-btn';
            deleteButton.onclick = function() {
                taskList.removeChild(newTask);

                notification.innerText = 'Task successfully removed!';
                notification.style.display = 'block';

                setTimeout(function () {
                    notification.style.display = 'none';
                }, 2000);
            };
            
            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);  
    } 
    taskInput.value=''; 
    saveData();
}

//Search function

function search(){
    let search = document.getElementById('search');
    let taskList = document.getElementById('list');
    let tasks=taskList.getElementsByTagName('li');

    let searchTerm = search.value.toLowerCase();

    for(let i=0; i<tasks.length; i++)
    {
        let taskText=tasks[i].innerText.toLowerCase();
        if(taskText.includes(searchTerm))
        {
            tasks[i].style.display='block';
        }
        else{
            tasks[i].style.display='none';
        }

        search.value='';
    }
}

let taskList = document.getElementById('list');
//Save data to localbrowser
function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
// -----------------------------------------------------------------------------------------------

//Creating new list
function addlist(){
    let listInput=document.getElementById('listInput');
    let tables=document.getElementById('tables');

    if(listInput.value == '')
    {
        alert ("Enter the values");
    }
    else{
        let addlistdiv = document.createElement('div');
        addlistdiv.className='maindiv2';
        let box2_para = document.createElement('p');
        box2_para.className='box2_para';
        let innerlistdiv = document.createElement('div');
        innerlistdiv.className='innerlistdiv';
        var particularlistinput = document.createElement('input');
        particularlistinput.type='text';
        particularlistinput.placeholder='Enter list of items';
        particularlistinput.className='sublist';
        
        const newinput1 = document.getElementsByClassName('sublist').value;
        console.log()
        console.log(newinput1);
        let box2_but = document.createElement('button');
        box2_but.textContent='Add Task';
        box2_but.onclick = function(){
            alert("Hello");
            console.log('Hello');
            addtask();
        }
        box2_but.className='sublistbutton';
        let box2_ul = document.createElement('ul');
        box2_ul.className='box2_ul';
        let box2_lists = document.createElement('li')
        box2_lists.className='box2_li'
        

        let heading = listInput.value;
        let headNode= document.createTextNode(heading);

    
        box2_ul.appendChild(box2_lists);
        addlistdiv.appendChild(box2_para)
        box2_para.appendChild(headNode)
        addlistdiv.appendChild(innerlistdiv);
        innerlistdiv.appendChild(particularlistinput);
        innerlistdiv.appendChild(box2_but);
        addlistdiv.appendChild(box2_ul);
        tables.append(addlistdiv);
    }

    listInput.value='';

}


function addtask(){
        let input3=document.getElementsByClassName('sublist').value;
        let tasklistdiv = document.createElement('div');
        var array1 = [ ];
        tasklistdiv.className='maindiv3';
        document.body.append(tasklistdiv);
        console.log(input3);
        // const newinput1 = document.getElementsByClassName('sublist').value;
        // console.log()

}

