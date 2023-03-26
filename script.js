const input= document.getElementById("input");
const form = document.getElementById("form");
const todos = document.getElementById("todos");

function addtodo(){
    form.addEventListener('submit', (e) => {

        e.preventDefault();
    
        const todotext= input.value; 
    
        if(todotext){
            const todoel=document.createElement("li");
            todoel.innerText = todotext;
    
            todoel.addEventListener('click', () =>{
                todoel.classList.toggle('completed');
            });
    
            todoel.addEventListener('contextmenu', (e) =>{
                e.preventDefault();
                todoel.remove();
            })
    
            todos.appendChild(todoel);
            input.value="";

            updateel();
        }
        
    });
}
addtodo();
function updateel(){
    const notesel= document.querySelectorAll("li");

    const todos = [];

    notesel.forEach(todoel => {
        todos.push({
            text: todoel.innerText,
            completed:todoel.classList.contains("completed"),

        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

