/**
 * npx ts-node-dev --respawn src/module-4.5/problem-4.ts
 * -------------------------------------------------------
 * 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.
 */

function reverseArray<T>(array:T[]):T[] {
    return array.reverse();
}
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
  
  const strings: string[] = ["apple", "banana", "cherry"];
  console.log(reverseArray(strings));  // Output: ["cherry", "banana", "apple"]
  