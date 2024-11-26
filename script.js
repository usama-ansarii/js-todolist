const addUserBtn = document.getElementById("addUser")

let arr =[];
addUserBtn.onclick = () =>{
    const name =  document.getElementById("username").value;
    SaveInfo(name)
}

function SaveInfo(name){
    localStorage.setItem("user", name)
}


function Display(){

}


function EditInfo(){

}

function DeleteInfo(){

}