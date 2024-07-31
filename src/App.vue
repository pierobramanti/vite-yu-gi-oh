<script>
import axios from 'axios';
import { store } from './store';
export default {
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

</template>

<style scoped>

</style>
