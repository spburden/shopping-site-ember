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
        alert(item.data.name + ' Is No Longer In Stock');
      }
    },
    refresh(item){
      console.log(item);
      this.get('shoppingCart').remove(item);
      //console.log(item.id);
      this.transitionTo('item', item.id);
    },
    checkout(shoppingCart){
      var itemsArray = [];
      for (var i = 0; i < shoppingCart.items.length; i++) {
        if (itemsArray.indexOf(shoppingCart.items[i]) === -1) {
          itemsArray.push(shoppingCart.items[i]);

        }
      }
      console.log(itemsArray);

    },
  }
});
