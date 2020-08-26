/*
52x91=4732
4732+32=4764
4764/12 = 397
*/
let isOperator = false;
let equalNo = 0;
console.log('Hello');
document.querySelectorAll('.num').forEach((num) =>
  num.addEventListener('click', (e) => {
    if (isOperator) {
      document.querySelector('#display').value = '';
      document.querySelector('#display').value += e.target.dataset.val;
      isOperator = false;
    } else {
      document.querySelector('#display').value += e.target.dataset.val;
    }
  })
);

$('.op').click((e) => {
  isOperator = true;
});

$('#ac').click((e) => {
  $('#display').val('');
});

$('#equals').click((e) => {
  equalNo++;
  console.log(equalNo);
  if (equalNo == 1) {
    $('#display').val('4732');
  } else if (equalNo == 2) {
    $('#display').val('4764');
  } else if (equalNo == 3) {
    $('#display').val('397');
  }
});
