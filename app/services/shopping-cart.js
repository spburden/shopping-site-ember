import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0.00,

  add(item) {
    if(item.get('alreadyInCart') === false && item.get('quantity') > 0) {
      this.get('items').pushObject(item);
    }
    if(item.get('quantity') > 0) {
      item.set('quantity', (item.get('quantity')-1));
      item.set('numberInCart', (item.get('numberInCart')+1));
      var newTotal = parseFloat(this.get('total')) + parseFloat(item.get('price'));
      this.set("total", newTotal.toFixed(2));
    }
  },
  remove(item) {
    if(item.get('numberInCart') > 0) {
      var newTotal = parseFloat(this.get('total')) - parseFloat(item.get('price'));
      this.set("total", newTotal.toFixed(2));
      item.set('quantity', (item.get('quantity')+1));
      item.set('numberInCart', (item.get('numberInCart')-1));
    }
    if (item.get('numberInCart') === 0) {
      this.get('items').removeObject(item);
    }
  },
  includes(item) {
    return this.get('items').includes(item);
  },
  checkout() {
    console.log(this.get('items'));
    for (var i = 0; i < this.get('items').length; i++) {
      this.get('items')[i].set('numberInCart', 0);
      this.get('items')[i].save();
    }
    this.set("items", []);
    this.set("total", 0.00);
  }
});
