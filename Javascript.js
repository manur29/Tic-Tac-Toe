let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newtbtn=document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let turnO=true;//playerx, playerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        count +=1;
        console.log("Box Was Clicked");
        if(turnO){//Player O Turn
            box.innerText="O";
            turnO=false;
        }
        else{//Player X Turn
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
function newGame()
{
    let turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
function enableBoxes()
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
newtbtn.addEventListener("click",newGame);
resetbtn.addEventListener("click",newGame);

/*
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner Is ${winner}`;
    msgcontainer.classList.remove("hide");
}
*/
function disableBoxes()
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
function showWinner (winner){
    msg.innerText="Congratulations Winner Is "+winner;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner= () =>{
    /*for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,//Position 1 like X or O
            boxes[pattern[1]].innerText,//Position 2 like X or O
            boxes[pattern[2]].innerText //Position 3 like X or O
        );
    }*/
    if(count==9)
        {
            msg.innerText="Draw";
            msgcontainer.classList.remove("hide");
            disableBoxes();
        }
    for(let pattern of winPatterns)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="")
            {
                if(pos1Val ==pos2Val && pos2Val==pos3Val)
                {
                    console.log("Winner",pos1Val);
                    showWinner(pos1Val);
                }
            }
    }
}