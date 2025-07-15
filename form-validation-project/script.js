function clearError(id) {
    document.getElementById(id).textContent = "";
  }
  function validateForm(e) {
    e.preventDefault(); 
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;
   let valid = true;
   if (name.length < 5) {
      document.getElementById("nameErr").textContent = "Full name must be at least 5 characters.";
      valid = false;
    }
  if (!email.includes("@")) {
      document.getElementById("emailErr").textContent = "Enter a valid email address.";
      valid = false;
    }
  if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
      document.getElementById("phoneErr").textContent = "Invalid phone number.";
      valid = false;
    }
  if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
      document.getElementById("passErr").textContent = "Password is not strong.";
      valid = false;
    }
   if (password !== confirm) {
      document.getElementById("confirmErr").textContent = "Passwords do not match.";
      valid = false;
    }
   if (valid) {
      alert("Registration Successful!");
      document.getElementById("form").reset();
    }
  }
  