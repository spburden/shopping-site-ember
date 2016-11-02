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
    console.log(item.get('numberInCart'));
    if(item.get('numberInCart') > 0) {
      var newTotal = parseFloat(this.get('total')) - parseFloat(item.get('price'));
      this.set("total", newTotal.toFixed(2));
      item.set('quantity', (item.get('quantity')+1));
      item.set('numberInCart', (item.get('numberInCart')-1));
    }
    if (item.get('numberInCart') === 0) {
      this.get('items').removeObject(item);
    }
    console.log(this.get('items'));
  },
  includes(item) {
    return this.get('items').includes(item);
  },
  clearCart() {
    this.set("items", []);
    this.set("total", 0);
  }

});
