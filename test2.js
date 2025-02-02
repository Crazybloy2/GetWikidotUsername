
  
const elOne = document.createElement('input');
elOne.setAttribute('id', 'age');
elOne.setAttribute('placeholder', 'age');
const elTwo = document.createElement('input');
elTwo.setAttribute('id', 'code');
elTwo.setAttribute('placeholder', 'code');
const elThree = document.createElement('div');
elThree.setAttribute('id', 'SR')

document.getElementById('membership-apply-box').append(elOne);

document.getElementById('membership-apply-box').append(elTwo);

document.getElementById('membership-apply-box').append(elThree);


setTimeout(() => {
  const a = document.getElementById("age").value;
  const c = document.getElementById("code").value;
  const apply = "Age: " + a + " years" + "\n" + "Code: " + c;
  document.getElementById("membership-by-apply-text").value = apply;
}

  if (!a || !c) {
    document.getElementById("SR").innerHTML = "Code or Age is missing";
    document.getElementById("SR").style.color = "red";
}



document.getElementById("SR").innerHTML = "Application sent.";
    document.getElementById("SR").style.color = "green";
    document.getElementById("age").value = '';
    document.getElementById("code").value = '';
