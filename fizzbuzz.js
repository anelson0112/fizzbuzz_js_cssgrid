document.addEventListener('DOMContentLoaded', function() {

  // Output:
  function bingo() {
    this.style.backgroundColor = 'red';
    this.style.fontSize = '1em';
    this.style.fontWeight = '400';
  }
  function itsFizz() {
    this.innerText = 'fizz';
    console.log('The square should say fizz.');
    bingo();
    console.log('The square should be red.');
  };
  function itsBuzz() {
    this.innerText = 'buzz';
    console.log('The square should say buzz.');
    bingo();
    console.log('The square should be red.');
  };
  function itsFizzBuzz() {
    this.innerText = 'fizzbuzz';
    console.log('The square should say fizzbuzz.');
    bingo();
    console.log('The square should be red.');
  };
  function itsJustaDud() {
    console.log('The square text should not change.');
    this.style.backgroundColor = 'lightgrey';
    console.log('The square should be grey.');
  };

  // Math:
  function fbMath(i) {
    if (theNumber % 3 === 0) {
      console.log('Fizz!');
      itsFizz(this);
    } else if (theNumber % 5 === 0) {
      console.log('Buzz!');
      itsBuzz(this);
    } else if (theNumber % 15 === 0) {
      console.log('FizzBuzz!');
      itsFizzBuzz(this);
    } else {
      console.log('Just a dud.');
      itsJustaDud(this);
    }
  };

  // General number variable:
  var number = document.querySelectorAll('.number');

  // Event listener:
  var numClick = number.addEventListener('click', function() {
    console.log('Click detected.');
    var theNumber = parseInt(this.innerText);
    console.log('I think you clicked on square number ' + theNumber + '.');
    fbMath(theNumber);
  });

// end of 'DOMContentLoaded' wrapper:
});
