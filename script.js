const display=document.getElementById('display');


function appendToDisplay(e){
    display.value += e;
}
appendToDisplay(e);
function clearDisplay(){
    display.value="";
}

clearDisplay();
function calculate(){
try{
    display.value=eval(display.value)
}
catch(error){
    display.value="Error"
}
}
calculate();