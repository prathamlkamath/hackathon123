
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD6zra8G1j-mNnSRTVOkzu_SLZX2_1F2DI",
    authDomain: "signup-364f6.firebaseapp.com",
    projectId: "signup-364f6",
    storageBucket: "signup-364f6.appspot.com",
    messagingSenderId: "717657731671",
    appId: "1:717657731671:web:3f7bd502e446c94250a912"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth()
  var firstname = document.getElementById("firstname")
  var lastname = document.getElementById("lastname")
  var email = document.getElementById("Email")
  var passwords = document.getElementById("password")
  var college = document.getElementById('college')

window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname: firstname.value,
        lastname: lastname.value,

        email: email.value,

        passwords: passwords.value,
        college:college.value,

    }
    createUserWithEmailAndPassword(auth,obj.email,obj.passwords)
     .then(function(success){
        alert("Signup Successfull")
     })
     .catch(function(error){
        alert("error" + err)
     })
     console.log(obj)
};
