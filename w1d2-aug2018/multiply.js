// - input 2 numbers between 6 and 10

function oneParam(which) {
  return process.argv.slice(2)[which]
}

var left = oneParam(0);
var right = oneParam(1);

// console.log(left)
// console.log(right)

//  - group fingers in left hand to represent first number according to this mapping
//    - thumb = 6
//    - index = 7
//    - middle = 8
//    - ringer = 9
//    - pinky = 10

function calcGrouped(n) {
  return n - 5
}

// var leftGrouped = calcGrouped(left)

// //    - do the same with my right hand for the second number

// var rightGrouped = calcGrouped(right)

// console.log(leftGrouped)
// console.log(rightGrouped)

//    - join those 2 groups of fingers

var grouped = (calcGrouped(left) + calcGrouped(right)) * 10

//    - count and multiply by 10 <-- RESULT 1
//    - count my left fingers left floating

function calcFloating(n) {
  return 10 - n
}

// var leftFloating = calcFloating(leftGrouped)
// var rightFloating = calcFloating(rightGrouped)



//    - and muiltiply them by the fingers left floating in my right hand

var floating = calcFloating(left) * calcFloating(right)

//    - then ADD that number to RESULT 1

var final = grouped + floating

console.log('final', final)
