var firebaseConfig = {
    apiKey: "AIzaSyAe5u133U1WucPrnBsAAHefUJYgfLKfBjk",
    authDomain: "kwitter-3b380.firebaseapp.com",
    databaseURL: "https://kwitter-3b380-default-rtdb.firebaseio.com",
    projectId: "kwitter-3b380",
    storageBucket: "kwitter-3b380.appspot.com",
    messagingSenderId: "19632380996",
    appId: "1:19632380996:web:90645997e364de7f277011",
    measurementId: "G-CKWYSZ1JRC"
  };

  firebase.initializeApp(firebaseConfig);
  var analytics = getAnalytics(app);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
  });

  document.getElementById("msg").value = "";
}