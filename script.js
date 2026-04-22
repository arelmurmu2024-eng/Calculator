const opBtns = document.body.querySelectorAll(".operator-btn");
const numBtns = document.body.querySelectorAll(".num-btn");
const equalBtn = document.body.querySelector(".equal-btn");

const inp = document.body.querySelector("#exp-bar-inp");

let exp = "";

equalBtn.addEventListener("click", ()=>{

    try{
        exp = inp.value;
        inp.value = eval(exp); 
    }catch(e){
        inp.value = "Error";
        console.log("Error :", e);
    }
    
});

opBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        inp.value += btn.innerText;
    })
});

numBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        inp.value += btn.innerText;
    })
});

// For clearing the bar
document.body.querySelector("#clear-btn").addEventListener("click", ()=>{
    inp.value = "";
    exp = "";
});

//For backspace
document.body.querySelector("#del-btn").addEventListener("click", ()=>{
    let temp = inp.value;
    inp.value = temp.substring(0,temp.length-1);
});

