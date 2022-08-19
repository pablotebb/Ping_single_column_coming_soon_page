const email = document.getElementById("input-email");
const button_email = document.getElementById("button-submit");
const error_email = document.getElementById("error");

button_email.addEventListener("click", (e) => {
  e.preventDefault();

  let expression =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (expression.test(email.value)) {
    // VÁLIDA
    email.style.border = "1px solid hsl(229, 100%, 88%)";
    error_email.style.visibility = "hidden";
  } else {
    // NO VÁLIDA
    email.style.border = "1px solid red";
    error_email.style.visibility = "visible";
  }
});
