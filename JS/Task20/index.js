// . get the value of the first element in an array that has value greater than 20
//  2. get the value of the first element in an array that has value less than 20
//  3. filter data based on a id(property) in an array of objects: pick any random id
//  value
//  4. check element is odd or even in an array [90, 89, 56, 45]
//  5. create a class Book: type_of_book(), no. of pages, type of pages, author
//  6. create a class Animal: walk(), eat(), climb(), gender, name, disease


//1
function getFirstGreaterThanTwenty(arr) {
    return arr.find(num => num > 20);
  }
  
  const numbers1 = [15, 10, 25, 30, 5];
  const firstGreaterThanTwenty = getFirstGreaterThanTwenty(numbers1);
  console.log(`First number greater than 20 is: ${firstGreaterThanTwenty}`); // Output: 25
  


//2
function getFirstLessThanTwenty(arr) {
    return arr.find(num => num < 20);
  }
  
  const numbers2 = [25, 30, 15, 10, 5];
  const firstLessThanTwenty = getFirstLessThanTwenty(numbers2);
  console.log(`First number less than 20 is: ${firstLessThanTwenty}`); // Output: 15

  
//3
function filterById(arr, id) {
    return arr.filter(obj => obj.id === id);
  }
  
  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  const filteredData = filterById(data, 2);
  console.log('Filtered data:', filteredData); 

//4
function checkOddOrEven(arr) {
    return arr.map(num => ({
      number: num,
      type: num % 2 === 0 ? 'Even' : 'Odd'
    }));
  }
  
  const numbers3 = [90, 89, 56, 45];
  const oddOrEvenResults = checkOddOrEven(numbers3);
  oddOrEvenResults.forEach(result => {
    console.log(`Number ${result.number} is ${result.type}.`);
  });

  
//5
class Book {
    constructor(type, pages, pageType, author) {
      this.type = type;
      this.pages = pages;
      this.pageType = pageType;
      this.author = author;
    }
  
    typeOfBook() {
      return `This is a ${this.type} book.`;
    }
  
    getNumberOfPages() {
      return `Number of pages: ${this.pages}.`;
    }
  
    getPageType() {
      return `Type of pages: ${this.pageType}.`;
    }
  
    getAuthor() {
      return `Author: ${this.author}.`;
    }
  }
  
  // Example usage:
  const myBook = new Book('Novel', 300, 'Glossy', 'John Doe');
  console.log(myBook.typeOfBook()); 
  console.log(myBook.getNumberOfPages()); 
  console.log(myBook.getPageType()); 
  console.log(myBook.getAuthor());
  

  //6
  class Animal {
    constructor(name, gender, disease) {
      this.name = name;
      this.gender = gender;
      this.disease = disease;
    }
  
    walk() {
      return `${this.name} is walking.`;
    }
  
    eat() {
      return `${this.name} is eating.`;
    }
  
    climb() {
      return `${this.name} is climbing.`;
    }
  
    getGender() {
      return `Gender: ${this.gender}.`;
    }
  
    getName() {
      return `Name: ${this.name}.`;
    }
  
    getDisease() {
      return `Disease: ${this.disease}.`;
    }
  }
  
  const myAnimal = new Animal('Lion', 'Male', 'None');
  console.log(myAnimal.walk()); 
  console.log(myAnimal.eat()); 
  console.log(myAnimal.climb()); 
  console.log(myAnimal.getGender()); 
  console.log(myAnimal.getName()); 
  console.log(myAnimal.getDisease()); 
  