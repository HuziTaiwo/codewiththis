// Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDvHszomghlazZmFtM7V8A36n6uBRDsARs",
        authDomain: "music-app-bc41d.firebaseapp.com",
        projectId: "music-app-bc41d",
        storageBucket: "music-app-bc41d.appspot.com",
        messagingSenderId: "774230051151",
        appId: "1:774230051151:web:78b288664af71171b1dd3a",
        measurementId: "G-X52EFDSH9H"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // make auth and firesore references
    const db = firebase.firestore();