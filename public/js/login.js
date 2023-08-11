/**
 * @closeErr
 * Function handles hiding the error message
 * on click
 */
const closeErr = (val) => {
  // initialize variables
  var emailErr = document.querySelector(".email-err"),
    pwdErr = document.querySelector(".password-err"),
    userErr = document.querySelector(".username-err"),
    invalidEmailErr = document.querySelector(".invalid-email-err"),
    pwdLengthErr = document.querySelector(".password-length-err");
  // check if the value is email
  if (val === "email") {
    // add the 'hidden' class to the emailErr element
    emailErr.classList.add("hidden");
  }
  // check if the value is password
  else if (val === "password") {
    // add the 'hidden' class to the pwdErr element
    pwdErr.classList.add("hidden");
  }
  // check if the value is password-length
  else if (val === "password-length") {
    // add the 'hidden' class to the pwdLengthErr element
    pwdLengthErr.classList.add("hidden");
  }
  // check if the value is invalid-email
  else if (val === "invalid-email") {
    // add the 'hidden' class to the invalidEmailErr element
    invalidEmailErr.classList.add("hidden");
  }
  // check if the value is username
  else if (val === "username") {
    // add the 'hidden' class to the userErr element
    userErr.classList.add("hidden");
  }
};

/**
 * @loginFormHandler
 * Handles authenticating the user
 */
const loginFormHandler = async (event) => {
  // prevent default behavior
  event.preventDefault();
  // initialize variables
  const username = document.querySelector("#username").value.trim(),
    password = document.querySelector("#password").value.trim();
  // check if both username and password have values
  if (username && password) {
    // send a POST request to the login endpoint
    const response = await fetch("/api/auth/login", {
      method: "POST",
      // convert the data to JSON and send it in the request body
      body: JSON.stringify({ username, password }),
      // set the request header
      headers: { "Content-Type": "application/json" },
    });
    // check if the response status is ok
    if (response.ok) {
      // redirect to the home page
      window.location.href = "/";
    }
    // response status is not ok
    else {
      // initialize variables
      const responseData = await response.json();
      // check if the error message is specific
      if (
        responseData.error === "Username is not registered. Please sign up."
      ) {
        // select the element
        var userErr = document.querySelector(".username-err");
        // remove the 'hidden' class from the element to display error
        userErr.classList.remove("hidden");
      }
      // check if the error message is specific
      else if (responseData.error === "Incorrect password.") {
        // select the element
        var pwdErr = document.querySelector(".password-err");
        // remove the 'hidden' class from the element to display error
        pwdErr.classList.remove("hidden");
      }
    }
  }
};

/**
 * @signupFormHandler
 * Handles signing up the user
 */
const signupFormHandler = async (event) => {
  // prevent default behavior
  event.preventDefault();
  // initialize variables
  const username = document.querySelector("#signup-username").value.trim(),
    email = document.querySelector("#signup-email").value.trim(),
    password = document.querySelector("#signup-pass").value.trim();
  // check if all three values are present
  if (email && password && username) {
    // send a POST request to the create endpoint
    const response = await fetch("/api/auth/create", {
      method: "POST",
      // convert the data to JSON and send it in the request body
      body: JSON.stringify({
        user_name: username,
        email: email,
        password: password,
      }),
      // set the request header
      headers: { "Content-Type": "application/json" },
    });
    // check if the response status is ok
    if (response.ok) {
      // Redirect to the home page
      window.location.replace("/");
    }
    // response status is not ok
    else {
      // initialize variables
      const err = await response.json(),
        errMsg = err.errors[0].message;
      // check if the error message is specific
      if (errMsg === "Validation len on password failed") {
        // select the element
        var pwdErr = document.querySelector(".password-length-err");
        // remove the 'hidden' class from the element to display error
        pwdErr.classList.remove("hidden");
      }
      // check if the error message is specific
      else if (errMsg === "email must be unique") {
        // select the element
        var emailErr = document.querySelector(".invalid-email-err");
        // remove the 'hidden' class from the element to display error
        emailErr.classList.remove("hidden");
      }
    }
  }
};
// event listeners - on form submit
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
