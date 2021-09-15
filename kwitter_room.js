
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var analytics = getAnalytics(app);
user_name = localStorage.getItem("user_name" , user_name);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;  
      });});}
getData();

function addRoom(){
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });

     localStorage.setItem("room_name" , room_name);

     window.location = "kwitter_page.html";
}


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location="kwitter_page.html";
    
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}