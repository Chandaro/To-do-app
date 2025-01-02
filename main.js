let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    if(textInput.value === ""){
        console.log("Please enter a value");
        msg.innerHTML = "Tasks cannot be blank";
    }else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (() => {add.setAttribute("data-bs-dismiss", "");})();
    }
}

let data = {};
let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["textarea"] = textarea.value;
    displayData();
};

let displayData = () => {
    tasks.innerHTML += `
            <div>
                <span class="fw-bold">${data.text}</span>
                <span class="small text-secondary">${data.date}</span>
                <p>${data.textarea}</p>

                <span class="options">
                    <i data-bs-toggle="modal" data-bs-target="#form" onClick = "editTask(this)"class="fas fa-edit"></i>
                    <i onClick = "deleteTask(this)" class="fas fa-trash"></i>
                </span>
            </div>`;
    resetForm();
};

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;
    selectedTask.remove();
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}