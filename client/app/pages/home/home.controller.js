export default /*@ngInject*/ class HomeController {
  constructor() {
    this.forecastsData =
    [
      {
        days: 1,
        daysColor: '#59b2b2',
        mainText: 'Lennox Hill Hospital',
        subText: '(non contracted)',
        barColor: '#a5d1d1',
      },
      {
        days: 2,
        daysColor: '#99cdcd',
        mainText: 'Possible mechanical ventilation, possible bronchoscopy, IV antibiotics',
        subText: '',
        barColor: '#59b2b2',
      },
      {
        days: 6,
        daysColor: '#f5a623',
        mainText: 'Expecting length of stay between 5-7 days',
        subText: '',
        barColor: '#f3cb8a',
      },
      {
        days: 45,
        daysColor: '#d0021b',
        mainText: '3% of pneumonia cases will spend upwards of 45 days admitted',
        subText: '',
        barColor: '#e07986',
      }
    ]
  }
}
