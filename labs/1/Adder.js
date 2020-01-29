class Adder {
    constructor(a,b){
    this.a = a;
    this.b = b;
    }
    sum(a,b){
        return(this.a + this.b);
        }
    render(){
        let calculation = `The sum of ${this.a} and ${this.b} is ${this.sum()}`
        console.log(calculation);
    }
}
module.exports = Adder;
