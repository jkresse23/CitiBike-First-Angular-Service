/*I want to write an app that incorporates a service.  You enter your total time
on the bike, and it returns your mileage for that ride based on a general formula. 
It then also returns your total mileage based on your previous entries.
//so I've gotten the ride entry to display.  That's a good start.
//next I want to build a service that converts each 5 to a mile.
//Now I want to store each entry.  What I'm stuck on is how to push eachRide
//to the list within the list of rides.
I've used the service to perform the calculation before posting the message in my view.
Next I need to store each entry so that adding a new entry adds to a list and displays
the entire list with the new entry.
*/

var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope, myService) {
	
	$scope.calculateRide = function (userEntry) {
		
		$scope.myRides = myService.userMiles($scope.userEntry);
		
		//myService.eachRide = myService.userMiles($scope.userEntry);
		
		//myService.listOfRides = myService.addtoList(eachRide);
		
		//$scope.myRides = myService.listOfRides;
		//};
		};
	});
	
myApp.service("myService", function() {

	var listOfRides = {};
	
	listOfRides.list = [];
	
	this.addtoList = function (ride) {
		myService.listOfRides.list.push(ride);
		
		};
	
	this.userMiles = function (a) {
		return "You've ridden your city bike " + (a / 5) + " miles.";
		};
	});
	

	
