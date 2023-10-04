class Person{
    constructor(name,age,gender,occupation){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.occupation=occupation;
    }
    showPersonDetails(){
        console.log(`Person name is ${this.name}, age is ${this.age}, gender is ${this.gender} and occupation is ${this.occupation}`)
    }

    updateAge(newAge){
        this.age=newAge
    }
}

let person1 = new Person("Mithra","30","Female","IT");
let person2 = new Person("Sridhar","31","Male","IT");

person1.showPersonDetails();
person2.showPersonDetails();
let newAge=person2.updateAge="50";
console.log(newAge)
person2.showPersonDetails();
