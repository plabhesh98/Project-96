var firebaseConfig = {
    apiKey: "AIzaSyDyjJd1rv3AA7G51ocTkmvd3Fn7weYpeTU",
    authDomain: "let-s-chat-web-app-56fa1.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-56fa1-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-56fa1",
    storageBucket: "let-s-chat-web-app-56fa1.appspot.com",
    messagingSenderId: "408295363131",
    appId: "1:408295363131:web:011bab6f72e4ccb916021e",
    measurementId: "G-PML9FKJEY3"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username");
  document.getElementById("username").innerHTML = "Welcome " + user_name  + "!" ;

function Add_room() {
    room_name = document.getElementById("Room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("Room_name" , room_name);
    window.location = "kwitter_message.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML = row;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("Room_name" , name);
  window.location = "kwitter_message.html";
}

function Logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("Room_name");
  window.location = "Lets_Chat_login.html";
}