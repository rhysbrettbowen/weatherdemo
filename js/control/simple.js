goog.provide('WeatherDemo.control.Simple');

goog.require('WeatherDemo.Mediator');
goog.require('mvc.Control');



/**
 * @constructor
 * @extends {mvc.Control}
 * @inheritDoc
 */
WeatherDemo.control.Simple = function(model) {
  goog.base(this, model);
  WeatherDemo.Mediator.register(this, 'chooseCity');
};
goog.inherits(WeatherDemo.control.Simple, mvc.Control);


/**
 * @inheritDoc
 */
WeatherDemo.control.Simple.prototype.createDom = function() {
  var el = $('<div><div class="city"></div><div class="temp"></div></div>');
  this.setElementInternal(el[0]);
};


/**
 * @inheritDoc
 */
WeatherDemo.control.Simple.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  this.autobind('.city', 'City: {$city}');

  this.autobind('.temp', '{$temp} degrees');

  this.bind('temp', function(temp) {
    $(this.getElement()).css('left', temp * 10 - 300);
  }).fire();

  this.click(function() {
    this.broadcast('chooseCity', this.getModel().get('id'));
  });

  this.autobind('', {
    reqs: ['celcius'],
    reqClass: ['hot', 'mild'],
    chooseClass: function(celcius) {
      if (celcius > 30)
        return 'hot';
      if (celcius < 20)
        return 'mild';
    }
  });
};
