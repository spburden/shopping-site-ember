import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  actions:{
    toggleSidebar(){
       Ember.$('#sub-sidebar').sidebar("toggle");
    },
    checkout() {
       this.get('shoppingCart').checkout();
    },
    removeItem(item){
      this.get('shoppingCart').remove(item);
    },
  }
});
