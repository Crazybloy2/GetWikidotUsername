


  document.getElementById("membership-by-apply-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das automatische Abschicken des Formulars
    
    const a = document.getElementById("age").value;
    const c = document.getElementById("code").value;

    if (!a || !c) {
      document.getElementById("SR").innerHTML = "Code or Age is missing";
      document.getElementById("SR").style.color = "red";
      return;
    }

    const apply = "Age: " + a + " years" + "\n" + "Code: " + c;

    const formData = new FormData();
    formData.append('apply', apply);
    formData.append('action', 'MembershipApplyAction');
    formData.append('event', 'apply');

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://the-ethereal-consortium.wikidot.com/ajax-module-connector.php", true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        document.getElementById("SR").innerHTML = "Application sent.";
        document.getElementById("SR").style.color = "green";
        document.getElementById("age").value = '';
        document.getElementById("code").value = '';
      } else {
        document.getElementById("SR").innerHTML = "There was an error with the submission.";
        document.getElementById("SR").style.color = "red";
      }
    };

    xhr.onerror = function() {
      document.getElementById("SR").innerHTML = "An error occurred while sending the request.";
      document.getElementById("SR").style.color = "red";
    };

    xhr.send(formData);
  });
