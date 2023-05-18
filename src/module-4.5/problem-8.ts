// /**
//  * Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.
//  */

// abstract class Shape {
//     abstract calculateArea(): number;
//   }
  
//   class Rectangle extends Shape {
//     constructor(private width: number, private height: number) {
//       super();
//     }
  
//     calculateArea(): number {
//       return this.width * this.height;
//     }
//   }
  
//   class Circle extends Shape {
//     constructor(private radius: number) {
//       super();
//     }
  
//     calculateArea(): number {
//       return Math.PI * this.radius ** 2;
//     }
//   }
  
//   // Test the classes
//   const rectangle = new Rectangle(5, 10);
//   console.log(rectangle.calculateArea());  // Output: 50
  
//   const circle = new Circle(3);
//   console.log(circle.calculateArea());  // Output: 28.274333882308138
  