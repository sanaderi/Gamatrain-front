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

    allExamStats2: [],//Start exam page
    currentExam: {
      remainTime: 0,
      notAnsweredArr: []
    }


})

// contains your actions
export const actions = {}

// contains your mutations
export const mutations = {
  //For store last path of user for redirect after login or pay
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


  setExamStats(state, stats) {
    state.allExamStats2 = stats
  },
  updateExamStats(state, payload) {
    // Find the object in the array based on its ID and update its properties
    const index = state.allExamStats2.findIndex(obj => obj.id === payload.id)
    if (index !== -1) {
      state.allExamStats2[index] = {...state.allExamStats2[index], ...payload.data}
    }
  },
  setCurrentExam(state, payload) {
    const index = state.allExamStats2.findIndex(obj => obj.id === payload.id);
    if (index !== -1) {
      state.currentExam.remainTime = state.allExamStats2[index].remainTime;
      state.currentExam.answerData = state.allExamStats2[index].answerData;
      state.currentExam.nextNotAnswer = state.allExamStats2[index].nextNotAnswer;
      if (state.allExamStats2[index].notAnsweredArr.length == 0
        || state.allExamStats2[index].notAnsweredArr == undefined)
        state.currentExam.notAnsweredArr = payload.notAnsweredArr;
      else
        state.currentExam.notAnsweredArr = state.allExamStats2[index].notAnsweredArr;

      state.currentExam.pinQuestionsArr =
        state.allExamStats2[index].pinQuestionsArr != undefined
          ? state.allExamStats2[index].pinQuestionsArr : [];
    } else {
      console.log("testtt");
      state.currentExam.remainTime = payload.time;
      state.currentExam.notAnsweredArr = payload.notAnsweredArr;

    }
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
