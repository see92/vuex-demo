const state = {
  animalName: "狮子",
};

const mutations = {
  setName(state, newName) {
    state.animalName = newName;
  },
};

// 导出
export default {
  // 开启命名空间,方便使用...map
  namespaced: true,
  state,
  mutations,
};
