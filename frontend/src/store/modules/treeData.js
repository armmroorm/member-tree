const state = {
  userId: null,
};

const mutations = {
  logout(state) {
    state.userId = null;
  },
  login(state, userId) {
    state.userId = userId;
  },
};

export default {
  state,
  mutations,
};
