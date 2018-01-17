import searchComponent from './search.component';

export default /*@ngInject*/ angular.module('search', [])
  .component('search', searchComponent)
  .name;
