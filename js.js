var app = angular.module("myApp", ["ngRoute"]);


// Get json file function
app.run(function ($rootScope, $http) {

    $http.get("accessories.json").then(function (response){
        $rootScope.accessories = response.data.accessories;
        console.log($rootScope.accessories);
    });

    $http.get("pumpControl.json").then(function (response){
        $rootScope.pumpControl = response.data.pumpControl;
        console.log($rootScope.pumpControl);
    });

    $http.get("filters.json").then(function (response){
      $rootScope.filters = response.data.filters;
      console.log($rootScope.filters);
    });

    $http.get("water_sterilisation.json").then(function (response){
        $rootScope.water_sterilisation = response.data.water_sterilisation;
        console.log($rootScope.water_sterilisation);
    });

    $http.get("tanks.json").then(function (response){
        $rootScope.tanks = response.data.tanks;
        console.log($rootScope.tanks);
    });

});


// Scroll to top button function
$(window).scroll(function(){
  if ($(this).scrollTop() > 150){
    $('#myBtn').fadeIn();
    $('#myBtn').css('z-index', '999');
    $('.menuHeader').css('display', 'none');
  } else{
    $('#myBtn').fadeOut();
    $('.menuHeader').css('display', 'block');
  }
});

function topFunction(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Form check function
function validateForm()  {
  var x = document.getElementById("fname").value;
  var y = document.getElementById("email").value;
  var z = document.getElementById("msg").value;

  if(x== "") {
      alert("Please enter your Full Name!");
      return false;
  }
  if(y == "") {
      alert("Please enter your Email!");
      return false;
  }

  if(z == "") {
      alert("Please enter your message!");
      return false;
  }

  alert("Thank you for contacting us! We will get back to you within 24 hours!")

  return true;
}