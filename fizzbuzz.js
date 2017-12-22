document.addEventListener('DOMContentLoaded', function() {

  // Output:
  function showResult(element) {
    element.style.backgroundColor = 'salmon';
    element.style.color = 'black';
    element.style.fontSize = '1em';
    element.style.fontWeight = '400';
    element.style.letterSpacing = '1px';
  }
  function itsFizz(element) {
    element.innerText = 'Fizz!';
    showResult(element);
  };
  function itsBuzz(element) {
    element.innerText = 'Buzz!';
    showResult(element);
  };
  function itsFizzBuzz(element) {
    element.innerHTML = 'Fizz-<br>Buzz!';
    showResult(element);
  };
  function itsJustaDud(element) {
    element.style.backgroundColor = 'lightgrey';
  };

  // Math:
  function doFizzBuzzMath(squareValue, element) {
    if (squareValue % 15 === 0) {
      itsFizzBuzz(element);
    } else if (squareValue % 5 === 0) {
      itsBuzz(element);
    } else if (squareValue % 3 === 0) {
      itsFizz(element);
    } else {
      itsJustaDud(element);
    }
  };

  // Create array of all number squares:
  var numbers = document.querySelectorAll('.number');

  // Create event listeners for each:
  for (var i = 0; i < numbers.length; i++) {
    var numClick = numbers[i].addEventListener('click', function() {
      var squareValue = parseInt(this.innerText);
      var element = this;
      doFizzBuzzMath(squareValue, element);
    });
  }

// end of 'DOMContentLoaded' wrapper:
});
