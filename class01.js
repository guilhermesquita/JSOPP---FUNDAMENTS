//SEMPRE RETORNARÁ UM OBJETO

class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }  
}

const person = new Person('Luiz', 'Guilherme' , 40)
console.log(person)