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

  //Exam room
  examParticipationData: [],
  //End exam room
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


  //Save user participation exam data
  setExamParticipationData(state, examStats) {
    var index = state.examParticipationData.findIndex(x => x.id == examStats.id);
    if (index === -1)
      state.examParticipationData.push(examStats);
    else{
      state.examParticipationData[index].remainTime=examStats.remainTime;
      state.examParticipationData[index].nextPin=examStats.nextPin;
      state.examParticipationData[index].nextNotAnswer=examStats.nextNotAnswer;
    }
  },
  pinQuestion(state, {questionId,id}) {
    var index = state.examParticipationData.findIndex(x => x.id == id);
    if (index !== -1)
      state.examParticipationData[index].pinQuestionsArr.push(questionId);
  },
  selectQuestion(state, {val,id}) {
    const index = state.examParticipationData.findIndex(x => x.id == id);
    if (index !== -1)
      state.examParticipationData[index].answerData=val;
  },

  updateAnswerData(state, payload) {
    state.user.examParticipationData[payload.index].answerData = payload.answerData;
  }

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
