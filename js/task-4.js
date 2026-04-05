const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const pass = e.target.elements.password.value;

  if (email && pass) {
    const formObj = {
      email: email.trim(),
      password: pass.trim(),
    };

    console.log(formObj);
  } else {
    alert("All form fields must be filled in");
  }

  form.reset();
});
