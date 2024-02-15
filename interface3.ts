interface Animal{
    name: string,
    age: number,
    speak: (sound: string) => void;
}

class Dog implements Animal{
    constructor(public name: string, public age: number){

    }
    speak(sound: string){
        console.log(`${this.name} says ${sound}`);
    }
}

const dog: Dog = new Dog('Luna', 30);
dog.speak('woof');
