
const elHeaderOne = document.createElement('h3');
elHeaderOne.innerHTML = "Age"
elHeaderOne.setAttribute('id', 'ageheader');
const elOne = document.createElement('input');
elOne.setAttribute('id', 'age');
elOne.setAttribute('placeholder', 'age');
const elHeaderTwo = document.createElement('h3');
elHeaderTwo.innerHTML = "Code"
elHeaderTwo.setAttribute('id', 'codeheader');
const elTwo = document.createElement('input');
elTwo.setAttribute('id', 'code');
elTwo.setAttribute('placeholder', 'code');
const elThree = document

document.querySelector('.form').append(elHeaderOne, elOne, elHeaderTwo, elTwo);

document.querySelector('.sub').innerHTML = "";
const a = document.getElementById("age").value;
const c = document.getElementById("code").value;

setInterval(() => {
  const a = document.getElementById("age").value;
  const c = document.getElementById("code").value;
  const apply = "Age: " + a + " years" + "\n" + "Code: " + c;
  document.getElementById("membership-by-apply-text").value = apply;
}, 500);

  document.querySelector('#membership-by-apply-text').setAttribute('hidden', 'hidden')

