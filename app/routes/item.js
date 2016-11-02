import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('item', params.item_id);
  },

  actions: {
    addToCart(item) {
      var itemQuantity = item.data.quantity;
      //console.log(this.get('shoppingCart'));
      var cartArray = this.get('shoppingCart').items;
      var sameItemCount = 0;
      for (var i = 0; i < cartArray.length; i++) {
        if(cartArray[i] === item) {
          sameItemCount++;
        }
      }
      if(sameItemCount < itemQuantity){
        this.get('shoppingCart').add(item);
      } else {
        alert('Item No Longer In Stock');
      }
    },
  }
});
