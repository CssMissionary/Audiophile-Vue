<template>
    <div class="headphones">
        <div class="headphone flex" v-for="headphone in filteredArray" :key="headphone.id">
            <img :src="headphone.image.desktop" alt="" width="450px" height="450px" style="border-radius: 10px;">
            <div class="details">
                <div class="new" v-if="headphone.new">
                    <p>NEW PRODUCT</p>
                </div>
                <h1>{{ headphone.name }}</h1>
                <p>{{ headphone.description }}</p>
                <BrownbuttonComponent :productId="headphone.id"/>
            </div>
        </div>
    </div>
</template>

<script>
import StoredData from "@/assets/data.json"
import BrownbuttonComponent from './BrownbuttonComponent.vue'

export default {
    components: {
        BrownbuttonComponent
    },
    props: {
        line: String
    },
    data() {
        return {
            data: StoredData,
            filteredArray: [],
        }
    },
    mounted() {
        this.filteredArray = this.data.filter(i => {
            return i.category === this.line
            console.log(i)
        })
    }
}
</script>

<style scoped>
.headphones {
    margin: 150px;
}
.headphone:nth-child(even) {
    flex-direction: row-reverse;
}
.headphone {
    gap: 15%;
    margin-bottom: 160px;
}
.details h1 {
    text-transform: uppercase;
    margin-bottom: 20px;
    width: 300px;
}
.details p {
    margin-bottom: 20px;
    line-height: 1.5em;
}
.new p {
    letter-spacing: 0.7em;
    opacity: 0.7;
    margin-bottom: 1.0em;
    color: var(--color-brown-dark);
}
@media screen and (max-width: 480px) {
    .headphones{
        margin: 0;
        margin-bottom: -120px;
    }
    .headphone{
        flex-direction: column;
        margin-top: 80px;
    }
    .headphone img{
        width: 350px;
        height: 350px;
    }
    .details{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-top: 30px;
    }
    .details h1{
        width: fit-content;
        margin: 20px 40px;
    }
    .details p{
        padding: 0 40px;
    }
    .headphone:nth-child(even){
        flex-direction: column;
    }
}
</style>