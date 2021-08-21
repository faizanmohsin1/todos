let addtodo = () => {
  let todo = document.getElementById("myInput");
  
  if(todo.value === ""){
    addtodo() = disabled  }   
 
  firebase.database().ref('todos').push({todo :todo.value})
  todo.value = ""

}

firebase.database().ref('todos').on('child_added', (data) => {
  let list = document.getElementById("list");
  list.innerHTML +=
  `
<li>
    <div class="card-div">
        <div>
        <input id="${data.key}" type="text" value=" ${data.val().todo}" disabled/>
       
        </div>
        
        <div>
            <button id="${data.key}edit" type="button" onclick="editTodo('${data.key}')"  class="btn btn-success">edit</button>
            <button onclick="deltodo('${data.key}')"  type="button" class="btn btn-danger">delete</button>
        </div>
    </div>
</li>

 `
})
let delAll = () => {
  firebase.database().ref('todos').remove()
  let list = document.getElementById('list')
  list.innerHTML = "";
}
let deltodo = (key) => {
  firebase.database().ref(`todos/${key}`).remove()
event.target.parentNode.parentNode.parentNode.remove()
 
}

let editTodo = (id) => {
  let input = document.getElementById(id)
  let editBtn = document.getElementById(id + 'edit')
  console.log(editTodo)
  editBtn.innerHTML="Update"
  editBtn.setAttribute('onclick',`update(${id})` )
  input.disabled = false
 
} 