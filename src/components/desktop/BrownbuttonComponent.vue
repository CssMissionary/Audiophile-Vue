<template>
  <router-link 
  :to="{ name: 'productPage', params: { id: productId || 2} }">
  <button>SEE PRODUCT</button>
  </router-link>
</template>

<script>
export default {
  props: {
    productId: String
  }

}
</script>

<style scoped>
button{
background: none;
border: none;
outline: none;
color: inherit;
cursor: inherit;
}
a {
    width: 150px;
    height: 40px;
    color: var(--color-white-light);
    background-color: var(--color-brown-dark);
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
}
a:hover{
    background-color: var(--color-brown-light);
    transition: 0.3s ease-in-out;
}


</style>