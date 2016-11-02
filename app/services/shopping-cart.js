import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    console.log(index);
    this.get('items').splice(index, 1);
    // this.get('items').removeObject(item);
  },
  includes(item) {
    return this.get('items').includes(item);
  },
  totalCart() {
    var total = 0;
    var itemsArray = this.get('items');
    for (var i = 0; i < itemsArray.length; i++) {
      total+=itemsArray[i].price;
    }
    return total;
  }

});
