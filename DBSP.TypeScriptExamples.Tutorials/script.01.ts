console.log("Hello TypeScript");

var greeting = function (message: string) {
  console.log(message);
};

var es6Greeting = function (message: string = "Hello", ...rest: string[]) {
  let result: string = message;
  if (rest) {
    for (let word of rest) {
      console.log(result += ` ${word} `);
    }
  }
  console.log(message);  
};

es6Greeting();

enum Color { Beige, Red, Blue };

class ColorManager {
  title: string;
  color: Color;

  constructor(title: string, color: Color) {
    this.title = title;
    this.color = color;
  }
  
  print() {
    console.log(`${this.title} - ${this.color}`);
  }
}

let testedColor = new ColorManager("The manager", Color.Beige);
testedColor.print();

let unknown: any = "strong";
console.log((unknown as string).toUpperCase());

interface myAddFunc {
  (number1: number,
    number2: number)
    : number
}

let myAdd: myAddFunc = function (a, b) {
  return a + b;
}

console.log(myAdd(1, 2));

interface strongSum {
  (n1: number, n2: number, n3: number): number
}

let strongSum: strongSum = function (a, b, c) {
  return a + b + c;
}

strongSum(1, 2, 3);

interface PrintFullNameParam {
  name: string;
  lastName: string; 
}

let printFullName = function (fullname: PrintFullNameParam): string {
  return fullname.name + " " + fullname.lastName;
};

interface EgContract {
  ({ name: string, age: number }) : string
}

let eg: EgContract = function (o) {
  return o.name + " " + o.age;
}








