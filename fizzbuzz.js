<<<<<<< HEAD
console.log('hello');

function fizzbuzz(n) {
  return n;
}
console.log('fizzbuzz');
=======
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
>>>>>>> 5d4d11fec4082e11ebeef36bd48ada3cd585dc10
