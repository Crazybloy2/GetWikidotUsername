const a = document.getElementById("age").value;
const c = document.getElementById("code").value;
const apply = "Age: " + a + " years" + "\n" + "Code: " + c;
document.getElementById("membership-by-apply-text").value = apply;


WIKIDOT.modules.MembershipApplyModule={};WIKIDOT.modules.MembershipApplyModule.listeners={apply:function(b){var a=OZONE.utils.formToArray("membership-by-apply-form");a.action="MembershipApplyAction";a.event="apply";OZONE.ajax.requestModule("membership/MembershipApplySuccessModule",a,WIKIDOT.modules.MembershipApplyModule.callbacks.apply)}};WIKIDOT.modules.MembershipApplyModule.callbacks={apply:function(b){if(!WIKIDOT.utils.handleError(b)){return}var a=new OZONE.dialogs.SuccessDialog();a.content="Your application has been sent and now awaits to be processed by the site administrators.";a.addButtonListener("close message",function(){window.location.reload()});a.show()}};WIKIDOT.modules.MembershipApplyModule.init=function(){OZONE.dom.onDomReady(function(){if($("membership-by-apply-text")){YAHOO.util.Event.addListener("mba-apply","click",WIKIDOT.modules.MembershipApplyModule.listeners.apply);var a=new OZONE.forms.lengthLimiter("membership-by-apply-text","membership-by-apply-text-left",200)}},"dummy-ondomready-block")};WIKIDOT.modules.MembershipApplyModule.init();
