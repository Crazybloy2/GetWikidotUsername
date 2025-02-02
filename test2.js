
  
const elOne = document.createElement('input');
elOne.setAttribute('id', 'age');
elOne.setAttribute('placeholder', 'age');
const elTwo = document.createElement('input');
elTwo.setAttribute('id', 'code');
elTwo.setAttribute('placeholder', 'code');

document.getElementById('membership-apply-box').append(elOne);

document.getElementById('membership-apply-box').append(elTwo);

const a = document.getElementById("age").value;
const c = document.getElementById("code").value;

setInterval(() => {
  const a = document.getElementById("age").value;
  const c = document.getElementById("code").value;
  const apply = "Age: " + a + " years" + "\n" + "Code: " + c;
  document.getElementById("membership-by-apply-text").value = apply;
}, 500);

  document.querySelector('#membership-by-apply-text').setAttribute('hidden', 'hidden')

