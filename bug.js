function foo(x){
  if(x === null || x === undefined){
    return 0; // Handle null and undefined cases
  }
  return x.length; //This will cause an error if x is not an array or string
}