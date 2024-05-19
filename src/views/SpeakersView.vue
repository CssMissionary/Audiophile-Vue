<template>
    <div class="speakers-page">
        <PagetitleComponent title="speakers"/>
        <ProductlineComponent :line="'speakers'" />
        <ProductvarietyComponent />
    </div>

</template>

<style scoped>

</style>

<script>
import StoredData from "@/assets/data"
import ProductvarietyComponent from '../components/desktop/ProductvarietyComponent.vue';
import BrownbuttonComponent from '@/components/desktop/BrownbuttonComponent.vue';
import ProductlineComponent from '@/components/desktop/ProductlineComponent.vue';
import PagetitleComponent from "@/components/desktop/PagetitleComponent.vue";

export default {
    data() {
        return {
            data: StoredData,
            filteredArray: []
        }
    },
    mounted() {
        this.filteredArray = this.data.filter(i => {
            return i.category === 'speakers'
            console.log(i)
        })
    },
    components: {
        ProductvarietyComponent,
        BrownbuttonComponent,
        ProductlineComponent,
        PagetitleComponent
    }
}
</script>