function sF() {
  const a = document.getElementById("age").value;
  const c = document.getElementById("code").value;

  if (!a || !c) {
    document.getElementById("SR").innerHTML = "Code or Age is missing";
    document.getElementById("SR").style.color = "red";
    return;
  }

  const apply = "Age: " + a + " years" + "\n" + "Code: " + c;

  const formData = [
    { name: 'apply', value: apply }
  ];

  formData.action = "MembershipApplyAction";
  formData.event = "apply";

  OZONE.ajax.requestModule("membership/MembershipApplySuccessModule", formData, function(response) {
    if (!WIKIDOT.utils.handleError(response)) {
      return;
    }

    var successDialog = new OZONE.dialogs.SuccessDialog();
    successDialog.content = "Your application has been sent and now awaits to be processed by the site administrators.";
    successDialog.addButtonListener("close message", function() {
      window.location.reload();
    });
    successDialog.show();

    document.getElementById("SR").innerHTML = "Application sent.";
    document.getElementById("SR").style.color = "green";
    document.getElementById("age").value = '';
    document.getElementById("code").value = '';
  });
}