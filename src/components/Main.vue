<script>
import Cards from './partials/Cards.vue';
export default {
    components: {
        Cards
    }
}

</script>
<template>
    <main class="py-50">
        <div class="card-container mx-auto rounded-20">
            <div class="bg-dark rounded-t-20">
                <p class="ms-30 py-10">Found cards</p>
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
    height: 500px;
    background-color: $background_color;
    .card-container {
        background-color: white;
        max-width: 900px;
        .bg-dark {
            background-color: $bg_dark;
            p {
                color: white;
            }
        }
    }
}
</style>