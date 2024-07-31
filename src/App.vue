<script>
import axios from 'axios';
import { store } from '../src/store';

import Header from '../src/components/Header.vue';
import Main from '../src/components/Main.vue';


export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getCards()
  },
  methods: {
    getCards(){
      axios.get(store.url).then((res) => {
        store.cardList = res.data.data
      })
    }
  }
}
</script>

<template>
  <Header />
  <Main />
</template>

<style>
  @import "./components/styles/generals.scss"
</style>
