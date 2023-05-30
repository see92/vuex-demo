<template>
  <b-card title="Create Awesome 🙌">
    <b-card-text>This is your second page.</b-card-text>
    <b-card-text>Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.</b-card-text>

    <hr />
    <!-- <div>{{ this.$store.state.name }} </div>
    <div>{{ this.$store.state.age }}</div> -->
    <div>{{ name2 }}</div>
    <div>{{ age2 }}</div>
    <hr />
    <b-button variant="primary" @click="changeName('马六')">点击按钮</b-button>
    <div class="mt-2"> {{ name2 }}</div>
  </b-card>
</template>

<script>
import { BCard, BCardText, BButton } from 'bootstrap-vue'
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    BCard,
    BCardText,
    BButton
  },
  computed: {
    ...mapState({ name2: 'name', age2: 'age' })
  },
  methods: {
    ...mapMutations(['changeName'])
    // 触发mutations中的changeName
    // handleClick() {
    //   this.$store.commit('changeName', '李四')
    // }
  }
}
</script>

<style>
</style>
