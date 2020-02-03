class User {

    constructor(props) {
        this.props = props;
        }

        sum(a,b) {
            return a+b;
        
        }
    }
printName() ;{ // This is a method

	console.log(`{$this.props.userName}, id is ${this.props.id}`);
    }

var myUser = new User({userName:"Jessica", id:5})
    myUser.printName();
var myUser2 = new User({userName:"Amber", id:7});
    myUser2.printName();
var myUser3 = new User({userName:"Lucas", id:10});
    myUser3.printName();

// instantiate a class
myUser.printName();
function myFunction () {
    return this;
}

objLiteral = {
    a: 5,
    b: 6,
    c: myFunction //this is the entire script
}
objLiteral.newProperty = `Hello World` //can add a new property this way
console.log(objLiteral.c());
console.log(myFunction());
