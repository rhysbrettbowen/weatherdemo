goog.provide('WeatherDemo.control.Single');

goog.require('mvc.Control');
goog.require('WeatherDemo.template.Single')
goog.require('goog.events.KeyCodes');



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
WeatherDemo.control.Single.prototype.createDom = function() {
  var el = $(WeatherDemo.template.Single.main(null));
  this.setElementInternal(el[0]);
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
