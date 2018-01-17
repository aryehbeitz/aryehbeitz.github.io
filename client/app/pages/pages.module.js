import Search from './search/search.module';
import Result from './result/result.module';

export default angular.module('app.pages', [Search, Result])
  .name;
