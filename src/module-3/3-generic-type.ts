/**
 * generic type means genaralise
 */

// const rollNumbers: number[] = [1, 2, 3];
// const rollNumbers2: string[] = ['1', '2', '3'];

// const rollNumbers: Array<number> = [1, 2, 3];
// const rollNumbers2: Array<string> = ['1', '2', '3'];
// const rollNumbers3: Array<boolean> = [true, false];

// const userNameAndRollNumbers: Array<{ name: string, roll: number }> = [
//     {
//         name: 'Razu',
//         roll:1
//     },
//     {
//         name: 'Jodu',
//         roll:2
//     }
// ]

/**
 * we decare type again and again, so we can solve this problem using -> generic type
 */
type GenericArray<T>=Array<T>

const rollNumbers: GenericArray<number> = [1, 2, 3];
const rollNumbers2: GenericArray<string> = ['1', '2', '3'];
const rollNumbers3: GenericArray<boolean> = [true, false];

type nameRollType = {
    name: string,
    roll: number 
}

const userNameAndRollNumbers: GenericArray<nameRollType> = [
    {
        name: 'Razu',
        roll:1
    },
    {
        name: 'Jodu',
        roll:2
    }
]

/**
 * generic type can get multiple different type parameter
 */
type GenericTouple<X, Y> = [X, Y];
const relation: GenericTouple<string, string> = ['Razu', 'Pakhi'];

const reationWithSalary: GenericTouple<object, string> = [
    {
        name: 'Razu Molla',
        salary:100000
    },
    "sona pakhi"
]
/**
 * we can't get object like upper(reationWithSalary) example, here we can provide wrong type data
 * so our solution like-
 */


// const reationWithSalary2: GenericTouple<{ name: string, salary: number }, string> = [
//     {
//         name: 'Razu Molla',
//         salary: 100000
//     },
//     "sona pakhi"
// ];

/**
 * we need to define type-
 * we can defile object using-> interface type
 */

// type relationWithSalatyType = {
//     name: string,
//     salary: number
// }
interface relationWithSalatyType {
    name: string,
    salary: number
}

const reationWithSalary2: GenericTouple<relationWithSalatyType, string> = [
    {
        name: 'Razu Molla',
        salary: 100000
    },
    "sona pakhi"
];
