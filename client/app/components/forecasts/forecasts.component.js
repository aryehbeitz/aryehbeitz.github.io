import template from './forecasts.template.html';
import './forecasts.styles.scss';

export default {
  controllerAs: '$ctrl',
  bindings: {
    forecastData: '<'
  },
  template
};
