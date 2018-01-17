export default /*@ngInject*/ class HomeController {
  constructor(dataSourceService) {
    this.forecastsData = {};
    this.dataSourceService = dataSourceService;
    this.loadData();
  }

  loadData(forecastsData) {
    return this.dataSourceService.loadForecastsData()
    .then((response) => this.forecastsData = response.data)
    .catch((error) => console.log(error));
  }
}
