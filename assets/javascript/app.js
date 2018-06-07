
$(document).ready(function () {

    $('#add-train').click(function () {
        if ($(this).text() === "Add Train") {
            $(this).text("Hide Add Train");
        } else {
            $(this).text("Add Train");
        }
    });

  
    var config = {
      apiKey: "AIzaSyCyE73SJe8kc9oYYjOPFUyyLpY_2R2yK6Y",
      authDomain: "train-homework-761d6.firebaseapp.com",
      databaseURL: "https://train-homework-761d6.firebaseio.com",
      projectId: "train-homework-761d6",
      storageBucket: "",
      messagingSenderId: "324703166931"
    };
  
    firebase.initializeApp(config);

})