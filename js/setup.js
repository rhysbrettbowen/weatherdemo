goog.provide('WeatherDemo.Mediator');
goog.provide('WeatherDemo.Store');

goog.require('WeatherDemo.model.City');
goog.require('mvc.Mediator');
goog.require('mvc.Store');


WeatherDemo.Mediator = new mvc.Mediator();

WeatherDemo.Store = new mvc.Store(WeatherDemo.model.City);
