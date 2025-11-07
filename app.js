let inputme =document.getElementsByClassName('myinput')[0];
let inputuser =document.getElementsByClassName('userinput')[0];
let toMe=document.getElementsByClassName("tome")[0];
let received=document.getElementsByClassName("received")[0];
let User=document.getElementsByClassName("user")[0];
let Me=document.getElementsByClassName("me")[0];


function Mymessage(){
    if(inputme.value==""){
        return;
        }else if(inputme.value!=""){
         let  sender= document.createElement("div");
            sender.classList.add("sender");
         Me.appendChild(sender);
        let   mine=  document.createElement("div");
         mine.classList.add("mine");
         mine.innerText=inputme.value;
         mine.style.display="block";
              sender.appendChild(mine);
        let tome= document.createElement("div");
        tome.classList.add("tome");
        let received= document.createElement("div");
        received.classList.add("received");
        received.innerText=inputme.value;
        received.style.display="block"; 
        tome.appendChild(received);
        User.appendChild(tome);

         inputme.value="";

        }
    }
    function Usermessage(){
         if(inputuser.value==""){
        return;
        }else if(inputuser.value!=""){
         
        let tome= document.createElement("div");
        tome.classList.add("tome");
        let received= document.createElement("div");
        received.classList.add("received");
        received.innerText=inputuser.value;
        received.style.display="block"; 
        tome.appendChild(received);
        Me.appendChild(tome);

let  sender= document.createElement("div");
            sender.classList.add("sender");
         User.appendChild(sender);
        let   mine=  document.createElement("div");
         mine.classList.add("mine");
         mine.innerText=inputuser.value;
         mine.style.display="block";
              sender.appendChild(mine);
         inputuser.value="";

    }
}