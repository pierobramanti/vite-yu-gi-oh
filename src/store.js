import { reactive } from "vue"
export const store = reactive({
    cardList: [],
    archetypeList: [],
    url: "https://db.ygoprodeck.com/api/v7/",
    apiCards: "cardinfo.php?num=20&offset=0",
    apiArch: "archetypes.php",
    archetypeCard: "",
})