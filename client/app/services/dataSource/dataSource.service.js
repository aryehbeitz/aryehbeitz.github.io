export default /*@ngInject*/ class dataSourceService {
  constructor($http, baseUrl) {
    this.forecastsData = {};
    this.$http = $http;
    this.baseUrl = baseUrl;
  }

  loadForecastsData() {
    return this.$http.get(`${this.baseUrl}/forecasts`)
  }
}
