import { reactive } from "vue"
export const store = reactive({
    cardList: [],
    archetypeList: [],
    archetypeCard: "",

    url: "https://db.ygoprodeck.com/api/v7/",
    apiCards: "cardinfo.php?num=50&offset=30",
    apiArch: "archetypes.php"
})