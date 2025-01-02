/*
The let keyword was introduced in ES6 (2015)
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope
*/
var x = 10
{
    let x=20
    console.log(x)
}

/*
The const keyword was introduced in ES6 (2015)
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope
*/
console.log(x)
{
    const x=23
    console.log(x)
}
