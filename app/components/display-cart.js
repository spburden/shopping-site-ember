import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeItem(item) {
      this.sendAction('removeItem', item);
    },
    checkout(shoppingCart) {
      this.sendAction('checkout', shoppingCart);
    },

  }
});
