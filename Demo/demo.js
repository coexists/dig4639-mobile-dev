class Pet {
    constructor(props) {
        this.props = props;
    }
    getName() {
        return this.props.name;
    }
    getSpecies() {
        return this.props.species;
    }
    getSpeech() {
        return "I sound like this!";
    }
    getIdentity = () => {
        console.log(this);
    }
    /*getSum = (a,b) => a + b {
    return a + b;
    } */
}

class Cat extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "Cat";
    }
    getSpeech() {
        return super.getSpeech() +  " MEOWWWWWWW";
    }
}

class Dog extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "Dog";
    }
    getSpeech() {
        return super.getSpeech() + " BWAHHHHHHHHHHHHHH";
    }
}
function sayName(pet) {
        console.log(`My name is ${pet.getName()}, and I am a ${pet.getSpecies()}`);
        console.log(`${pet.getSpeech()}`);
}


var myPet = new Dog({name:"Hank"});
sayName(myPet);
myPet.getIdentity();
// Assign the Method getIdentity to the variable myIdentity
var myIdentity = myPet.getIdentity;
// Call the new function
myIdentity();
myPet.getIdentity();

var myDog = new Cat({name:"KITTY"});
sayName(myDog);
myDog.getIdentity();
var myIdentity = myDog.getIdentity;
myIdentity();
myDog.getIdentity();
// console.log(myDog.getSum(10,20))
