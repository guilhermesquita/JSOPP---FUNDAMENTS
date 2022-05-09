class Animal{
    constructor(name){
        this.name = name;
    }

    speak (){
        console.log(this.name + " made some noise!")
    }
}

class Dog extends Animal{ // a classe DOG recebe as heranças da class animal
    constructor(name){
        super(name) //o super chama o constructor
    }

    speak(){
        console.log(`${this.name} barked!`)
    }
}

const animal = new Animal("Simba");
const dog = new Dog('Bob')

animal.speak();
dog.speak()