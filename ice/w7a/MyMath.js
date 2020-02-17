function Sum (a, b) {
let result = undefined
if(typeof a == "number") {
  result = a + b
}
return result;

};

function AddList(a, b, c, d) {
  let result = undefined
  array = [1,2,3,4];
    result = a + b + c + d
  return result;
}

//console.log(Sum(2,3)== 5);
//console.log(Sum(10,20)==30);

export { Sum };



