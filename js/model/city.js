goog.provide('WeatherDemo.model.City');

goog.require('G');
goog.require('mvc.Model');
goog.require('mvc.LocalSync');



/**
 * @constructor
 * @extends {mvc.Model}
 * @inheritDoc
 */
WeatherDemo.model.City = function(opt_options) {
  opt_options = opt_options || {};
  GG.extend(opt_options, {
    'schema': WeatherDemo.model.City.Schema,
    'sync': mvc.LocalSync
  });
  goog.base(this, opt_options);
};
goog.inherits(WeatherDemo.model.City, mvc.Model);


WeatherDemo.model.City.Schema = {
  'celcius': {
    get: function(temp) {
      return 5 / 9 * (temp - 32);
    },
    /**
     * @this {mvc.Model}
     * @param {number} num temperature
     * @param {boolean} opt_silent
     */
    set: function(num, opt_silent) {
      this.set('temp', num * 9 / 5 + 32, opt_silent);
    },
    require: ['temp']
  }
};
