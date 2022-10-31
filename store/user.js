// holds your root state
export const state = () => ({
  userId  : '',
  userName: '',
  fName   : '',
  lName   : '',
  lastPath: ''
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
  setLastPath(state,lastPath){
    state.lastPath=lastPath;
  }
}

// your root getters
export const getters   = {
  getUserId(state) {
    return state.userId;
  },
  getUserName(state) {
    return state.userName;
  },
  getLastPath(state){
    return state().lastPath;
  }
}
