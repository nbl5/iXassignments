var app = angular.module("ContactApp", []);

app.controller("MainCtrl", function($scope){

    $scope.name="";
    $scope.number="";
    $scope.items=[];

    $scope.addItem=function(){
        $scope.items.push($scope.name);
        $scope.items.push($scope.number);
        $scope.name="";
        $scope.number="";
    };


    // $scope.showForm = true;
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
            // $scope.showForm=false;
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
});