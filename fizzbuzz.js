document.addEventListener('DOMContentLoaded', function() {

  // Variables to represent each number:
  // var sq1 = document.querySelector('#num1');
  // var sq2 = document.querySelector('#num2');
  // var sq3 = document.querySelector('#num3');
  // var sq4 = document.querySelector('#num4');
  // var sq5 = document.querySelector('#num5');
  // var sq6 = document.querySelector('#num6');
  // var sq7 = document.querySelector('#num7');
  // var sq8 = document.querySelector('#num8');
  // var sq9 = document.querySelector('#num9');
  // var sq10 = document.querySelector('#num10');
  // var sq11 = document.querySelector('#num11');
  // var sq12 = document.querySelector('#num12');
  // var sq13 = document.querySelector('#num13');
  // var sq14 = document.querySelector('#num14');
  // var sq15 = document.querySelector('#num15');
  // var sq16 = document.querySelector('#num16');
  // var sq17 = document.querySelector('#num17');
  // var sq18 = document.querySelector('#num18');
  // var sq19 = document.querySelector('#num19');
  // var sq20 = document.querySelector('#num20');
  // var sq21 = document.querySelector('#num21');
  // var sq22 = document.querySelector('#num22');
  // var sq23 = document.querySelector('#num23');
  // var sq24 = document.querySelector('#num24');
  // var sq25 = document.querySelector('#num25');
  // var sq26 = document.querySelector('#num26');
  // var sq27 = document.querySelector('#num27');
  // var sq28 = document.querySelector('#num28');
  // var sq29 = document.querySelector('#num29');
  // var sq30 = document.querySelector('#num30');
  // var sq31 = document.querySelector('#num31');
  // var sq32 = document.querySelector('#num32');
  // var sq33 = document.querySelector('#num33');
  // var sq34 = document.querySelector('#num34');
  // var sq35 = document.querySelector('#num35');
  // var sq36 = document.querySelector('#num36');
  // var sq37 = document.querySelector('#num37');
  // var sq38 = document.querySelector('#num38');
  // var sq39 = document.querySelector('#num39');
  // var sq40 = document.querySelector('#num40');
  // var sq41 = document.querySelector('#num41');
  // var sq42 = document.querySelector('#num42');
  // var sq43 = document.querySelector('#num43');
  // var sq44 = document.querySelector('#num44');
  // var sq45 = document.querySelector('#num45');
  // var sq46 = document.querySelector('#num46');
  // var sq47 = document.querySelector('#num47');
  // var sq48 = document.querySelector('#num48');
  // var sq49 = document.querySelector('#num49');
  // var sq50 = document.querySelector('#num50');
  // var sq51 = document.querySelector('#num51');
  // var sq52 = document.querySelector('#num52');
  // var sq53 = document.querySelector('#num53');
  // var sq54 = document.querySelector('#num54');
  // var sq55 = document.querySelector('#num55');
  // var sq56 = document.querySelector('#num56');
  // var sq57 = document.querySelector('#num57');
  // var sq58 = document.querySelector('#num58');
  // var sq59 = document.querySelector('#num59');
  // var sq60 = document.querySelector('#num60');
  // var sq61 = document.querySelector('#num61');
  // var sq62 = document.querySelector('#num62');
  // var sq63 = document.querySelector('#num63');
  // var sq64 = document.querySelector('#num64');
  // var sq65 = document.querySelector('#num65');
  // var sq66 = document.querySelector('#num66');
  // var sq67 = document.querySelector('#num67');
  // var sq68 = document.querySelector('#num68');
  // var sq69 = document.querySelector('#num69');
  // var sq70 = document.querySelector('#num70');
  // var sq71 = document.querySelector('#num71');
  // var sq72 = document.querySelector('#num72');
  // var sq73 = document.querySelector('#num73');
  // var sq74 = document.querySelector('#num74');
  // var sq75 = document.querySelector('#num75');
  // var sq76 = document.querySelector('#num76');
  // var sq77 = document.querySelector('#num77');
  // var sq78 = document.querySelector('#num78');
  // var sq79 = document.querySelector('#num79');
  // var sq80 = document.querySelector('#num80');
  // var sq81 = document.querySelector('#num81');
  // var sq82 = document.querySelector('#num82');
  // var sq83 = document.querySelector('#num83');
  // var sq84 = document.querySelector('#num84');
  // var sq85 = document.querySelector('#num85');
  // var sq86 = document.querySelector('#num86');
  // var sq87 = document.querySelector('#num87');
  // var sq88 = document.querySelector('#num88');
  // var sq89 = document.querySelector('#num89');
  // var sq90 = document.querySelector('#num90');
  // var sq91 = document.querySelector('#num91');
  // var sq92 = document.querySelector('#num92');
  // var sq93 = document.querySelector('#num93');
  // var sq94 = document.querySelector('#num94');
  // var sq95 = document.querySelector('#num95');
  // var sq96 = document.querySelector('#num96');
  // var sq97 = document.querySelector('#num97');
  // var sq98 = document.querySelector('#num98');
  // var sq99 = document.querySelector('#num99');
  // var sq100 = document.querySelector('#num100');

  // Output:
  function itsFizz() {
    this.innerText = 'fizz';
    console.log('You should see fizz.');
    this.style.backgroundColor = 'red';
    console.log('The square should be red.');
  };
  function itsBuzz() {
    this.innerText = 'buzz';
    console.log('You should see buzz.');
    this.style.backgroundColor = 'red';
    console.log('The square should be red.');
  };
  function itsFizzBuzz() {
    this.innerText = 'fizzbuzz';
    console.log('You should see fizzbuzz.');
    this.style.backgroundColor = 'red';
    console.log('The square should be red.');
  };
  function itsJustaDud() {
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
  var number = document.querySelector('.number');

  // Event listener:
  var numClick = number.addEventListener('click', function() {
    console.log('Click detected.');
    var theNumber = parseInt(this.innerText);
    console.log('I think you clicked on square number ' + theNumber + '.');
    fbMath(theNumber);
  });

// end of 'DOMContentLoaded' wrapper:
});
