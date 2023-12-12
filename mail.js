
const firebaseConfig = {
    apiKey: "AIzaSyCSc8gl4GBXz0mMBYapCkFGJuiHUjagj5k",
    authDomain: "contact-ae302.firebaseapp.com",
    databaseURL: "https://contact-ae302-default-rtdb.firebaseio.com",
    projectId: "contact-ae302",
    storageBucket: "contact-ae302.appspot.com",
    messagingSenderId: "679069102741",
    appId: "1:679069102741:web:e9d321859aa5cf32d7e19c",
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Reference your database
  const contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault(); // Prevent default form submission
  
    const name = getElementVal("name");
    const emailId = getElementVal("emailid");
    const msgContent = getElementVal("msgContent");
    const cname = getElementVal("cname");
    const phone = getElementVal("phone");

  
    // Save contact data to Firebase
    saveMessages(name, emailId, msgContent, phone);
  
    // Enable alert
    document.querySelector(".alert").style.display = "block";
  
    // Remove the alert after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 5000);
  
    // Reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailId, msgContent, phone) => {
    const newContactForm = contactFormDB.push(); // Create a new unique node
  
    newContactForm.set({
      name: name,
      emailId: emailId,
      msgContent: msgContent,
      phone:phone,
    }); // Save contact data to the new node
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  