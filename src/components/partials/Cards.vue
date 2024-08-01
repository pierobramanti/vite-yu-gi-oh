<script>

import { store } from '../../store';
export default {
    props: {
        cardsArr: Array
    },

    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="mx-auto rounded-20 d-flex flex-wrap">
        <div class="card m-10x5" v-for="card in store.cardList" :key="card.id">
            <div class="img-box d-flex flex-justify-center">
                <img class="mxw-100 mx-auto" v-for="(img, index) in card.card_images" :key="`img-${index}`" :src="img.image_url" alt="card">
            </div>
            <p class="name text-center p-5x20">{{card.name}}</p>
            <p class="card-type text-center pb-10">{{ card.type }}</p>
            <p class="card-type text-center pb-10">{{ card.archetype }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/vars.scss" as *;
.card {
    border: 1px solid black;
    background-color: $background_color;
    width: calc(100% / 6);
    
    .img-box {
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }        
    }
    p.name {
        color: white;
        font-weight: 800;
    }
    
}
</style>