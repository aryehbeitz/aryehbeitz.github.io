import uiRouter from '@uirouter/angularjs';
import forecastsComponent from './forecasts.component';

export default angular.module('forecasts', [uiRouter])
  .component('forecastsComponent', forecastsComponent)
  .name;
