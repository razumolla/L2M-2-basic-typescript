// /**
//  * Run: npx ts-node-dev --respawn src/module-4/7-static.ts
//  */


// // class Counter {
// //     counter: number;
// //     constructor(counter: number) {
// //         this.counter = counter;
// //     }
// //     increment(): number {
// //         return (this.counter = this.counter + 1);
// //     }
// //     decrement(): number {
// //         return (this.counter = this.counter - 1);
// //     }
// // }
  
// // const instance1 = new Counter(0);
// // const instance2 = new Counter(1);
// // console.log(instance1.increment()); // 0-1
// // console.log(instance2.increment()); // 1-2
  

// /**
//  * Solution: We can do that using static
//  */
// class Counter {
//     static counter: number = 0;
  
//     static increment(): number {
//       return (Counter.counter = Counter.counter + 1);
//     }
//     static decrement(): number {
//       return (Counter.counter = Counter.counter - 1);
//     }
//   }
//   console.log(Counter.increment()); // 0-1
//   console.log(Counter.increment()); // 1-2
//   console.log(Counter.increment()); // 2-3