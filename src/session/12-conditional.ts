/**
 *  npx ts-node-dev --respawn src/session/12-conditional.ts
 * --------------------------------------------------------
 */

type TypeA = string;
type TypeB = TypeA extends boolean ? boolean : null;
type TypeC = number;
type TypeD = boolean;

//number extends number => number
//string extends number  (false) => number extends string (false)=> null 

type TypeE = TypeA extends number ? number : TypeC extends string ? string : null;
