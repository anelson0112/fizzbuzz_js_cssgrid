document.addEventListener('DOMContentLoaded', function() {

  // Output:
  function showResult() {
    number.style.backgroundColor = 'salmon';
    number.style.color = 'black';
    number.style.fontSize = '1em';
    number.style.fontWeight = '400';
    number.style.letterSpacing = '1px';
  }
  function itsFizz() {
    number.innerText = 'Fizz!';
    console.log('The square should now say Fizz.');
    showResult();
    console.log('The square should change colour.');
  };
  function itsBuzz() {
    number.innerText = 'Buzz!';
    console.log('The square should now say Buzz.');
    showResult();
    console.log('The square should change colour.');
  };
  function itsFizzBuzz() {
    number.innerHTML = 'Fizz-<br>Buzz!';
    console.log('The square should now say FizzBuzz.');
    showResult();
    console.log('The square should change colour.')
  };
  function itsJustaDud() {
    number.style.backgroundColor = 'lightgrey';
    console.log('The square should turn grey.');
  };

  // Math:
  function fbMath(theNumber) {
    if (theNumber % 15 === 0) {
      console.log('We have a FizzBuzz!');
      itsFizzBuzz(this);
    } else if (theNumber % 5 === 0) {
      console.log('We have a Buzz!');
      itsBuzz(this);
    } else if (theNumber % 3 === 0) {
      console.log('We have a Fizz!');
      itsFizz(this);
    } else {
      console.log('It is neither a Fizz nor a Buzz, let alone a FizzBuzz.');
      itsJustaDud(this);
    }
  };

  // General number variable:
  var number = document.querySelector('#num3');

  // Event listener:
  var numClick = number.addEventListener('click', function() {
    console.log('Click detected.');
    var theNumber = parseInt(this.innerText);
    console.log('I think you clicked on number ' + theNumber + '.');
    fbMath(theNumber);
  });

// end of 'DOMContentLoaded' wrapper:
});
