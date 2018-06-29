function fizzbuzz(int) {
  if(int % 15 === 0) {
    return 'fizzbuzz';
  } else if(int % 3 === 0) {
    return 'fizz';
  } else if(int % 5 === 0) {
    return 'buzz';
  } else {
    return 'error';
  }
}
console.log(fizzbuzz(10));
