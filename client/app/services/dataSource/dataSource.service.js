export default /*@ngInject*/ class dataSourceService {
  constructor($http, $q, baseUrl) {
    this.forecastsData = {};
    this.$http = $http;
    this.$q = $q;
    this.baseUrl = baseUrl;
    this.json = require('../../../../db.json');
  }

  loadForecastsData() {
    return Promise.resolve(this.json);
    // uncomment to use json-server or other....
    // return this.$http.get(`${this.baseUrl}/forecasts`);

  }
}
