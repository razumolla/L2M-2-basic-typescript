"use strict";
// default parameter 
function add2(num1, num2 = 10) {
    return num1 + num2;
}
add2(4); // output:14
/**
 * Spread Operator
 */
const myFriends = ['chal', 'dhal', 'saki'];
const newFriends = ['moku', 'coku', 'doku'];
myFriends.push(...newFriends);
// console.log(myFriends);
/**
 * Rest Parameter
 */
// const bestFriends = (f1: string, f2: string, f3: string):void => {
//     console.log(f1);
//     console.log(f2);
//     console.log(f3);
// }
// console.log(bestFriends('Rakib', 'sakib', 'bob'));
const bestFriends = (...friends) => {
    friends.forEach(friend => console.log(friend));
};
// console.log(bestFriends('Rakib','sakib','bob','Topu'));
/**
 * Array and object Destructuring
 */
const mybestFriend = {
    FullName: 'Raki',
    age: 25
};
// const { FullName: string } = mybestFriend;
// console.log(string);
const { FullName } = mybestFriend;
console.log(FullName);
