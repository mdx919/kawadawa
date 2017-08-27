
(function(){

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDa5jTw7ySbsPLCYJDgHh5pIBkCwFjwlXs",
        authDomain: "footpath-f976a.firebaseapp.com",
        databaseURL: "https://footpath-f976a.firebaseio.com",
        projectId: "footpath-f976a",
        storageBucket: "footpath-f976a.appspot.com",
        messagingSenderId: "39007593753"
      };
      firebase.initializeApp(config);


      const textEmail = document.getElementById('email');
      const textPassword = document.getElementById('password');
      const btnLogin = document.getElementById('login-btn');


      btnLogin.addEventListener('click', e => {

        const email = textEmail.value;
        const password = textPassword.value;
        const auth = firebase.auth();

        // sign in
        const promise = auth().signInWithEmailAndPassword(email, password);

        // Handle Errors here.
        promise.catch(e => alert(e.message));
  
      });

      });

// realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    alert("You are Logged in!")
  }
  else {
    alert("error!")
  }
});


