<template>
  <b-card title="Create Awesome 🙌">
    <b-card-text>This is your second page.</b-card-text>
    <b-card-text>Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.</b-card-text>

    <hr />
    <!-- <div>{{ this.$store.state.name }} </div>
    <div>{{ this.$store.state.age }}</div> -->
    <!-- <div>{{ name2 }}</div>
    <div>{{ age2 }}</div> -->
    <hr />
    <!-- <b-button variant="primary" @click="changeName('马六')">点击按钮</b-button>
    <div class="mt-2"> {{ name2 }}</div> -->
    <!-- 异步操作第一种方法 -->
    <b-button @click="changeName2('小浪')">方法1,按钮使用actions中的方法</b-button>
    <div>{{ name2 }} </div>
    <!-- 异步操作第二种方法 -->
    <!-- <b-button variant="primary" @click="changeNameAsync('小渣')">点击更改名称</b-button>
    {{ name2 }} -->
    <hr>
    <!-- getter -->
    <!-- {{ this.$store.getters.decorationName }} -->
    <!-- <div>{{ decorationName }}</div> -->
    <hr />
    <!-- animal -->
    <div> {{ this.$store.state.animal.animalName }} </div>
    <b-button variant="success" @click="$store.commit('setName','老五')">更改名字</b-button>

    <hr>
    <div>{{ animalName }}</div>
    <b-button variant="success" @click="setName('蛮子')">点击改变名字</b-button>
  </b-card>
</template>

<script>
import { BCard, BCardText, BButton } from 'bootstrap-vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BCard,
    BCardText,
    BButton
  },
  computed: {
    ...mapState({ name2: 'name', age2: 'age' }),
    ...mapState('animal', ['animalName']),
    /**
     * mapGetters 
     * 将getter映射到当前组件的计算属性上
     */
    ...mapGetters(['decorationName'])
  },
  methods: {
    // 将mutations中的changeName方法映射到methods中,就能直接使用了changeName了
    // ...mapMutations(['changeName'])


    // 触发mutations中的changeName
    // handleClick() {
    //   this.$store.commit('changeName', '李四')
    // }

    // 使用dispatch来调用actions中的方法
    changeName2(newName) {
      this.$store.dispatch("changeNameAsync", newName)
    },
    // 映射 actions中的指定方法,到methods中,就可以在组件使用
    // ...mapActions(['changeNameAsync']),
    ...mapMutations('animal', ['setName'])
  }
}
</script>

<style>
</style>
