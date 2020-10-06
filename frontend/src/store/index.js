import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import treeData from "./modules/treeData";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    treeData,
  },
  plugins: [
    createPersistedState(
      {
        key: "data",
      },
      {
        storage: window.sessionStorage,
      }
    ),
  ],
});

export default store;
