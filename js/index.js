

var jsOutput = document.querySelector('#js-output');
var keys = document.querySelectorAll('.num-button');
var evalCheck = false;
var evalHolder = 0;
var symCount = false;

for (var i=0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var numVal = this.innerHTML;
    var input = document.querySelector('#results-text');
    var inLastChar = input.innerHTML.length;
    var numStr = input.innerHTML; 
     
    if (numVal === "C") {
      input.innerHTML = "";
      evalHolder = ""; 
      evalCheck = false;
      symCount = false;
      
      
    } else if (numVal === "=") {
    
      numStr = numStr.replace(/x/g, '*').replace(/÷/g, '/');
      if (eval(numStr) === Infinity) {
        input.innerHTML = "Error: Can't divide by zero. Please try again.";
      } else {
        input.innerHTML = eval(numStr);  
      }
      evalCheck = true;
      evalHolder = input.innerHTML;
               
      
    } else if (evalCheck === true) { //so you can continue with equation    after a eval
      
        if (numVal !== "=") {
          input.innerHTML += numVal;
          evalCheck = false;
        } else {
          input.innerHTML = "";
          input.innerHTML +=numVal;
          evalCheck = false;
        }
      
     } else if (input.innerHTML === "") {
      
        if (parseInt(numVal) || numVal === "0") {
           input.innerHTML += numVal;
        } 
       
     } else if (parseInt(numVal) || numVal ==="0" ) {
       input.innerHTML +=numVal;
       symCount = false;
     } else if(symCount === false) {
       
         input.innerHTML += numVal;
         symCount = true;
       
     }

   // JS output for testing
    //jsOutput.innerHTML = "Last char = " +parseInt(input.innerHTML.charAt(inLastChar)) + " | " + "symCount = " + symCount + " | Length = "+input.innerHTML.length;
  };
}