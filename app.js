//create the user constutor
class user {
  constructor(fname, lname, email, password, confirm, payment, color) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = email;
    this.password = password;
    this.confirm = confirm;
    this.payment = payment;
    this.color = color;
  }
}
function isValid(user) {
  //return true if the user is valid
  //return false if the user is not valid
  let valid = true;
  if (user.firstName.length == 0) {
    valid = false;
    $("txtFirstName").addClass("input-error");
  }
  if (user.lastName.length == 0) {
    valid = false;
    $("txtLastName").addClass("input-error");
  }
  if (user.email.length == 0) {
    valid = false;
    $("txtEmail").addClass("input-error");
  }
  if (user.password.length < 6) {
    valid = false;
    $("txtPassword").addClass("input-error");
  }
  if (user.confirm.length < 6) {
    valid = false;
    $("txtConfirm").addClass("input-error");
  }
  if (user.payment.length == 0) {
    valid = false;
    $("txtPayment").addClass("input-error");
  }

  return valid;
}
function validatePassword() {
  console.log("validateing password");
  let txtPass = $("#txtPassword"); // this is the element(input)
  let password = txtPass.val(); //let password=txtPass.val();
  if (password.length<6){
    txtPass.css("background-color", "red");
  } else {
    txtPass.css("background-color", "green");
  }
}
function passConfirmation() {
  let txtPass = $("#txtPassword").val();
  let txtConfirm = $("#txtConfirm").val();
  if (txtPass == txtConfirm) {
    console.log("pass is the same");
  } else {
    console.log("pass is diffrent");
  }
}
//create the register from the inputs
function register() {
  //get the values from the inputs
  let userfname = $("#txtFirstName").val();
  let userLname = $("#txtLastName").val();
  let userEmail = $("#txtEmail").val();
  let userPass = $("#txtPassword").val();
  let userConfirm = $("#txtConfirm").val();
  let userPayment = $("#txtPayment").val();
  let userColor = $("#txtColor").val();
  //create the obj
  let newUser = new user(
    userfname,
    userLname,
    userEmail,
    userPass,
    userConfirm,
    userPayment,
    userColor
  );
  //display the user on the console
  console.log(newUser);
  if (isValid(newUser)) {
    saveUser(newUser); //this fn is on the storeManager
  }
}
function init() {
  //hide the userForm
  $("#userForm").hide();

  //hook events
  $("#newUser").on("click", function () {
    $("#userForm").slideDown(3000);
  });
  //hide userform
  $("#hideForm").on("click", function () {
    $("#userForm").slideUp(3000);
  });

  $("#txtPassword").keyup(validatePassword);
  $("#txtConfirm").keyup(passConfirmation);
}

window.onload = init;
