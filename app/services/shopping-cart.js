import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0.00,

  add(item) {
    if(item.get('quantity') > 0) {
      item.set('quantity', (item.get('quantity')-1));
      console.log(item.get('quantity'));
      item.set('numberInCart', (item.get('numberInCart')+1));
      var newTotal = parseFloat(this.get('total')) + parseFloat(item.get('price'));
      this.set("total", newTotal.toFixed(2));
    }
    if(item.get('alreadyInCart') === false && item.get('quantity') > 0) {
      item.save();
      this.get('items').pushObject(item);
    }
    console.log(this.get('items'));
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
  },
  includes(item) {
    return this.get('items').includes(item);
  },
  checkout() {
    // console.log(this.get('items'));

    //for (var i = 0; i < this.get('items').length; i++) {
    //   // var item = shoppingCart.items[i];
    //   // var params = {
    //   //   quantity : shoppingCart.items[i].data.quantity
    //   };
    // this.set("items", []);
    // this.set("total", 0);
  //}
  }
});
