



var display = document.getElementById("output");
const calculatorkeys = document.querySelectorAll("button");

console.log("Hello")
var cos = value => Math.cos(value);
var sin= value=>Math.sin(value);
var tan= value=>Math.tan(value);
var log=value=>Math.log10(value);
var In=value=>Math.log(value);
var getnumberfromString=(str)=>
str.replace(/\D/g,'');

calculatorkeys.forEach(button=> {
  button.addEventListener("click", function() {

    if (button.textContent != "=" && 
      button.textContent!="DEL" 
      && button.textContent!="π" 
      && button.textContent!="√" 
      && button.textContent!="%"
      && button.textContent!="sq"
      && button.textContent!="e") {
      display.value += button.textContent;
    } 
    switch(button.textContent) {
      case "=":
        equals();
        break;
      case "C":
        clear();
        break; 
        case "DEL":
      removelastkey();
        break;
        case "cos(":
          cos(getnumberfromString(display.value));
        break;
        case "sin(":
          sin(getnumberfromString(display.value));
        break;
        case "tan(":
          tan(getnumberfromString(display.value));
        break;
        case "log(":
          tan(getnumberfromString(display.value));
        break;
        case "In(":
          In(getnumberfromString(display.value));
        break;
        case "π":          
        pi();
        break;
        case "√":          
        squareRoot();
        break;
        case "%":          
        percent();
        case "sq":          
        square();
        break;
        case "e":          
        exp();
        break;
        default:
    }
  });
});

const calculate= (fn) => {
  return new Function("return " + fn)();
};

function pi() {
  if(display.value==""){
    display.value=1*Math.PI;
  }else{
    display.value=(display.value*Math.PI);
  }
}
function clear() {
  display.value = null;
}
function removelastkey() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function square() {
  display.value = calculate(display.value * display.value);
}

function equals() {
  display.value = calculate((display.value));
    validateLength(); 
}
  
function percent() {
    display.value = display.value / 100;
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}
function exp() {
  display.value = Math.exp(display.value);
}






