export const validateEmailAndPasswordAndName = (email, password,name) => {
  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }
  if (password.length > 12) {
    alert("Password must be less than 12 characters long");
    return;
  }
  if (email.indexOf("@") === -1) {
    alert("Please enter a valid email");
    return;
  }
  if (email.indexOf(".") === -1) {
    alert("Please enter a valid email");
    return;
  }
  if (email.indexOf("@") > email.indexOf(".")) {
    alert("Please enter a valid email");
    return;
  }
  if (email.indexOf("@") === 0) {
    alert("Please enter a valid email");
    return;
  }
  if (email.indexOf(".") === email.length - 1) {
    alert("Please enter a valid email");
    return;
  }
  if (email.indexOf("@") === email.length - 1) {
    alert("Please enter a valid email");
    return;
  }
  if (email.indexOf(".") === 0) {
    alert("Please enter a valid email");
    return;
  }
  if(name === "" || name === undefined || name === null || name === " "){
    alert("Please enter a valid name");
    return;
  }
  //check for name contains only alphabets
  if(/^[a-zA-Z]+$/.test(name) === false){
    alert("Please enter a valid name");
    return;
  }
  //check if name has all space letters
  if(/^\s+$/.test(name) === true){
    alert("Please enter a valid name");
    return;
  }

  return true;
};
