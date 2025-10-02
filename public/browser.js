

console.log("FrontEnd Browserjs ishga tushdi");

function itemTemplate(item){
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="item-text">${item.reja}</span>
          <div class="btn-group">
            <button data-id = ${item._id} class="btn btn-sm btn-outline-secondary edit-me">O'zgartirish</button>
            <button data-id = ${item._id} class="btn btn-sm btn-outline-danger delete-me"> O'chirish</button>
          </div>
        </li>`
}

let createField = document.getElementById("create-field");

document
  .getElementById("create-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log("submitting");

    axios.post("/create-form", { reja: createField.value })
      .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
      })
      .catch((err) => {
        console.log("Iltimos qaytatdan harakat qiling");
        alert("Iltimos qaytatdan harakat qiling");
      });
});


document.addEventListener("click", (e)=>{
    console.log(e.target);
    // edit operatsiyasi
    if(e.target.classList.contains("edit-me")){
        alert("siz ozgartirish tugmasini bosdingiz");
    }
    // delete operatsiyasi
    if(e.target.classList.contains("delete-me")){
        if(confirm("Aniq ochirmoqchimisz")){
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((response)=>{
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
                
            })
            .catch((err)=>{
                console.log("iltimos qaytatdan harakat qiling");
                
            })
        }
    }
  // edit target 

  if(e.target.classList.contains("edit-me")){
     let UserInput = prompt("ozgartirish kiriting:",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
     if(UserInput){
      axios.post("/edit-item", {id:e.target.getAttribute("data-id"),new_input: UserInput})
      .then((response)=>{
        console.log(response.data);
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = UserInput;
      })
      .catch((err)=>{
        console.log("iltimos qaytatdan harakat qiling");
        
      })
      
     }
  } 
});

document.getElementById("clean-all").addEventListener("click", (e)=>{
  axios.post("/delete-all", {delete_all: true})
  .then((response)=>{
    alert(response.data.state);
    document.location.reload();    
  }).catch((err)=>{})
})



