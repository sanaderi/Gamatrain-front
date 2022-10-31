// State (Variables and collections)
export const state=() =>({
  cart:[],
})



// Actions (Asynchronous functions)
export const actions = {
  async retrieveCart({ commit }) {
    const cart = await Vue.prototype.$commerce.cart.retrieve()

    if (cart) {
      commit('setCart', cart)
    }
  },

  async addProductToCart({ commit }, id, count) {
    const addProduct = await Vue.prototype.$commerce.cart.add(id, count)

    if (addProduct) {
      commit('setCart', addProduct.cart)
    }
  },

  async removeProductFromCart({ commit }, payload) {
    const removeProduct = await Vue.prototype.$commerce.cart.remove(payload)

    if (removeProduct) {
      commit('setCart', removeProduct.cart)
    }
  },

  async clearCart({ commit }) {
    const clear = await Vue.prototype.$commerce.cart.empty()

    if (clear) {
      commit('clearCart')
    }
  }
}

// Mutations (Synchronous functions)
export const mutations = {
  setCart(state, payload) {
    var index = state.cart.findIndex(item => item.product_id === payload.Id);
    if (index < 0) {
      state.cart.push(
        {
          product_id: payload.Id,
          product_count: 1,
          product_price: payload.Price,
          product_price_by_discount: payload.Price,
          product_title: payload.Title
        });
    } else {
      //Update object
      this._vm.$set(state.cart, index, {
        product_id: payload.Id,
        product_count: 1 + parseInt(state.cart[index].product_count),
        product_price: payload.Price,
        product_price_by_discount: payload.Price,
        product_title: payload.Title
      });
    }
  },
  deleteCartItem(state,payload){
    this._vm.$delete(state.cart,payload);
  },
  clearCart(state) {
    state.cart = []
  }
}

// Getters (Shared state)
export const getters = {
  cart(state) {
    return state.cart
  }
}
