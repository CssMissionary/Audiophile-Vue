<template>
  <div class="headphones-page">
    <PagetitleComponent title="Headphones"/>
    <ProductlineComponent line="headphones"/>
    <ProductvarietyComponent />
  </div>


</template>

<style scoped>

</style>

<script>
import StoredData from "@/assets/data.json" 
import ProductvarietyComponent from '../components/desktop/ProductvarietyComponent.vue';
import BrownbuttonComponent from '@/components/desktop/BrownbuttonComponent.vue';
import ProductlineComponent from '@/components/desktop/ProductlineComponent.vue';
import PagetitleComponent from '@/components/desktop/PagetitleComponent.vue';

export default{

  components:{
    ProductvarietyComponent,
    BrownbuttonComponent,
    ProductlineComponent,
    PagetitleComponent
  }
}
</script>
