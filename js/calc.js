
const display = document.getElementById("output");
const calcKeys = document.querySelectorAll("button");


let cos = value => Math.cos(value);
let sin = value => Math.sin(value);
let tan = value => Math.tan(value);
let log = value => Math.log10(value);
let ln = value => Math.log(value);
let sqrt=value=>Math.sqrt(value);
let pi =value=>value*Math.PI;
let percent=value=>value/100;
let exp=value=>Math.exp(value);
let getnumberfromString = (str) =>
    str.replace(/\D/g, '');

function removelastkey() {
    display.value = display.value.substring(0, display.value.length - 1);
}
function clear() {
    display.value = "";
}
function Input(arg) {
    if (display.value === "ERROR" || (display.value == "0" && arg != ",")) { display.value = ""; }
    display.value += arg;
}
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }
  function square(value){
    return display.value=value*value;
  }


calcKeys.forEach(button => {
    button.addEventListener("click", function () {
        if (button.textContent != "DEL"
            && button.textContent != "C"
            && button.textContent != "="
            && button.textContent != "x²")
             {
            Input(button.textContent);
        }
        switch (button.textContent) {
            case "C":
                clear();
                break;
            case "DEL":
                removelastkey();
                break
            case "x²":
                square(display.value);
            case "=":
                equal();
                break;
        }
    });
});
 function Calculate(a, b, op){
     a = parseInt(a);
     b = parseInt(b); 
     switch(op){ 
         case '+': return a + b; 
         case '-': return a - b; 
         case '*': return a * b; 
         case '/': return a / b; 
     } 
 }
 function operateonStacks(operStack, opStack){
     const a = opStack.pop();
     const b = opStack.pop();
     const op = operStack.pop();
     
     opStack.push(Calculate(b,a, op)); 
 }
 
function checkIfOperatorFirst(lastvalueinExpession,lastvalueStackofperators){
    if(lastvalueStackofperators == '(') return -1; 
    let prec = ['/','*','+','-'];
    return (prec.indexOf(lastvalueinExpession)-prec.indexOf(lastvalueStackofperators)); 
 }

  function evaluateString(exp){
     let operStack = [];
     let opStack = [];
     let chars = exp.split(' ');
     chars.forEach(x => {
         if(!isNaN(parseInt(x))){
          opStack.push(x)   
         }
         else if(x == ')'){
             while(operStack.length > 0 && operStack[operStack.length -1] != '('){
                 operateonStacks(operStack, opStack);
             }
             operStack.pop(); //pop the opening paren
         }
         else if(operStack.length == 0 || checkIfOperatorFirst(x, operStack[operStack.length-1]) < 0){
             operStack.push(x);
         }else {
             while(operStack.length > 0 && checkIfOperatorFirst(x, operStack[operStack.length-1]) > 0){
                 operateonStacks(operStack, opStack);
             }
             operStack.push(x);
         }        
     });

     while(operStack.length>0){
         operateonStacks(operStack, opStack); 
     }
     return opStack[0];
 }
  

function equal() {
    //  display.value = Calculation.calculate(display.value);
    if (display.value.includes("sin(")) {
        display.value = sin(getnumberfromString(display.value));
    }else if(display.value.includes("cos(")){
        display.value = cos(getnumberfromString(display.value));
    }else if(display.value.includes("tan(")){
        display.value = tan(getnumberfromString(display.value));
    }else if(display.value.includes("log(")){
        display.value = log(getnumberfromString(display.value));
    }else if(display.value.includes("ln(")){
        display.value = ln(getnumberfromString(display.value));
    }else if(display.value.includes("√")){
        display.value = sqrt(getnumberfromString(display.value));
    }else if(display.value.includes("π")){
        display.value = pi(getnumberfromString(display.value));
    }else if(display.value.includes("%")){
        display.value = percent(getnumberfromString(display.value));
    }else if(display.value.includes("!")){
        display.value = factorial(getnumberfromString(display.value));
    }else if(display.value.includes("e")){
        display.value = factorial(getnumberfromString(display.value));
    }
    else{
        let finalAnswer= display.value.split('').join(' ');
        //console.log(finalAnswer);
    display.value = evaluateString(finalAnswer);
    }
    
   

}



