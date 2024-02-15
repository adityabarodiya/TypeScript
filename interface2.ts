interface Person {
    name: string;
    age: number;
    greet: () => void;
}

const person: Person = {
    name: "Alice",
    age: 30,
    greet: () => {
        console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
