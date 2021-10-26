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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("Room_name");

  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name : user_name,
          message : msg ,
          like : 0
      });
      document.getElementById("msg").value = "";
  }

  function logout() {
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location = "Lets_Chat_login.html";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name_1 = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+ name_1 + "<img class='user_tick' src='tick.png'></h4>";
    message_tag = "<h4 class='message_id'>"+ message +"</h4>";
    like_button = "<button class='btn btn-warning' id="+ firebase_message_id + " value="+ like +" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up' >Like: "+ like +"</span></button><hr>";
    row = name_with_tag + message_tag + like_button +span_with_tag;
    document.getElementById("output").innerHTML = row;
//End code
 } });  }); }
getData();

function updateLike(message_id) {
    console.log("Clicked on the like button" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
}

function logout() {
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);
    window.location = "Lets_Chat_login.html";
}

