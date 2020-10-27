import Vue from 'vue'
import Vuex from 'vuex'
import createPersisteadState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersisteadState()],
    state: {
        cart: [],
        cartCount: 0,
    },
    mutations: {
        addToCart: (state,item) => {
            let found = state.cart.find(product => product.id == item.id);

            if(found){
                found.quantity++;
                found.totalPrice = found.quantity * found.price;
            } else {
                state.cart.push(item);
                Vue.set(item, 'quantity', 1);
                Vue.set(item,'totalPrice', item.price);
            }
            state.cartCount++;
        }
    },
    getters: {
        getCart: (state) => {
            return state.cart
        }
    }
  })
  export default store;