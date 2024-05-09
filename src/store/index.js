import { createStore } from "vuex";

export default createStore({
    state: {
        cart: [],
            
    },
    actions: {},
    mutations: {
        addToCart(state, item){
            let index = state.cart.findIndex(a => a.id === item.id || a.slug === item.slug)

            if(index === -1) state.cart.push(item);
            else state.cart[index] = item
        },
        removeAll(state){
            state.cart.length = 0
        },
      plusQuantity(state, item){
        item.productQuantity++
      },
      removeQuantity(state,item){
        if(item.productQuantity > 1){
            item.productQuantity--
        }
      }
    },
    getters: {
        cartTotal(state){
            return state.cart.reduce((a, b) => {
                return a + (b.productQuantity * b.price)
            }, 0)
        },
        vatCalculator(state, getters){
            return Math.round(getters.cartTotal * 0.19)
        },
        grandTotal(state, getters){
            return Math.round(getters.cartTotal + getters.vatCalculator + 50);
        }
    }
})