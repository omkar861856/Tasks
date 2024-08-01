console.log('A' - 1); // NaN (Not a Number), because you can't subtract a number from a non-numeric string

console.log('A' + 1); // 'A1', because '+' operator concatenates 'A' (string) with 1 (converted to string)

console.log(2 + '2' + '2'); // '222', because '+' operator concatenates all operands as strings

console.log('hello' + 'world' + 89); // 'helloworld89', concatenates all strings and number 89 (converted to string)

console.log('hello' - 'world' + 89); // NaN, because you can't subtract strings

console.log('hello' + 78); // 'hello78', because '+' operator concatenates 'hello' (string) with 78 (converted to string)

console.log('78' - 90 + '2'); // '-12', because '78' (converted to number) - 90 + '2' (string concatenation)

console.log(2 - '2' + 90); // 90, because '-' operator converts '2' (string) to number and performs subtraction

console.log(89 - '90' / 2); // 44, because '90' (string) is converted to number, then divided by 2 and subtracted from 89

console.log((true == false) > 2); // false, because (true == false) is false, and false is not greater than 2
