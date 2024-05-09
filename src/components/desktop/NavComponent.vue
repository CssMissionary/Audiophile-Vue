<template>
  <nav class="flex">
    <img src="@/assets/shared/tablet/icon-hamburger.svg" alt="" class="hamburger" @click="scrollToMenu">
    <RouterLink to="/"><img src="@/assets/shared/desktop/logo.svg" alt="logo"></RouterLink>
    <ul>
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
      <RouterLink :to="{name: 'headphones'}">Headphones</RouterLink>
      <RouterLink :to="{name: 'speakers'}">Speakers</RouterLink>
      <RouterLink :to="{name: 'earphones'}">Earphones</RouterLink>
    </ul>
    <div class="shop" @click="showModal">
      <img src="@/assets/shared/desktop/icon-cart.svg" alt="cart">
      <div class="notification">
        <p>{{ this.cart.length }}</p>
      </div>
    </div>
    <div class="modal" v-show="modalOpen" @click="showModal">
    </div>

    <div class="cart" v-show="modalOpen">
      <div class="header flex">
        <h3>YOUR CART ({{ this.cart.length }})</h3>
        <button class="remove" @click="removeAll">Remove All</button>
      </div>
      <div class="cart-items">
        <div class="item flex" v-for="item in cart" :key="item.id">
          <div class="left flex">
            <img :src="item.image.desktop" alt="">
            <div class="title-total">
              <h5>{{ item.name }}</h5>
              <p class="price">${{ item.price }}</p>
            </div>
          </div>
          <div class="counter flex">
            <button class="minus" @click="removeQuantity(item)">-</button>
            <input type="number" class="number" v-model="item.productQuantity ">
            <button class="plus" @click="plusQuantity(item)">+</button>
          </div>
        </div>
      </div>
      <div class="total flex">
        <h3>TOTAL</h3>
        <h4>${{ cartTotal }}</h4>
      </div>
      <RouterLink :to="{ name: 'checkout' }" class="checkout" @click="showModal">CHECKOUT</RouterLink>
    </div>

  </nav>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  props: {
    modalOpen: Boolean
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  },
  methods: {
    ...mapMutations(['plusQuantity', 'removeQuantity', 'removeAll']),
    showModal(){
      this.$emit('showModal', !this.modalOpen)
    },
    scrollToMenu(){
      window.scrollTo({top: 550, behavior: 'smooth'})
    }
  }
}
</script>

<style scoped>
nav{
    background-color: var(--color-black-dark);
    height: 9vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 100;
    justify-content: space-evenly;
}
.hamburger{
  display: none;
}
ul a{
    margin-left: 2rem;
    color: var(--color-white-light);
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 100;
}
ul a:hover, ul a.router-link-active{
    color: var(--color-brown-dark);
    transition: .3s ease-in-out;
}
.shop{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.notification{
  margin-top: -25px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--color-brown-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(27, 26, 26, 0.501);
  z-index: 100;
}
.cart{
  width: 350px;
  height: auto;
  background-color: var(--color-white-light);
  position: fixed;
  flex-direction: column;
  top: 60px;
  right: 200px;
  border-radius: 10px;
  padding: 30px;
  z-index: 101;
}
.counter {
  width: 80px;
  height: 30px;
  background-color: var(--color-white-dark);
  border: none;
  justify-content: center;
  gap: 5px;
  font-size: 1.5rem;
  padding: 0 20px;
}
.counter button {
  border: none;
  background-color: none;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0.8;
}
.counter button:hover {
  color: var(--color-brown-dark);
}
.number {
  width: 40px;
  border: none;
  background-color: transparent;
  outline: none;
  text-align: center;
  padding-left: 10px;
}
.item{
  justify-content: space-between;
  margin-bottom: 15px;
}
.item .left{
  gap: 10px;
}
.item img{
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.cart-items{
  margin-top: 30px;
}
.cart .header,
.cart .total{
  justify-content: space-between;
}
.cart .total h3{
  opacity: 0.3;
}
.title-total{
  text-transform: uppercase;
}
.cart a  {
  width: 100%;
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
  margin-top: 20px;
}
.cart a:hover {
  background-color: var(--color-brown-light);
  transition: 0.3s ease-in-out;
}
.price{
  opacity: 0.8;
}
.remove{
  border: none;
  background: none;
  cursor: pointer;
}
.remove:hover{
  text-decoration: underline;
  color: var(--color-brown-dark);
}
@media screen and (max-width: 480px) {
  .hamburger{
    display: block;
    cursor: pointer;
  }
  ul{
    display: none;
  }
  nav{
    justify-content: space-between;
    padding: 0px 25px;
    align-items: center;
  }
    .cart{
    top: 90px;
    right: 25vw;
    width: 320px;
  }
}



</style>