function foo(x){
  if(x === null || x === undefined){
    return 0; // Handle null and undefined cases
  }
  if(typeof x === 'string' || Array.isArray(x)){
    return x.length; // Access length only if x is a string or array
  } else {
    return 0; // Or handle other cases appropriately
  }
}