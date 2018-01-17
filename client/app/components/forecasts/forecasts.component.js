import template from './forecasts.template.html';
import controller from './forecasts.controller.js';
import './forecasts.styles.scss';

export default {
  controllerAs: '$ctrl',
  bindings: {
    forecastData: '<'
  },
  template,
  controller
};
