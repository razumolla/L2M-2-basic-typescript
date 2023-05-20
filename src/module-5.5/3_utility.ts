/**
 * Today: search utility type from doc 
 */

//pick

type Person = {
    name: string;
    email?: string;
    contactNo: string;
  };
  
//   type Email = Pick<Person,"email">;
type Contact = Pick<Person, "contactNo" | "email">;
  

//omit (pick er ulto) omit mane bad dibe
type Name = Omit<Person, "contactNo" | "email">;


/**
 * Partial
 */
//to make all the properties be optional type
type optional = Partial<Person>


/**
 * Required - partial er ulto
 */
type RequiredProperties = Required<Person>;


//
const person: Readonly<Person> = {
    name: "Persian",
    email: "abc@gmail.com",
    contactNo: "122222",
};
  
// person.name="asda" //we can assign value because person readonly property



/**
 * Record Type
 */
// type myObj = {
//   a: string;
//   b: string;
//   c: string;
// };

//we can simplyfy myObj type - using index signature
// type myObj = {
//     [key: string]: string;
// }


// Record   - 'a'| 'b' |'c"
type myObj = Record<"a" | "b" | "c" | "d", string>;

const obj: myObj = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
  };