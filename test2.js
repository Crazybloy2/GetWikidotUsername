
  const a = document.getElementById("age").value;
  const c = document.getElementById("code").value;

  if (!a || !c) {
    document.getElementById("SR").innerHTML = "Code or Age is missing";
    document.getElementById("SR").style.color = "red";
    return;
  }

  const apply = "Age: " + a + " years" + "\n" + "Code: " + c;
  document.getElementById("hello").value = apply;



document.getElementById("SR").innerHTML = "Application sent.";
    document.getElementById("SR").style.color = "green";
    document.getElementById("age").value = '';
    document.getElementById("code").value = '';
