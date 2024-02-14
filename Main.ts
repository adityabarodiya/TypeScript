interface Person{
    name: string,
    age: number
}

const p: Person = {
    name: 'John',
    age: 30
}

const greet = (person: Person) => {
    console.log(`Hello ${person.name} from ${person.age}`);
}

greet(p);