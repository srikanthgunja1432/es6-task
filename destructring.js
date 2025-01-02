const student={
    name:"srikanth",
    age:20,
    marks:90
}

var { name , age }=student
console.log(name)

var { name ,  marks }=student
console.log(marks)

var {name,...other}=student
console.log(other)

var {name:fname ,marks:grade}=student
console.log(grade)

var {name:fname='Unknown' ,marks:grade}=student
console.log(fname)

var {name ,age,...rem}=student
console.log(rem)


const cars=['Ford','Audi','Tata','Jaguar','MG']
var [car1,car2,car3,car4,car5]=cars
console.log(car1)
var [car,...cars_list]=cars
console.log(cars_list)
var [fcar, ,lcar]=cars
console.log(lcar)
var [carr='Unknown',...carss]=cars
console.log(carr)