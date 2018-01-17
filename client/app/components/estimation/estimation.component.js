import template from './estimation.template.html';
import controller from './estimation.controller.js';
import './estimation.styles.scss';

export default {
  controllerAs: '$ctrl',
  bindings: {
    estimationData: '<'
  },
  template,
  controller
};
