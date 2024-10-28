const Friend = document.querySelector('.button');
const button = document.querySelector('.btn')
const accept = document.querySelector('.accept')

let condition = false
Friend.addEventListener('click',function(){
  if(condition === false){
    Friend.innerHTML = "Add Friend";
    accept.innerHTML = "Not Friend";
    accept.style.fontSize = "25px"
    accept.style.color = "red";
    Friend.style.fontSize = "18px";
    Friend.style.backgroundColor = 'skyblue'; 
    condition = true;
    
  }
  else if(condition === true){   
    Friend.innerHTML = "Remove Friend";
    accept.innerHTML = "Friends";
    accept.style.fontSize = "28px"
    accept.style.color = "green";
    Friend.style.fontSize = "15px";
    Friend.style.backgroundColor = 'orange'; 
    condition = false;    
  }
})
