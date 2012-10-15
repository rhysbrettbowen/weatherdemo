goog.provide('WeatherDemo.control.Single');

goog.require('goog.events.KeyCodes');
goog.require('mvc.Control');



/**
 * @constructor
 * @extends {mvc.Control}
 * @inheritDoc
 */
WeatherDemo.control.Single = function(model) {
  goog.base(this, model);
};
goog.inherits(WeatherDemo.control.Single, mvc.Control);


/**
 * @inheritDoc
 */
WeatherDemo.control.Single.prototype.canDecorate = function(el) {
  return $('.city', el).size() &&
    $('.temp', el).size() &&
    $('.celcius', el).size();
};


/**
 * @inheritDoc
 */
WeatherDemo.control.Single.prototype.decorateInternal = function(el) {
  return goog.base(this, 'decorateInternal', el);
};


/**
 * @inheritDoc
 */
WeatherDemo.control.Single.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  this.autobind('.city', '{$city}');
  this.autobind('.temp', '{$temp}');
  this.autobind('.celcius', '{$celcius}');

  this.on(goog.events.EventType.KEYUP, function(e) {
    if (e.keyCode === goog.events.KeyCodes.ENTER) {
      e.target.blur();
    }
  }, 'input');
};
