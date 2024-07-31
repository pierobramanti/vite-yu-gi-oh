<script>

import { store } from '../../store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="mx-auto rounded-20">
        <div class="card col-16 m-10x5" v-for="card in store.cardList" :key="card.id">
            <div class="square">
                <img class="mxw-100" v-for="(img, index) in card.card_images" :key="`img-${index}`" :src="img.image_url" alt="">
            </div>
            <p>{{card.name}}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    border: 1px solid black;
    @media screen and (max-width: 800px){
            width: calc(100% / 3);
    }
    
}
</style>