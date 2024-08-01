// given number is multiple of 3 or not
const isMultipleOf3 = function (number) {
    return number % 3 === 0
}

// check particular sub-word exist in a string or not e.g. check particular sub-word exist in a string or not e.g. i am learning js: 'js'
const subWordExist = function (str) {
    return str.includes("js")
} 

// calculate complex interest ((p/r )* t) / 100 ): take principle, rate and time from user

const complexInterest = function(p,t,r){
    const result=((p/r )* t) /100;
    return result;
} 