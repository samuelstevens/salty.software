function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function check(input) {
  if (input.value != document.getElementById("password").value) {
    input.setCustomValidity("Password Must be Matching.");
  } else {
    // input is valid -- reset the error message
    input.setCustomValidity("");
  }
}

function initInput() {
  var email = getParameterByName("email");
  var hash = getParameterByName("hash");
  document.forms[0].email.value = email;
  document.forms[0].hash.value = hash;
}

window.onload = initInput;
