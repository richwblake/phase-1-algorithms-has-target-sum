function hasTargetSum(array, target) {
  // Write your algorithm here 

  // Brute force, O(n^2) Time Complexity - polynomial order

  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (array[i] + array[j] === target) return true;
  //   }
  // }
  // return false;


  // Alternative Single pass hash algo. Time Complexity: O(n) / Space Complexity: At least n space
  let numberStore = {};

  for (let i = 0; i < array.length; i++) {
    if (numberStore[target - array[i]]) {
      return true;
    }
    numberStore[array[i]] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
