// holds your root state
export const strict = false


export const state = () => ({
  userId: '',
  userName: '',
  fName: '',
  lName: '',
  lastPath: '',
  examId: '',
  examCode: '',
  previewTestList: [],

})

// contains your actions
export const actions = {

}

// contains your mutations
export const mutations = {
  setUserId(state, userId) {
    state.userId = userId;
  },
  setUserName(state, userName) {
    state.userName = userName;
  },
  setLastPath(state, lastPath) {
    state.lastPath = lastPath;
  },

  //For online exam creation
  setCurrentExamId(state, examId) {
    state.examId = examId;
  },
  setCurrentExamCode(state, examCode) {
    state.examCode = examCode;
  },
  setPreviewTestList(state, previewTestList) {
    state.previewTestList = previewTestList;
  },
  addPreviewTestList(state, previewTestList) {
    state.previewTestList.push(previewTestList);
  },
  removePreviewTestList(state, id) {
    var previewIndex = state.previewTestList
      .findIndex(x => x.id == id);
    state.previewTestList.splice(previewIndex, 1);
  },



}

// your root getters
export const getters = {
  getUserId(state) {
    return state.userId;
  },
  getUserName(state) {
    return state.userName;
  },
  getLastPath(state) {
    return state().lastPath;
  },

  //For online exam creation
  getCurrentExamId(state) {
    return state().examId;
  },
  getCurrentExamCode(state) {
    return state().examCode;
  },

  getPreviewTestList(state) {
    return state.previewTestList;
  },
  getPreviewTestListLength(state) {
    return state.previewTestList.length;
  },

  //Get user participation exam data
  getExamStatsData(state) {
    return state.examParticipationData;
  }
}
