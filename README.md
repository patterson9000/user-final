# user-final
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style/mystyle.css" />
    <title>user system</title>
  </head>
  <body>
    <header>
      <div>
        <nav>
          <a href="index.html" id="homeBtn">home</a>
          <a href="register.html">register</a>
        </nav>
      </div>
      <h1>User Registration</h1>
    </header>
    <main class="container">
      <h2 style="color: rgb(6, 137, 251)">New User</h2>
      <button id="newUser"class=submit1>add new user</button>
      <button id="hideForm" class="submit1">hide form</button>
      <div id="userForm" class="form-container">
        <!--name,lastname,email,password,confirmation,payment method,color-->
        <div class="form-control">
          <label>First name:</label>
          <input type="text" id="txtFirstName" placeholder="enter fname" />
        </div>
        <div class="form-control">
          <label> Last name:</label>
          <input type="text" id="txtLastName" placeholder="enter lname" />
        </div>
        <div class="form-control">
          <label>Email:</label>
          <input type="text" id="txtEmail" placeholder="enter email" />
        </div>
        <div class="form-control">
          <label>Password:</label>
          <input
            type="password"
            id="txtPassword"
            placeholder="enter password"
          />
        </div>
        <div class="form-control">
          <label>Confirmation:</label>
          <input
            type="password"
            id="txtConfirm"
            placeholder="confirm password"
          />
        </div>
        <div class="form-control">
          <label>Payment:</label>
          <input
            type="payment"
            id="txtPayment"
            placeholder="enter payment info"
          />
        </div>
        <div class="form-control" class="color">
          <input type="color" id="txtColor" />
        </div>
        <button onclick="register();" class="submit">register</button>
      </div>
    </main>
    <footer></footer>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/navBar.js"></script>
    <script src="scripts/storeManager.js"></script>
    <script src="scripts/app.js"></script>
  </body>
</html>
