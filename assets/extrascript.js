var yourTodos = [ 
  {
    title: "homework",
    description: "hw at 5"
  }
]




document.body.addEventListener('click', (event) => {
  var obj = {
  title: "",
  description: ""
}

   obj["title"] = document.getElementById("newnote-titlebar").value;
   obj["description"] = document.getElementById("newnote-description").value;
  if(event.target.classList.contains("newnote-done-btn")) {
        document.getElementById("todo").insertAdjacentHTML('afterend',todo);
        document.getElementById("todo-title").innerText = obj["title"];
        document.getElementById("todo-description").innerText = obj["description"];
        yourTodos.push(obj);
        console.log(yourTodos);

      }
  if( event.target.classList.contains("todo-closebtn")){
    event.target.closest('.todo-list').style.display = "none";
    console.log("helloo");
  }

  if( event.target.classList.contains("newnote-close-btn"))  {
    event.target.closest('.newnote-box').style.display = "none";
    console.log("hii");
  }


  var input = "", filter = "";

  if( event.target.id == "search-input") {
    input = document.getElementById('search-input');
    if(input.value == null)
      console.log("no value");
    else
      filter = input.value.toUpperCase();

  }

  if( event.target.id == "search-btn") {
    for (i = 0; i < yourTodos.length; i++) {
      txtValue = yourTodos[i].title || yourTodos[i].description;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        document.getElementById("todo").insertAdjacentHTML('afterend',todo);
        document.getElementById("todo-title").innerText = yourTodos[i].title ;
        document.getElementById("todo-description").innerText = yourTodos[i].description;
      } else {
          document.getElementById("todo").style.display = "none";
      }
  }
  }
    
})
