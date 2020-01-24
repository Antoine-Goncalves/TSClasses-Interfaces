interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person {}

let user1: Greetable;

user1 = {
  name: "Antoine",
  age: 23,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
};

user1.greet("Hi there - I am");
