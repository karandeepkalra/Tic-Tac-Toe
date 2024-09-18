let boxes=document.querySelectorAll(".b");
let reset=document.querySelector(".reset-btn");
let msg=document.querySelector("#msg");
let msgcon=document.querySelector(".msgcon");
let b3=document.querySelector(".b3");
let t0=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
boxes.forEach((b)=>{
    b.addEventListener("click",()=>{
        if(t0)
        {
            console.log("button was clicked");
            b.innerText="o";
            t0=false;
        }
        else{
            console.log("button was clicked");
            b.innerText="x";
            t0=true;
        }
        b.disabled=true;
        checkwinner();
        })
});
const msgshow=(p1)=>{
    msg.innerText=`Winner is ${p1}`;
    msgcon.classList.remove("hide");

}
const disablebox=()=>{
    for(let p of boxes)
    {
        p.disabled=true;
    }
}
const checkwinner = () => {
    for (let p of winpattern)
    {
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;
        if(p1!=""&&p2!=""&&p3!="")
        {
            if(p1===p2&&p2===p3)
            {
                disablebox();
                msgshow(p1);
            }
        }
    }

}
const doenabel=()=>{
    for(let p of boxes)
    {
        p.disabled=false;
        p.innerText="";
    }
}
const newgame=()=>{
    console.log("new game");
    t0=true;
    msgcon.classList.add("hide");
    doenabel();
}
reset.addEventListener("click",newgame);
b3.addEventListener("click",newgame);