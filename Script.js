
var LapZoneUserApi = "https://retoolapi.dev/Cf1WII/LapZoneUsers";

function registerUser(requestBody){

  let request = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
  }

  fetch(LapZoneUserApi, request)
      .then(response => response.json())
      .then(responseData => {
          alert("User Registered Successfully...");
          window.location.href = "./index.html";
      })
}

function checkSession(){

  let userName = sessionStorage.getItem('userName') || '';
  if(userName == ""){
      alert('Please login to View the page...');
      window.location.href = './index.html';
  }
}

function logout(){
  sessionStorage.removeItem('userName');
  alert("You've logged out successfully...");
  window.location.href = "./SignIn.html";
}

// function loginUser() {
//     const username = document.getElementById("Username1").value;
//     const password = document.getElementById("Userpassword2").value;
  
//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");
  
//     if (username === storedUsername && password === storedPassword) {
     
//       sessionStorage.setItem("loggedIn", true);
//       sessionStorage.setItem("currentUser", username);
    
//       window.location.href = "./home.html";
//     } else {
//       alert("Invalid username or password.");
//     }
//   }
  
//   function registerUser() {
//     const username = document.getElementById("Name").value;
//     const email = document.getElementById("Email").value;
//     const password = document.getElementById("Password").value;
  
//     if (email && username && password) {

//       localStorage.setItem("username", username);
//       localStorage.setItem("userEmail", email);
//       localStorage.setItem("password", password);
//       alert("Registration successful! Please log in.");
//       window.location.href = "./index.html";
//     } else {
//       alert("Please fill in all fields.");
//     }
//   }
  
//   function ResetPassword() {
//     const email = document.getElementById("Email1").value;
//     const newPassword = document.getElementById("Password2").value;
//     const confirmPassword = document.getElementById("ConfrimPassword3").value;
  
//     const storedEmail = localStorage.getItem("userEmail");
  
//     if (email === storedEmail) {
//       if (newPassword === confirmPassword) {
       
//         localStorage.setItem("password", newPassword);
//         alert("Password reset successful! Please log in.");
       
//         window.location.href = "./index.html";
//       } else {
//         alert("Passwords do not match.");
//       }
//     } else {
//       alert("Email not found.");
//     }
//   }
  