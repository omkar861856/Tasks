// Task 16:
// 1. display even numbers upto n number (ask user for number)
// 2. ask user for the input, whether char is vowel or consonant
// 3. count of even and odd number from 1 to 999
// 4. count occurrence of a particular character in a string (hello: count of l is 2):
// loops
// 5. sum and average of array elements [1, 9, 8];
// 6. largest number in an array (do with loops)

//1
const number = Number(prompt("Enter Number"))
const div = document.getElementsByTagName("div")[0]
for (let index = 0; index < number; index++) {
    const element = index % 2
    if(element!==0)continue
    let p = document.createElement("p");
    p.innerText=index;
    div.append(p);
}

//2
function isVowelOrConsonant() {
    const char = prompt('Enter a character:').toLowerCase();
    if (char.length !== 1 || !char.match(/[a-z]/i)) {
      console.log('Please enter a valid alphabetic character.');
      return;
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char)) {
      console.log(`${char} is a vowel.`);
    } else {
      console.log(`${char} is a consonant.`);
    }
  }
  
  isVowelOrConsonant();

  //3
  function countEvenAndOdd() {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 1; i <= 999; i++) {
      if (i % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    console.log(`Even numbers: ${evenCount}`);
    console.log(`Odd numbers: ${oddCount}`);
  }
  
  countEvenAndOdd();

  
//4
  function countCharacterOccurrence() {
    const str = prompt('Enter a string:');
    const charToCount = prompt('Enter a character to count:');
  
    if (!charToCount || charToCount.length !== 1) {
      console.log('Please enter a valid single character to count.');
      return;
    }
  
    let count = 0;
    for (const char of str) {
      if (char === charToCount) {
        count++;
      }
    }
  
    console.log(`The character "${charToCount}" occurs ${count} times in the string.`);
  }
  
  countCharacterOccurrence();
  
  //5
  function sumAndAverageOfArray() {
    const arr = [1, 9, 8];
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    const average = sum / arr.length;
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${average}`);
  }
  
  sumAndAverageOfArray();

  
  //6
  function findLargestNumber() {
    const arr = [1, 9, 8, 15, 3, 25, 7];
    let largest = arr[0];
  
    for (const num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
  
    console.log(`The largest number in the array is: ${largest}`);
  }
  
  findLargestNumber();
  