const buttons = document.querySelectorAll(".buttons");
const clearIt = document.querySelector(".clear-all");
const onlyOneChar = document.querySelector(".clear");
const submit = document.querySelector(".exception");
const res = document.getElementById("result");
let expression;
let firstVal;
let mathOperator;
let secondVal;

buttons.forEach((button) => {
    button.addEventListener("click" , () => {
        const value = button.innerHTML;
        res.innerHTML += value;
        
    })
})

clearIt.addEventListener("click" , () => {
        res.innerHTML = "";
         firstVal = "";
         mathOperator = "";
         secondVal = "";

    })

function oneByOne() {
    let input = res.innerText;
    let length = input.length;
    res.innerHTML = input.slice(0 , (length - 1));
}

onlyOneChar.addEventListener("click" , oneByOne);

function getOutput() {
    let value = res.innerText;
    const array1 = value.split("");
    finalShot(array1);
}

submit.addEventListener("click" , getOutput);

function finalShot(array) {
     const length = array.length - 1;
 
    if (isNaN(array[0])) {
      if (array[0] === 'x' || array[0] === '/' || array[0] === '%') {
           res.innerText = "Please enter valid input";
           return;
      }
    
      else {
        for (let i = 1; i < array.length; i++) {
          if (isNaN(array[i]) && array[i] !== '.') {
            firstVal = parseFloat(array.slice(0 , i + 1).join(""));
            mathOperator = array[i];
            secondVal = parseFloat(array.slice((i + 1) , array.length).join(""));
            break;
          }
        }
      }
    }  
 
    else if (isNaN(array[length])) {
           res.innerText = "Please enter valid input";
           return;
    }

    else {
      for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i]) && array[i] !== '.') {
        firstVal = parseFloat(array.slice(0 , i + 1).join(""));
        mathOperator = array[i];
        secondVal = parseFloat(array.slice((i + 1) , array.length).join(""));
        break;
        }
      }
    }
  calculateTheResult(firstVal , mathOperator , secondVal);
}

function calculateTheResult(firstExpression , operator , secondExpression) {
    let intermediateResult = 0;
  switch (operator) {
    case "+" :
        intermediateResult = firstExpression + secondExpression;
        res.innerText = intermediateResult;
        break;
        
    case "-" :
        intermediateResult = firstExpression - secondExpression;
        res.innerText = intermediateResult;
        break;    

    case "x" :
        intermediateResult = firstExpression * secondExpression;
        res.innerText = intermediateResult;
        break;
        
    case "/" :
        if (secondExpression !== 0) {
        intermediateResult = firstExpression / secondExpression;
        res.innerText = intermediateResult;
        break;
        } 
        
        else {
          res.innerText = "Error! Invalid input";
          break;  
        }
        
    case "%" :
        intermediateResult = firstExpression % secondExpression;
        res.innerText = intermediateResult;
        break;      
  }

}