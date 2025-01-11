document.addEventListener('DOMContentLoaded', function () {
  const ageInput = document.getElementById("age");
  const codeInput = document.getElementById("code");
  const applyText = document.getElementById("applyText");

  document.getElementById("mba-apply").addEventListener("click", function (event) {
    event.preventDefault();

    const age = ageInput.value;
    const code = codeInput.value;
    const apply = "Age: " + age + " years" + "\n" + "Code: " + code;

    applyText.value = apply;

    const formData = new FormData(document.getElementById("membership-by-apply-form"));
    formData.append("apply", apply);

    fetch("/ajax.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        alert("Your application has been sent and now awaits to be processed by the site administrators.");
        window.location.reload();
      } else {
        alert("There was an error submitting your application. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was an error submitting your application. Please try again.");
    });
  });
});