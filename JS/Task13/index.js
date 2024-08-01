
// 1. Create Objects for Animal and Car
const animal = {
    type: 'Dog',
    breed: 'Labrador',
    age: 5
};
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

document.getElementById('animal').textContent = JSON.stringify(animal, null, 2);
document.getElementById('car').textContent = JSON.stringify(car, null, 2);

// 2. Find Duplicates in a String (Optional)
function findDuplicates(str) {
    const charArray = str.split('');
    const duplicates = [];
    const counts = {};

    charArray.forEach(char => {
        counts[char] = (counts[char] || 0) + 1;
        if (counts[char] > 1 && !duplicates.includes(char)) {
            duplicates.push(char);
        }
    });

    return duplicates;
}

const duplicates = findDuplicates("programming");
document.getElementById('duplicates').textContent = `Duplicates: ${duplicates.join(', ')}`;

// 3. Reverse a String (Using Array Method)
function reverseString(str) {
    return str.split('').reverse().join('');
}

const reversedString = reverseString("hello");
document.getElementById('reversedString').textContent = `Reversed String: ${reversedString}`;

// 4. Find the Highest and Lowest Value in an Array
const numbers = [10, 5, 8, 20, 15];
const highest = Math.max(...numbers);
const lowest = Math.min(...numbers);

document.getElementById('highestLowest').textContent = `Highest: ${highest}, Lowest: ${lowest}`;

// 5. Sorting of an Array (Optional)
const sortedArray = numbers.slice().sort((a, b) => a - b);
document.getElementById('sortedArray').textContent = `Sorted Array: ${sortedArray.join(', ')}`;

// 6. Display First 3 Elements in an Array in UI
const items = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const firstThreeItems = items.slice(0, 3);
const firstThreeList = document.getElementById('firstThree');

firstThreeItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    firstThreeList.appendChild(li);
});

// 7. Remove 4th Element and Add 2 Elements in Its Place
const arr = [1, 2, 3, 4, 5, 6];
const newElements = [7, 8];

arr.splice(3, 1, ...newElements);

document.getElementById('modifiedArray').textContent = `Modified Array: ${arr.join(', ')}`;
