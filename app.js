var MyApp;
(function (MyApp) {
    angular.module("MyApp", []);
    var HomeController = (function () {
        function HomeController() {
            this.message = "Welcome!";
        }
        return HomeController;
    }());
    angular.module("MyApp").controller("homeController", HomeController);
})(MyApp || (MyApp = {}));
