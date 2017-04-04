namespace MyApp {

    angular.module("MyApp", []);


    class HomeController {

        public friends;

        constructor() {
          this.friends=["Cartman", "Kyle", "Timmy", "Stan", "Kenny"];
        }
    }

    angular.module("MyApp").controller("homeController", HomeController);
}
