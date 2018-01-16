import DataSource from './dataSource/dataSource.service';

export default angular.module('app.services', [])
  .service('dataSourceService', DataSource)
  .name;
