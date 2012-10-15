goog.provide('WeatherDemo.main');


goog.require('G');
goog.require('WeatherDemo.Mediator');
goog.require('WeatherDemo.Store');
goog.require('WeatherDemo.control.List');
goog.require('WeatherDemo.control.Single');
goog.require('WeatherDemo.model.City');
goog.require('goog.dom.query');
goog.require('mvc.Collection');


WeatherDemo.main = function() {

  $$.setSelectorEngine(goog.dom.query);

  var cities = new mvc.Collection({
    'modelType': WeatherDemo.model.City
  });

  window['a'] = cities;

  $$.each(WeatherDemo.main.Cities, function(city) {
    var model = WeatherDemo.Store.get(city['id']);
    model.set(city);
    cities.add(model);
  });

  var single = new WeatherDemo.control.Single(cities.at(0));
  single.decorate($('.single')[0]);

  WeatherDemo.Mediator.on('chooseCity', function(id) {
    single.setModel(WeatherDemo.Store.get(id));
  });

  $('<button>Randomize</button>')
    .appendTo(document.body)
    .click(function() {
      $(cities.getModels()).each(function(city) {
        city.set('temp', Math.floor(Math.random() * 70) + 30);
      });
    });

  var cityList = new WeatherDemo.control.List(cities);
  cityList.render(document.body);

  $('form').on('submit', function(e) {
    var name = $('form .city').val();
    var temp = $('form .temp').val();
    var model = WeatherDemo.Store.get(name);
    model.set({
      'id': name,
      'city': name,
      'temp': temp
    });
    cities.add(model);
    e.preventDefault();
  });

};
goog.exportSymbol('WeatherDemo.main', WeatherDemo.main);


WeatherDemo.main.Cities = [
  {
    'id': 'Sydney',
    'city': 'Sydney',
    'temp': 75
  },
  {
    'id': 'Melbourne',
    'city': 'Melbourne',
    'temp': 62
  },
  {
    'id': 'Brisbane',
    'city': 'Brisbane',
    'temp': 84
  },
  {
    'id': 'Perth',
    'city': 'Perth',
    'temp': 96
  },
  {
    'id': 'Adelaide',
    'city': 'Adelaide',
    'temp': 68
  },
  {
    'id': 'Darwin',
    'city': 'Darwin',
    'temp': 102
  },
  {
    'id': 'Hobary',
    'city': 'Hobart',
    'temp': 35
  }
];
