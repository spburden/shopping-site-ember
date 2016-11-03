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
    checkout() {
      this.get('shoppingCart').checkout();
    }
  }
});
