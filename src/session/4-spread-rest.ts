// /**
//  *  npx ts-node-dev --respawn src/session/4-spread-rest.ts
//  */

// //spread operator

// const arr1: string[] = ['abdur', 'rahim', 'korim'];
// const arr2: string[] = ['kaiym', 'karem', 'jonson'];

// // arr1.push(...arr2)
// // console.log(...arr1);


// // array destaructuring
// const [hero1, hero2, hero3] = arr1;
// /**
//  * hero1 = abdur
//  * hero2 = rahim
//  * hero3 = korim
//  */
// console.log(hero1, hero2, hero3);







// //rest parameter
// // const totalScored = (score: number, score1: number, score2: number):number => {
// //     return score + score1 + score2;
// // }
// const totalScore = (...score: number[]): number => {
//     let sum: number = 0;
//     score.map(n => {
//         sum = sum + n;
//     })
//     return sum; 
// }
// // console.log(totalScore(1, 2, 8, 6, 3, 7, 3));


// const heroString = (...strings: string[]): void => {
//     strings.map(str => {
//         console.log(str);
//     })
// }
// //  heroString('programming', 'hero', 'apollo', 'web');