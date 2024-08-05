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
    this.getCards()
  },
  computed: {
    getArchetype() {
      axios.get(`${store.url}${store.apiArch}`).then((res) => {
        //console.log(res)
        for (let i = 0; i < 10; i++) {
          store.archetypeList.push(res.data[i])
          console.log(res.data[i])
        }
        console.log(store.archetypeList)
      })
    }
  },
  methods: {
    getCards() {
      let url = `${store.url}`
      if (store.archetypeCard != "") {
        url += `?archetype_name=${store.archetypeList}`
      }
      axios.get(`${store.url}${store.apiCards}`).then((res) => {
        store.cardList = res.data.data
      })
    },
  }
}
</script>
<template>
  <Header />
  <Main @filter="getArchetype" />
</template>
<style>
@import "./components/styles/generals.scss"
</style>