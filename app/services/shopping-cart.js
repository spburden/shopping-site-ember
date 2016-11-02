import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    this.get('items').pushObject(item);
    this.totalCart(this.get('items'));
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    this.get('items').splice(index, 1);
  },
  includes(item) {
    return this.get('items').includes(item);
  },
  totalCart(items) {
    var total2 = 0;
    for (var i = 0; i < items.length; i++) {
      total2+=items[i].data.price;
    }
    this.set("total", total2);
  }

});
