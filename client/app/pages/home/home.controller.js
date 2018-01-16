export default /*@ngInject*/ class HomeController {
  constructor() {
    this.num = 0;
  }
  plus() {
    this.num +=1;
  }
}
