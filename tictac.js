let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".a");
let turnO=true;
let newBtn=document.querySelector(".b");
let ans=document.querySelector(".w");

const resetGame=()=>{
    let turnO= true;
    enableBtn();

}

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner=(win)=>{
   ans.innerText= `WINNER IS : ${win}`;
   disableBtn();
};
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner=()=>{
    for(let pattern of winPatterns){
    let p1val=boxes[pattern[0]].innerText;
    let p2val=boxes[pattern[1]].innerText;
    let p3val=boxes[pattern[2]].innerText;
   if(p1val!=" " && p2val!="" && p3val!=""){
    if(p1val===p2val && p2val===p3val){
       console.log("WINNER: ",p1val);
       showWinner(p1val);
    }
}
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);