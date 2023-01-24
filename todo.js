// 1. Event Bubbling (DEFAULT) 2. Event Capturing 
// TODO PROJECT WITH - 3."event Delegation"

let todoForm = document.querySelector(".form-todo");
// GETTING TEXT VALUE
let textValue = document.getElementById("text");
// APPENDING
let todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", function(ele){
   ele.preventDefault();  // 1. THIS IS USE TO PREVENT THE RELOAD AFTER CLICLING SUBMIT BUTTON


   //2. STORE THE TXT VALUE
   let todoTextValue = textValue.value;

   //3. CREATE NEW LI ELEMENT
   let newLi = document.createElement("li");

   //4. STORE HTML CODE IN NEW VARIBALE
   let newLiInnerHtml = `<span>${todoTextValue}</span> 
   <div class="todo-buttons"> 
   <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
    </div>`;

    //5. ASSIGNING HTML CODE IN NEW "LI" 
    newLi.innerHTML = newLiInnerHtml;

     //6. NOW APPEND THE LI IN UL
     todoList.append(newLi);

    textValue.value = "";


})

// FOR BUTTONS ------->>>>

// WE ADD CLICK EVENT ON "UL" THIS IS EVENT "DELEGATION"

todoList.addEventListener("click", function(ele){   
    if(ele.target.classList.contains("done"))
    {
       let liDone = ele.target.parentNode.previousElementSibling;
       liDone.style.textDecoration = "line-through";
    }
    if(ele.target.classList.contains("remove"))
    {
      let liRemove = ele.target.parentNode.parentNode;
      liRemove.remove()
    }
})






