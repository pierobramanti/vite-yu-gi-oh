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

<style scoped>

</style>
