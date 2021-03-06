import Ember from 'ember';
import layout from '../templates/components/paging-widget';

export default Ember.Component.extend({
  layout: layout,
  classNames: [ 'paging-container'],
  
  _isValidOffset: function() {
    var offset = Number(this.get('offset'));
    return !(offset > this.get('total'));
  },

  shouldShow: function() {
    var show = this.get('showPrev') || this.get('showNext');
    return show && this._isValidOffset();
  }.property('showPrev','showNext'),
  
  printableOffset: function() {
    return Number(this.get('offset')) + 1;
  }.property('offset'),
  
  showPrev: function() {
    return this.get('offset') > 0;    
  }.property('offset'),
    
  showNext: function() {
    return  this.get('offset') + this.get('limit') < this.get('total');
  }.property('offset', 'limit','total'),
  
  prevValue: function() {
    var val = this.get('offset') - this.get('limit');
    if(  val < 0 ) {
      val = 0;
    }
    return val;
  }.property('offset','limit'),
  
  nextValue: function() {
    return this.get('offset') + this.get('limit');
  }.property('offset','limit'),

  lastValue: function() {
    var off = this.get('offset');
    var count = this.get('length');
    var limit = this.get('limit');
    return off + ( count < limit ? count : limit);
  }.property('offset','length','limit'),
  
  lastPage: function() {
    var total = this.get('total');
    var off = this.get('offset');
    var limit = this.get('limit');
    if( total - limit > off ) { 
      return total - limit;
    }
    return false;
  }.property('total','offset','limit'),
  
  showLast: Ember.computed.alias('lastPage'),
  
});

