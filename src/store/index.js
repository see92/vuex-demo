import Vue from "vue";
import Vuex from "vuex";

// Modules
import app from "./app";
import appConfig from "./app-config";
import verticalMenu from "./vertical-menu";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "张三",
    age: 24,
  },
  mutations: {
    // 在这里定义方法
    changeName(state, newName) {
      state.name = newName;
    },
  },
  actions: {
    /**
     * state    上下文默认传递的参数
     * newName  自己传递的参数
     */
    // 定义一个异步的方法,context是store
    changeNameAsync(context, newName) {
      // 此处用setTimeout模拟异步
      setTimeout(() => {
        // 在这里调用mutations中的处理方法
        context.commit("changeName", newName);
      });
    },
  },
  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
});
