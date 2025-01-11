


  WIKIDOT.modules.MembershipApplyModule = {};
WIKIDOT.modules.MembershipApplyModule.listeners = {
  apply: function(b) {
    const a = document.getElementById("age").value;
    const c = document.getElementById("code").value;
    const applyText = document.getElementById("applyText").value;

    if (!a || !c || !applyText) {
      document.getElementById("SR").innerHTML = "Age, Code, or Message is missing";
      document.getElementById("SR").style.color = "red";
      return;
    }

    // Set the apply field value directly from the textarea
    document.getElementById("apply").value = applyText;

    var formData = OZONE.utils.formToArray("membership-by-apply-form");
    formData.push({ name: 'age', value: "Age: " + a + " years" });
    formData.push({ name: 'code', value: "Code: " + c });

    formData.action = "MembershipApplyAction";
    formData.event = "apply";

    OZONE.ajax.requestModule("membership/MembershipApplySuccessModule", formData, WIKIDOT.modules.MembershipApplyModule.callbacks.apply);
  }
};

WIKIDOT.modules.MembershipApplyModule.callbacks = {
  apply: function(b) {
    if (!WIKIDOT.utils.handleError(b)) {
      return;
    }

    var a = new OZONE.dialogs.SuccessDialog();
    a.content = "Your application has been sent and now awaits to be processed by the site administrators.";
    a.addButtonListener("close message", function() {
      window.location.reload();
    });
    a.show();

    document.getElementById("SR").innerHTML = "Application sent.";
    document.getElementById("SR").style.color = "green";
    document.getElementById("age").value = '';
    document.getElementById("code").value = '';
    document.getElementById("applyText").value = ''; // Clear the textarea
  }
};

WIKIDOT.modules.MembershipApplyModule.init = function() {
  OZONE.dom.onDomReady(function() {
    if ($("membership-by-apply-text")) {
      YAHOO.util.Event.addListener("mba-apply", "click", WIKIDOT.modules.MembershipApplyModule.listeners.apply);
    }
  }, "dummy-ondomready-block");
};

WIKIDOT.modules.MembershipApplyModule.init();
