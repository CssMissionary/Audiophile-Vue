<template>
    <div class="box" id="box">
        <div class="container flex" v-for="(product, index) in products" :key="index">
            <div class="product">
                <img :src="product.img" alt="">
                <p>{{ product.title }}</p>
                <ShopbuttonComponent :title="product.title"/>
            </div>
       </div>
    </div>
  
</template>

<script>
import ShopbuttonComponent from './ShopbuttonComponent.vue';
export default {
    components: {
        ShopbuttonComponent
    },
    data(){
        return{
            products: [
                {
                    img: '@/assets/shared/desktop/image-category-thumbnail-headphones.png',
                    title: 'headphones',
                },
                {
                    img: '@/assets/shared/desktop/image-category-thumbnail-speakers.png',
                    title: 'speakers'
                },
                {
                    img: '@/assets/shared/desktop/image-category-thumbnail-earphones.png',
                    title: 'earphones'
                }
                
            ]
        }
    }
  
}
</script>

<style scoped>
.container{
    width: 400px;
    height: 400px;
    padding-top: 50px;
    padding-left: 50px;
    margin-bottom: 50px;
    font-weight: bold;

}
.product{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 280px;
    height: 200px;
    background-color: var(--color-white-dark);
    border-radius: 5px;
    text-align: center;
}
img{
    width: 200px;
    height: 80%;
    margin-top: -80px;
}
p{
    margin-bottom: 0.8em;
    text-transform: uppercase;
}
@media screen and (max-width: 480px){
   .box{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -20px;
    margin-left: 20px;
    padding: 0;
   }
   .container{
    margin-bottom: -80px;
   }
   .product{
    width: 450px;
   }
   
}
</style>