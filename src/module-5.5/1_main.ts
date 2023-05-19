/**
 * npx ts-node-dev --respawn src/module-5.5/1_main.ts
 * ----------------------
 * most popular
 * ------------
 * common js
 * ejs
 */
// import { add as addTwo, substract, multiply } from './1_module'
// import * as Methods from './1_module' //Its call wile card import
// import average, {add as addTwo, substract, multiply} from './1_module' // default export average and others normal export

// import methods from './1_module'



//import from different dile
// import addTwo from "./utils/add"
// import subs from "./utils/substract"
// import multi from "./utils/multiply"

// we can reduce repetitive work by index.ts import and default export
import methods from './utils/index'



const add = (param1:number,param2:number,param3:number): number => {
    return param1 + param2 + param3;
}

// const result = Methods.add(5, 6);
// const result2 = average(5, 6);
const result2 = methods.addTwo(5, 6);

