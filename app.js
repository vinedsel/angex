var MyApp;
(function (MyApp) {
    angular.module("MyApp", []);
    var HomeController = (function () {
        function HomeController() {
            this.friends = ["Cartman", "Kyle", "Timmy", "Stan", "Kenny"];
        }
        return HomeController;
    }());
    angular.module("MyApp").controller("homeController", HomeController);
})(MyApp || (MyApp = {}));
