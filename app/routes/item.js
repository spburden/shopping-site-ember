import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('item', params.item_id);
  },

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    removeItem(item){
      this.get('shoppingCart').remove(item);
    },
    //checkout(params){
      //console.log(params);
      //this.get('shoppingCart').checkout();
    //  console.log(shoppingCart.items[0].data.quantity);
    //   for (var i = 0; i < shoppingCart.items.length; i++) {
    //     var item = shoppingCart.items[i];
    //     var params = {
    //       quantity : shoppingCart.items[i].data.quantity
    //     };
    //   //  console.log(params.quantity);
    //     Object.keys(params).forEach(function(key) {
    //       item.set(key, params[key]);
    //     });
    //   item.save();
    //   }
   //},
  }
});
