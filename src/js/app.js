

angular.module('myApp',[])
    .controller('firstController', firstController)

    function firstController() {
        var vm = this;
        vm.test = 'test';
    }


angular.bootstrap(document, ['myApp']);

