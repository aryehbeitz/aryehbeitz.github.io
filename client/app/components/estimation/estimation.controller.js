export default /*@ngInject*/ class EstimationController {
  constructor() {
  }

  alertIcon() {
    return require('../../../assets/images/alert.svg');
  }

  openModal(text) {
    alert(text);
  }
}
