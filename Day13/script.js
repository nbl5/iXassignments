var app = angular.module("FormApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/form1.html"
  })
  $routeProvider.when("/form2", {
    templateUrl: "templates/form2.html"
  })

})

app.controller("RouterCtrl", function($scope){

    $scope.name="";
    $scope.number="";
    $scope.items=[];

    $scope.addItem=function(){
        $scope.items.push($scope.name);
        $scope.items.push($scope.number);
        $scope.name="";
        $scope.number="";
    };


    $scope.showForm = true;
    $scope.addName = function () {

        var isFormValid = true;

        if (!isValidName($scope.name)) {
            alert ("Name cannot be left empty.");
            isFormValid=false;

        }

        if (!isValidNumber($scope.number)) {
            alert ("Phone number must be in format XXX-XXX-XXXX.")
            isFormValid=false;
        }

        if (isFormValid) {
            $scope.showForm=false;
            alert("Successfully added" + " " + $scope.name + " " + "to your contact book.");
        } 

    }


    var isValidName = function(name) {
        if (name && name.length>0) {
            return true;
        }
        else {
            return false;
        }
    }

    var isValidNumber = function(number) {
        if (number) {
            var phoneTest=number.split('-');
            if(phoneTest.length !==3) {
                return false;
            }
            else if((phoneTest[0].length !==3) || (phoneTest[0] == NaN)) {
                return false;
            }
            else if((phoneTest[1].length !==3) || (phoneTest[1] == NaN)) {
                return false;
            }
            else if((phoneTest[2].length !==4) || (phoneTest[2] == NaN)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
})

app.controller("MainCtrl", function($scope){
    $scope.showForm = true;
    $scope.Submit = function () {

        var isFormValid = true;

        if (!isValidName($scope.name)) {
            alert ("Name cannot be left empty.");
            isFormValid=false;

        }

        if (!isValidNumber($scope.number)) {
            alert ("Phone number must be in format XXX-XXX-XXXX.")
            isFormValid=false;
        }

        if (!isValidEmail($scope.email)) {
            alert ("Email must be in the format XXX@XXX.XXX.")
            isFormValid=false;
        }

        if (!isValidPassword($scope.password)) {
            alert ("Password must be at least 6 characters long.")
            isFormValid=false;
        }

        if (!isValidConfirm($scope.confirm, $scope.password)) {
            alert ("Password must match confirm password.")
            isFormValid=false;
        }

        if (isFormValid) {
            $scope.showForm=false;
            window.location="#/form2";
        } 
        
    }



    var isValidName = function(name) {
        if (name && name.length>0) {
            return true;
        }
        else {
            return false;
        }
    }

    var isValidNumber = function(number) {
        if (number) {
            var phoneTest=number.split('-');
            if(phoneTest.length !==3) {
                return false;
            }
            else if((phoneTest[0].length !==3) || (phoneTest[0] == NaN)) {
                return false;
            }
            else if((phoneTest[1].length !==3) || (phoneTest[1] == NaN)) {
                return false;
            }
            else if((phoneTest[2].length !==4) || (phoneTest[2] == NaN)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }

    var isValidEmail = function(email) {
        if (email) {
            var emailTest=email.split('@');
            if(emailTest.length !==2) {
                return false;
            }
            else {
            var emailTest2=email.split('.');
            if (emailTest2.length !==2) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}

    var isValidPassword = function(password) {
        if (password && password.length>=6) {
            return true;
        }
        else {
            return false;
        }
    }

    var isValidConfirm = function(confirm, password) {

        if (confirm && confirm===password){
            return true;
        }
        else {
            return false;
        }
    }

});
