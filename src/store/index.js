import { createStore } from 'vuex';

import productModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
    modules : {
        products : productModule,
        cart : cartModule
    },
    state() {
        return {
          isLoggedIn: false,
        };
      },
    actions: {
        login(context){
            context.commit('login');
        },
        logout(context){
            context.commit('logout');
        }
    },
    mutations : {
        login(state) {
            state.isLoggedIn = true;
          },
          logout(state) {
            state.isLoggedIn = false;
          },
    },
    getters : {
        isLoggedIn(state){
            return state.isLoggedIn;
        }
    }
})

export default store;