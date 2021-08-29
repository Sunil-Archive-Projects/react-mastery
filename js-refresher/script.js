// ----------------------------------------------------------------
//  Arrow functions
// ----------------------------------------------------------------

//normal
function callMe(name) {
    console.log('Call me from the JS method' + name );
}

// ES6 method
let callMeNew = (name) => {
    console.log('Printing out Name :' +name);
}

callMeNew('Linus');