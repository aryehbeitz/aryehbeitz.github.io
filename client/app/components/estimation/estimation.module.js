import uiRouter from '@uirouter/angularjs';
import estimationComponent from './estimation.component';

export default angular.module('estimation', [uiRouter])
  .component('estimationComponent', estimationComponent)
  .name;
