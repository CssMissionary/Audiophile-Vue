<script>
import AudiogearComponent from './components/desktop/AudiogearComponent.vue'
import NavComponent from './components/desktop/NavComponent.vue'
import FooterComponent from './components/desktop/FooterComponent.vue'

export default{
  data(){
    return {
      modalOpen: false
    }
  },
  components: {
    NavComponent,
    AudiogearComponent,
    FooterComponent
  }
}
</script>

<template>
  <div>
    <NavComponent :modalOpen="modalOpen" @showModal="this.modalOpen = !this.modalOpen" />

      <RouterView />
      <AudiogearComponent v-show="this.$route.name != 'checkout'" />
      <FooterComponent />
 
  </div>


</template>

<style scoped>

</style>
