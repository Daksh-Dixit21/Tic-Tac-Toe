let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#resetbtn");
let end=document.querySelector(".end");
let result= document.querySelector(".result-screen");
let msg=document.querySelector("#result");

let turn= true;
const win=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],
    [2,5,8],[2,4,6],[3,4,5],[6,7,8]];
    let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn)
        {   box.style.color="red";
            box.innerText="X";
            turn=false;
        }
        else
        {   box.style.color="blue";
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        count++;
        console.log(count);
        winner(count);
    });
});
const winner = (count) =>{
    let equal=false;
    for(let i of win)
    {   
        let p1=boxes[i[0]].innerText;
        let p2=boxes[i[1]].innerText;
        let p3=boxes[i[2]].innerText;
        if(p1!=""&&p2!=""&&p3!=""){
            if(p1===p2&&p1===p3&&count<=9){
            console.log(p1,"wins");
            equal=true;
            show(p1,equal);
            }
        }
        if(equal===false&&count==9)
            show(p1,equal);
    }
};
const disableboxes =()=>{
    for (let db of boxes) {
        db.disabled = true;
    }
};
 const show=(p1,check)=>{
    if(check){
        msg.innerText=`${p1} Wins`;
        result.classList.remove("hide");
        disableboxes();
    }
    else
     {
        msg.innerText=`DRAW\nBetter Luck Next Time`;
        result.classList.remove("hide");
        disableboxes(); 
     }
    };
//   const draw=()=>{
//         msg.innerText=`DRAW\nBetter Luck Next Time`;
//         result.classList.remove("hide");
//         disableboxes();
//     };
const enableboxes =()=>{
    for (let eb of boxes) {
        eb.disabled = false;
        eb.innerText="";
    }
};
const resetGame=()=>{
    turn=true;
    enableboxes();
    result.classList.add("hide");
    count=0;
};
resetBtn.addEventListener("click", resetGame);