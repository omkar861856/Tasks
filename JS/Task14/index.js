//1
function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
  }
  
  const result = multiplyThreeNumbers(2, 3, 4);
  console.log(`The product is: ${result}`); 

  //2
  function divideTwoNumbers(a, b) {
    if (b === 0) {
      return 'Division by zero is undefined';
    }
    return a / b;
  }
  

  const divisionResult = divideTwoNumbers(10, 2);
  console.log(`The result is: ${divisionResult}`); 
  

  //