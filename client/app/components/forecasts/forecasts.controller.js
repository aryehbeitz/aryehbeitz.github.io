export default /*@ngInject*/ class ForecastsController {
  constructor() {
  }

  loadIcon(name) {
    try {
      return require(`../../../assets/images/${name}`);
    }
    catch (e) {}
  }
}
