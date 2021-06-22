
var firebaseConfig = {
      apiKey: "AIzaSyDSD0VyIfuHYO32pgE5ZAq7vmjK-EC0XuU",
      authDomain: "kwitter-94107.firebaseapp.com",
      databaseURL: "https://kwitter-94107-default-rtdb.firebaseio.com",
      projectId: "kwitter-94107",
      storageBucket: "kwitter-94107.appspot.com",
      messagingSenderId: "1085459104714",
      appId: "1:1085459104714:web:ce972d53f5189b4c1f0533"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!!"; 

    function addRoom()
    {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "Adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Names: " + Room_names);
       row = "<div class='room_name' id=" + Room_names + " onclick='RedirectToRoom(this.id)'> #" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function RedirectToRoom(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}