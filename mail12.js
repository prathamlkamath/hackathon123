// Import the Firebase SDK
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSc8gl4GBXz0mMBYapCkFGJuiHUjagj5k",
    authDomain: "contact-ae302.firebaseapp.com",
    databaseURL: "https://contact-ae302-default-rtdb.firebaseio.com",
    projectId: "contact-ae302",
    storageBucket: "contact-ae302.appspot.com",
    messagingSenderId: "679069102741",
    appId: "1:679069102741:web:e9d321859aa5cf32d7e19c",
  };

firebase.initializeApp(firebaseConfig);

// Function to retrieve data for a particular name
function fetchDataForName(name) {
  const database = firebase.database();
  const dataRef = database.ref('contactForm'); // Replace with your actual data path
  dataRef.orderByChild('name').equalTo(name).once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Data for', name, ':', data);
      } else {
        console.log('No data found for', name);
      }
    })
    .catch(error => {
      console.error('Error retrieving data:', error.message);
    });
}

// Example usage
const targetName = 'John Doe'; // Replace with the name you're looking for
fetchDataForName(targetName);
