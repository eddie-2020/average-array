// Algorithm - Calculate the average of the numbers in an array
// Example array: [1, 3, 9, 15, 90] 
// Expected output: 23.6

function averageArr(ar) {
  var n = array.length;
  var sum = 0;
  
  for (var i = 0; i < n; i++) {
    sum += ar[i];
  } 
  return sum / n;
} 

var ar = [1, 3, 9, 15, 90];
var avg = averageArr(ar);

console.log("Average: ", avg);
// Output => Average: 23.6 
