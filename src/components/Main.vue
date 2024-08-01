<script>
import Cards from './partials/Cards.vue';
import { store } from '../store';
import axios from 'axios';
export default {
    components: {
        Cards
    },
    data() {
        return {
            store
        }
    },
    created() {
        this.getArchetype()
    },
    methods: {
        getArchetype(){
            axios.get(`${store.url}${store.apiArch}`).then((res) => {
                console.log(res)
                for(let i=0; i<10; i++){
                    store.archetypeList.push(res.data[i])
                    console.log(res.data[i])
                }
            })
        }
    }
}

</script>
<template>
    <main class="py-50">
        <div class="d-flex flex-justify-center">
            <select class="select-style" name="arch" id="arch" v-model="store.archetypeCard">
                <option value="">Select archetype</option>
                <option value="Infernoble Arms">Infernoble Arms</option>
                <option value="Noble Knight">Noble Knight</option>
                <option value="Melodious">Melodious</option>
                <option value="Archfiend">Archfiend</option>
            </select>
        </div>
        <div class="card-container mx-auto rounded-20">
            <div class="bg-dark rounded-t-20">
                <p class="ms-30 py-20">Found {{ store.cardList.length }} cards</p>
            </div>
            <div class="d-flex flex-wrap flex-justify-center p-20">
                <Cards />
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
@use "../components/styles/partials/vars.scss" as *;

main {
    height: 100%;
    background-color: $background_color;
    .card-container {
        background-color: white;
        width: 1000px;
        max-width: 1000px;
        .bg-dark {
            background-color: $bg_dark;
            p {
                color: white;
            }
        }
    }
}
</style>