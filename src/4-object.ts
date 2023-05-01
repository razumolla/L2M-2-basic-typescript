/**
 * class 2.4
 * object
 * 
 */
// const user2: {
//     name: string;
//     age: number;
//     isMarid: boolean;
//     wife?: string;
// } = {
//     name: "razu",
//     age: 24,
//     isMarid: false,
//     // wife: "sakina"

// }

/**
 * Literal type
 */

// const user2: {
//     company: 'xyz'; //fixed value
//     name: string;
//     age: number;
//     isMarid: boolean;
//     wife?: string;
// } = {
//     company: 'xyz', //we can't change fixed value
//     name: "razu",
//     age: 24,
//     isMarid: false,
//     // wife: "sakina"

// }
// user2.company='abc'


/**
 * Optional type
 */

const user3: {
    readonly company: string; //fixed value
    name: string;
    age: number;
    isMarid: boolean;
    wife?: string;
} = {
    company: 'xyz', //we can't change fixed value
    name: "razu",
    age: 24,
    isMarid: false,
    // wife: "sakina"

}

// user3.company= 'sdfa' // we can assign value