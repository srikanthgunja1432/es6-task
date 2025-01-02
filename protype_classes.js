// const student = {
//     name: "John",
//     age: 20,
//     greet: function(){
//         console.log("Hello, my name is " + this.name )
//     }
// }
// student.greet()

function Dog(){

}
Dog.prototype.bark="hello"
console.log(Dog.prototype.bark)

//Classes
class Car{
    constructor(name,year){
        this.name=name
        this.year=year
    }
}
var ford=new Car("Ford",1992)
console.log(ford.name)