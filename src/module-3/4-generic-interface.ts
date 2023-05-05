/**
 * generic Interface
 */

interface CrushInterface<T,U=null>{
    name: string;
    husband: T;
    wife?: U;
}
const crush1: CrushInterface<boolean> = {
    name: 'Pakhi',
    husband: true
}
const crush2: CrushInterface<string> = {
    name: 'Kate winslet',
    husband: "Razu"
}

interface husbandInterface{
    name: string,
    salary: number
}
const crush3: CrushInterface<husbandInterface> = {
    name: 'Kate winslet',
    husband: {
        name: "Razu",
        salary: 150000,
    }
}
/**
 * bad practics:CrushInterface<object,object>
 * Good practics: CrushInterface<personInterface,personInterface>
 */

interface personInterface {name:string,age:number}
// const crush4: CrushInterface<{name:string,age:number},{name:string,age:number}> = {
const crush4: CrushInterface<personInterface,personInterface> = {
    name: 'Kate winslet',
    husband: {
        name: 'Raja',
        age:25
    },
    wife: {
        name: "Rani",
        age:20
    }
}