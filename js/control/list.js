goog.provide('WeatherDemo.control.List');

goog.require('G');
goog.require('WeatherDemo.control.Simple');
goog.require('WeatherDemo.template.List');
goog.require('mvc.Control');



/**
 * @constructor
 * @extends {mvc.Control}
 * @inheritDoc
 */
WeatherDemo.control.List = function(model) {
  goog.base(this, model);
  model.setComparator(WeatherDemo.control.List.Sort.ALPHA);
};
goog.inherits(WeatherDemo.control.List, mvc.Control);


/**
 * @enum {Function}
 */
WeatherDemo.control.List.Sort = {
  'ALPHA': function(a, b) {
    return a.get('city') > b.get('city') ||
      (a.get('city') == b.get('city')) - 1;
  },
  'TEMP': function(a, b) {
    return b.get('temp') - a.get('temp');
  }
};


/**
 * @inheritDoc
 */
WeatherDemo.control.List.prototype.createDom = function() {
  var el = $(WeatherDemo.template.List.main(null));
  this.setElementInternal(el[0]);
};


/**
 * @inheritDoc
 */
WeatherDemo.control.List.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var content = this.getEls('.content')[0];

  this.autolist(WeatherDemo.control.Simple, content);

  this.on('change', this.changeSort, '.sort');
};


/**
 * @param {goog.events.Event} e vent.
 */
WeatherDemo.control.List.prototype.changeSort = function(e) {
  this.getModel().setComparator(
      WeatherDemo.control.List.Sort[$(e.target).val()]);
};


WeatherDemo.control.List.prototype.placeChild_ = function(
    contentEl, child, index) {
  $(child.getElement()).css({
    'top': index * 45
  });
};
