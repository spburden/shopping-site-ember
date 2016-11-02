import Ember from 'ember';

export function itemQuantity(params) {
  // shoppingCart: Ember.inject.service(),
  // var itemQuantity = params[0].data.quantity;
  // console.log(this.get('shoppingCart'));
  // var cartArray = this.get('shoppingCart').items;
  // var sameItemCount = 0;
  // for (var i = 0; i < cartArray.length; i++) {
  //   if(cartArray[i] === item) {
  //     sameItemCount++;
  //   }
  // }
  // return sameItemCount;
  console.log(params[1].items);
}

export default Ember.Helper.helper(itemQuantity);
