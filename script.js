var number1 = "";
var number2 = "";
var operator = "";
function concatNumber(num){
    if(operator == ""){
        number1 = number1 + num;
        display(number1);
    }
    else{
        number2 = number2 + num;
        display(number2);
    }
}
function setOperator(op){
    operator = op;
    display(op);
}

function undo(){
    if(operator == "")
    {
        number1 = number1.slice(0, -1);
        display(number1);
    }
    else{
        number2 = number2.slice(0, -1);
        display(number2);
    }
}
function cls(){
    number1 = "";
    number2 = "";
    operator = "";
    display(number1);
    display2('0');
}

function display(num){
    let a = document.getElementById('input-box');
    a.innerText = num;
}

function display2(sol){
    let x = document.getElementById('input-box2')
    x.innerText = sol;
}

function solution(){
    switch(operator){
        case '+' : number1 = add(); number2 = ""; operator = "";break;
        case '-' : number1 = sub(); number2 = ""; operator = "";break;
        case '/' : number1 = div(); number2 = ""; operator = "";break;
        case 'x' : number1 = mul(); number2 = ""; operator = "";break;
        case '%' : number1 = mod(); number2 = ""; operator = "";break;
    }
}

function add(){
    let sol = parseFloat(number1)+parseFloat(number2);
    display2(sol);
    return(sol);
}
function sub(){
    let sol = parseFloat(number1)-parseFloat(number2);
    display2(sol);
    return(sol);
}
function div(){
    let sol = parseFloat(number1)/parseFloat(number2);
    display2(sol);
    return(sol);
}
function mul(){
    let sol = parseFloat(number1)*parseFloat(number2);
    display2(sol);
    return(sol);
}
function mod(){
    let sol = parseInt(number1)%parseInt(number2);
    display2(sol);
    return(sol);
}