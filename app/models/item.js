import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  quantity: DS.attr(),
  image: DS.attr(),
  numberInCart: DS.attr(),

  shoppingCart: Ember.inject.service(),
  alreadyInCart: Ember.computed('shoppingCart.items.[]', function() {
    return this.get('shoppingCart').includes(this);
  })
});
