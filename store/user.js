// holds your root state
export const state = () => ({
  userId  : '',
  userName: '',
  fName   : '',
  lName   : '',
})

// contains your actions
export const actions = {}

// contains your mutations
export const mutations = {
  setUserId(state, userId) {
    state.userId = userId;
  },
  setUserName(state, userName) {
    state.userName = userName;
  },
}

// your root getters
export const getters   = {
  getUserId() {
    return state.userId;
  },
  getUserName() {
    return state.userName;
  }
}
