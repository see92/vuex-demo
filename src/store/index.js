import Vue from "vue";
import Vuex from "vuex";

// Modules
import app from "./app";
import appConfig from "./app-config";
import verticalMenu from "./vertical-menu";
// 引入模块
import animal from "./animal";

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
  // 也是用来处理任务,处理的是异步任务,异步任务必须使用action,通过action触发Mutations间接改变状态,不能直接使用Mutations直接对异步任务来改变状态
  // 在action中定义一个异步方法来调用mutation
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
      }, 2000);
    },
  },
  getters: {
    /**
     *  对状态进行包装
     * params{*} state 状态 如果要使用state 里的数据,第一个参数默认就是state
     */
    decorationName(state) {
      return `大家好,我的名字叫${state.name},今年${state.age}岁`;
    },
  },
  modules: {
    app,
    appConfig,
    verticalMenu,
    animal,
  },
  strict: process.env.DEV,
});
