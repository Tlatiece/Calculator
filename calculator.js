function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num2===0){
        return "cannot divide by 0";
    }
    return num1/num2;
}

function calculate(){
    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    const operator=document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "add":
            result = add(num1,num2);
            break;
        case "subtract":
            result = subtract(num1,num2);
            break;
        case "multiply":
            result = multiply(num1,num2);
            break;
        case "divide":
            result = divide(num1,num2);
            break;
        default:
            result = "invalid operator";
            break;
    }
    document.getElementById("result").textContent = `result: ${result}`;
}