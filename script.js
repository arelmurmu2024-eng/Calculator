const body = document.body.querySelector("#calc-body");
const pack = document.body.querySelector("#num-keys");
const equal = document.body.querySelector("#equal-btn");
const clear = document.body.querySelector("#clear-btn");

const inp = document.body.querySelector("#exp-bar-inp");

let exp = "";

body.addEventListener("click", (e)=>{
    let x = e.target.closest(".operator-btn");
    let y = e.target.closest(".num-btn");

    if(x){
        exp += x.innerText;
        inp.value += exp;
        console.log(exp);
    }
    if(y){
        exp += y.innerText;
        inp.value += exp;
        console.log(exp);
    }

});

body.addEventListener("click", ()=>{
    inp.value = "";
    exp = "";
})

