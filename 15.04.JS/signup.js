// const inc=document.querySelector(".inc");
// const span=document.querySelector(".res")
// const dec=document.querySelector(".dec")
// const reset=document.querySelector(".reset")

// let count=localStorage.getItem("res") || 0
let form=document.getElementById('form');
let allInputs=document.querySelectorAll('.form-control')

let allUsers=getToLocalStorage() || [];
class User{
    static Id=1;
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        this.id=User.Id++;
    }
}
form.addEventListener("submit",function(e){
    e.preventDefault();
    let bool=allUsers.some((item)=>item.username===allInputs[0].value || item.email===allInputs[1].value)
    if(!bool){
        let userObj =new User(
            allInputs[0].value,
            allInputs[1].value,
            allInputs[2].value
        )
        allUsers.push(userObj);
        setToLocalStroge(allUsers);
        window.location="login.html"
    }
    else{
        window.alert("username or email is already")
    }

})



function setToLocalStroge(arr){
    localStorage.setItem("users",JSON.stringify(arr))
}
function getToLocalStorage(){
  return  JSON.parse(localStorage.getItem("users"));
}






































































// span.textContent=count;

// inc.addEventListener("click",()=>{
//     count++;
//     span.textContent=count;
//     localStorage.setItem("res",count);
// });
// dec.addEventListener("click",()=>{
//     count--;
//     span.textContent=count;
//     localStorage.setItem("res",count);
// });

// reset.addEventListener("click",()=>{
//     count=0;
//     span.textContent=count;
//     localStorage.setItem("res",count);
// });
