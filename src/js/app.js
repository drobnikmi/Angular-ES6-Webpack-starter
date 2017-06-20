import 'angular';
import uiRouter from 'angular-ui-router';
const css = require('../css/style.sass');
require('../.htaccess');


angular.module('myApp',[
    uiRouter
])


angular.bootstrap(document, ['myApp']);



