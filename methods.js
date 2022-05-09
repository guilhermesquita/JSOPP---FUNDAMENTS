class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }  

    getFullname(){ //Isso é um método
        console.log( `${this.firstname} ${this.lastname}, ` + this.age + " anos"); 
    }
}

const person = new Person('Luiz', 'Guilherme' , 40)
person.getFullname()