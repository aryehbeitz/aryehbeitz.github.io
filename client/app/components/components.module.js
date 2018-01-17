import Navbar from './navbar/navbar.module';
import Forecasts from './forecasts/forecasts.module';
import ForecastsColumns from './forecastsColumns/forecastsColumns.module';
import Estimation from './estimation/estimation.module';

export default angular.module('app.components',
  [Navbar, Forecasts, ForecastsColumns, Estimation])
  .name
