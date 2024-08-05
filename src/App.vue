<script>
import axios from 'axios';
import { store } from './store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  components: {
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getCards(),
    this.getArchetype()
  },

  methods: {
    getCards() {
      let url = `${store.url}${store.apiCards}`
      if (store.archetypeCard !== "") {
        url += `&archetype=${store.archetypeCard}`
      }
      axios.get(url).then((res) => {
        store.cardList = res.data.data
      })
    },
    getArchetype() {
      axios.get(`${store.url}${store.apiArch}`).then((res) => {
        //console.log(res)
        store.archetypeList = res.data
        // for (let i = 0; i < 10; i++) {
        //   store.archetypeList.push(res.data[i])
        //   console.log(res.data[i])
        // }
        console.log(store.archetypeList)
      })
    }
  }
}
</script>

<template>
  <Header />
  <Main @filter="getCards" />
</template>

<style>
@import "./components/styles/generals.scss"
</style>