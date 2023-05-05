/**
 * Arrow function
 */
const createArray1 = (param:string):string[] => {
    return [param];
}

const result1 = createArray1('raju');

/**
 * Generic with arrow function
 * Generic with normal function
 */
const createArray2 = <T>(param:T):T[] => {
    return [param];
}
const result2 = createArray2<string>('raju');
const result3 = createArray2<boolean>(true);
//normal function
function createArray22 <T>(param:T):T[] {
    return [param];
}

type nameType = {
    name: string
}
const result5 = createArray2<nameType>({ name: 'Bangladesh' });

/**
 * we can use multiple generic array
 */
const createArray3 = <X,Y>(param1:X,param2:Y):[X,Y] => {
    return [param1,param2];
}
const result6 = createArray3<string, string>('raju', 'I love bangladesh');
const result7 = createArray3<boolean, Array<string>>(false, ['I love bangladesh', 'I also love language']);




/**
 * spread operator
 */

const crush = 'Khai khai';
const myInfo = {
    name: 'Razu',
    age: 125,
    salary:200000,
}
// const newData = { ...myInfo, crush };

// const addMeInMyCrashMind = (myInfo:object) => {
//     const crush = 'Khai khai';
//     const newData = { ...myInfo, crush }
//     return newData;
// }
// const result8 = addMeInMyCrashMind(myInfo); //only we get result8.crush , we can not get other property



const addMeInMyCrashMind = <T>(myInfo:T) => {
    const crush = 'Khai khai';
    const newData = { ...myInfo, crush }
    return newData;
}
const result8 = addMeInMyCrashMind(myInfo);
// result8.age/name/age/salary - we get every property using generic type