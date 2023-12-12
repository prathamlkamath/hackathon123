const firebaseConfig = {
    apiKey: "AIzaSyCSc8gl4GBXz0mMBYapCkFGJuiHUjagj5k",
        authDomain: "contact-ae302.firebaseapp.com",
        databaseURL: "https://contact-ae302-default-rtdb.firebaseio.com",
        projectId: "contact-ae302",
        storageBucket: "contact-ae302.appspot.com",
        messagingSenderId: "679069102741",
        appId: "1:679069102741:web:e9d321859aa5cf32d7e19c",
  // Your Firebase config details here
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();

// Fetch data from Firebase Firestore
db.collection("contactForm").get().then(querySnapshot => {
  const qrcodesContainer = document.getElementById("qrcodes-container");

  querySnapshot.forEach(doc => {
    const personData = doc.data();
    
    // Generate QR code for each person's data
    const qr = qrcode(0, 'M');
    const dataString = JSON.stringify(personData);
    qr.addData(dataString);
    qr.make();
  
    const qrImage = qr.createImgTag();
    
    // Display the QR code in the HTML element
    qrcodesContainer.innerHTML += qrImage;
  });
}).catch(error => {
  console.error("Error getting documents: ", error);
});