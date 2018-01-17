import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import Pages from './pages/pages.module';
import Components from './components/components.module';
import Services from './services/services.module';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Pages,
    Components,
    Services
  ])
  .config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/search');

    $stateProvider
      .state('search', {
        url: '/search',
        component: 'search'
      })
      .state('result', {
        url: '/result',
        component: 'result'
      })
  })
  .component('app', AppComponent)
  .value('baseUrl', 'http://localhost:3033');
