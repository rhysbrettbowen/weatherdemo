goog.provide('WeatherDemo.Mediator');
goog.provide('WeatherDemo.Store');

goog.require('mvc.Store');
goog.require('mvc.Mediator');
goog.require('WeatherDemo.model.City');


WeatherDemo.Mediator = new mvc.Mediator();

WeatherDemo.Store = new mvc.Store(WeatherDemo.model.City);