const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value.trim();
  const pass = e.target.elements.password.value.trim();

  if (email && pass) {
    const formObj = {
      email: email,
      password: pass,
    };

    console.log(formObj);
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
