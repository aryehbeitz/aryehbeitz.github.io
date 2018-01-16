export default /*@ngInject*/ class HomeController {
  constructor(dataSourceService) {
    this.forecastsData = dataSourceService.loadForecastsData();

  }
}
