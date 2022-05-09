class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }  

    getFullname(){ 
        console.log( `${this.firstname} ${this.lastname}, ` + this.age + " anos"); 
    }

    static speak(){ //Isso é um método estático
        console.log("Hello!");
    }
}

const person = new Person('Luiz', 'Guilherme' , 40);
Person.speak();