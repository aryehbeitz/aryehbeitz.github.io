export default /*@ngInject*/ class ResultController {
  constructor(dataSourceService) {
    this.forecastsData = {};
    this.dataSourceService = dataSourceService;
    this.loadData();
  }

  loadData(forecastsData) {
    return this.dataSourceService.loadForecastsData()
    .then((response) => this.forecastsData = response.data || response.forecasts)
    .catch((error) => console.log(error));
  }

  loadImage(name) {
    return require(`../../../assets/images/${name}`);
  }
}
