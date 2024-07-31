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
        <Cards />
    </main>
</template>
<style lang="scss" scoped>
main {
    height: 500px;
    background-color: $background_color;
}
</style>