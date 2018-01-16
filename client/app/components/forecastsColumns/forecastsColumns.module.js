import uiRouter from '@uirouter/angularjs';
import forecastsColumnsComponent from './forecastsColumns.component';

export default angular.module('forecastsColumns', [uiRouter])
  .component('forecastsColumnsComponent', forecastsColumnsComponent)
  .name;
