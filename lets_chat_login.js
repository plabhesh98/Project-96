function Add_user() {
    user_name = document.getElementById("sign_in_input").value;
    localStorage.setItem("username" , user_name);
    window.location = "Lets_chat_room.html";
}
