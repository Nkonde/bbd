



var display = document.getElementById("output");
const calculatorkeys = document.querySelectorAll("button");


var cos = value => Math.cos(value);
var sin= value=>Math.sin(value);
var tan= value=>Math.tan(value);
var log=value=>Math.log(value);
var In=value=>Math.In(value);
var square=value=>Math.square(value);
var getnumberfromString=(str)=>str.replace(/\D/g, '');
var squareRoot=()=>display.value=Math.sqrt(display.value);
var percent=()=>display.value=(display.value/100);
var clear=()=>display.value=null;
var removelastkey=()=>{
  display.value = display.value.substring(0, display.value.length - 1);
};
var pi=()=>{
  if(display.value==""){
    display.value=1*Math.PI;
  }else{
    display.value=(display.value*Math.PI);
  }
  };
  var factorial=n =>{
    if ((n === 0) || (n === 1))
   return 1;
 else
   return (n * factorial(n - 1));
}

function equals(value) {
  display.value = evil((display.value));
    validateLength(); 
  }
  
  function percent() {
    display.value = display.value / 100;
  }


calculatorkeys.forEach(button=> {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
      button.textContent!="DEL" 
      && button.textContent!="π" 
      && button.textContent!="√" 
      && button.textContent!="%"
      && button.textContent!="!") {
      display.value += button.textContent;
    } 
    switch(button.textContent) {
      case "=":
        equals(display.value);
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
        break;
        default:
    }
  });
});

const evil = (fn) => {
  return new Function("return " + fn)();
};









