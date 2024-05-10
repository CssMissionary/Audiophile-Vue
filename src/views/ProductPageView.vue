<template>
    <div class="product-page" v-for="(product, index) in filteredArray" :key="index">
        <a @click="$router.back()" class="backButton">Go Back</a>
<br><br>
        <div class="product flex">
            <img :src="product.image.desktop" alt="image" width="450px" height="450px" style="border-radius: 10px;">
            <div class="details">
                <div class="new" v-if="product.new">
                    <p>NEW PRODUCT</p>
                </div>
                <h1>{{ product.name }}</h1>
                <p>{{ product.description }}</p>
                <p class="price">${{ product.price }}</p>
                <div class="purchase flex">
                    <div class="counter flex">
                        <button class="minus" @click="lessQuantity">-</button>
                        <input type="number" class="number" v-model="productQuantity">
                        <button class="plus" @click="productQuantity++">+</button>
                    </div>
                    <button class="addCart" @click="addToCart({ ...product, productQuantity })">ADD TO CART</button>
                </div>
            </div>
        </div>
        <div class="features flex">
            <div class="feature">
                <h1>FEATURES</h1>
                <p>{{ product.features }}</p>
            </div>
            <div class="box flex">
                <h1>IN THE BOX</h1>
                <ul>
                    <li v-for="feature in product.includes" :key="feature.item">
                        <span>{{ feature.quantity }}x</span>{{ feature.item }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="slide-preview flex">
            <div class="left">
                <img :src="product.gallery.first.desktop" alt="" >
                <img :src="product.gallery.second.desktop" alt="">
            </div>
            <div class="right">
                <img :src="product.gallery.third.desktop" alt="">
            </div>
        </div>
        <div class="other_product flex">
            <h1>YOU MAY ALSO LIKE</h1>
            <div class="list flex">
                <li v-for="(product, index) in product.others" :key="index" class="flex">
                <img :src="product.image.desktop" alt="">
                <h3>{{ product.name }}</h3>
                <BrownbuttonComponent :productId="product.id || product.slug"/>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import StoredData from '@/assets/data.json'
import BrownbuttonComponent from '@/components/desktop/BrownbuttonComponent.vue'

export default {
    props: {
        id: String
    },
    data(){
        return{
            data: StoredData,
            filteredArray: [],
            productQuantity: 1
        }
    },
    components: {
        BrownbuttonComponent
    },
    methods: {
        ...mapMutations(['addToCart']),
        lessQuantity(){
            if (this.productQuantity > 1){
                this.productQuantity--
            }
        }
    },
    watch: {
        id:{
            handler(value){
                this.filteredArray = this.data.filter(i => {
                    return i.id === Number(this.id) || i.slug === this.id
                })

                window.scrollTo({ top: 0 })
            },
            immediate: true
        }
    }
}
</script>

<style scoped>
    .product-page{
        margin: 150px;
    }
    .product {
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
    .price{
        font-weight: bold;
        font-size: 1.2rem;
        letter-spacing: 0.05em;
    }
    .purchase{
        gap: 20px;
        margin-top: 50px;
    }
    .counter{
        width: 120px;
        height: 40px;
        background-color: var(--color-white-dark);
        border: none;
        justify-content: center;
        gap: 5px;
        font-size: 1.5rem;
        padding: 0 20px;
    }
    .counter button{
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0.8;
    }
    .counter button:hover{
        color: var(--color-brown-dark);
    }
    .number{
        width: 70%;
        border: none;
        background-color: transparent;
        outline: none;
        text-align: center;
        padding-left: 10px;
    }
    .addCart{
        width: 150px;
        height: 40px;
        color: var(--color-white-light);
        background-color: var(--color-brown-dark);
        border: none;
        cursor: pointer;
        font-weight: bold;
    }
    .addCart:hover{
        background-color: var(--color-brown-light);
        transition: 0.3s ease-in-out;
    }
    span{
        color: var(--color-brown-dark);
    }
    .feature{
        width: 100%;
        align-items: normal;
    }
    .box{
        flex-direction: column;
        margin-top: -13vh;
    }
    .feature h1, .box h1{
        margin-bottom: 20px;
    }
    .box ul li{
        margin-bottom: 15px;
    }
    .box ul li span{
        margin-right: 20px;
    }
    .feature p{
        width: 40vw;
        line-height: 1.8em;
    }
    .slide-preview, .other_product{
        margin-top: 100px;
        margin-bottom: 250px;
        width: 70vw;
        height: 500px;
        border-radius: 1px solid black;
    }
    .slide-preview .left{
        width: 50%;
        height: 100%;
    }
    .slide-preview .left img{
        width: 100%;
        height: 48%;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    .slide-preview .right{
        width: 50%;
        height: 100%;
        margin-left: 50px;
    }
    .slide-preview .right img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-size: cover;
    }
    .other_product{
        gap: 80px;
        flex-direction: column;
        margin-bottom: 350px;
    }
    .list {
        gap: 80px;
    }
    .other_product h1{
        text-align: center;
    }
    .other_product img{
        width: 290px;
        height: 290px;
        border-radius: 10px;
    }
    .other_product li{
        flex-direction: column;
        align-items: center;
        gap: 20px;
        text-transform: uppercase;
    }
    .backButton{
        cursor: pointer;
    }
    @media screen and (max-width: 480px){
        .product-page{
            margin: 120px 40px;
        }
        .product{
            flex-direction: column;
        }
        .product img{
            width: 350px;
            height: 350px;
        }
        .details{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: left;
        margin-top: 30px;
        }
        .details h1{
            margin-left: -40px;
        }
        .price{
            margin-left: -280px;
        }
        .purchase{
            margin-top: 20px;
            margin-left: -50px;
        }
        .feature{
            text-align: left;
        }
        .features{
            flex-direction: column;
            align-items: left;
        }
        .feature p{
            width: 100vw;
            padding: 0;
            padding-right: 70px;
            text-align: left;
        }
        .new p{
            text-align: left;
            margin-left: -90px;
        }
        .box{
            margin: 0;
            margin-top: 70px;
            align-items: left;
            justify-content: left;
            margin-left: -280px;
            width: 100vw;
        }
        .box h1{
            margin-left: -20px;
            margin-bottom: 30px;
        }
        .box ul li {
            width: 200px;
            margin-bottom: 30px;
            text-align: left;
        }
        .slide-preview{
            flex-direction: column;
            width: 100vw;
            margin-left: -110px;
        }
        .slide-preview .left img{
            width: 340px;
            height: 300px;
            margin-bottom: 40px;
        }
        .slide-preview .right{
            margin: 0;
        }
        .slide-preview .right img{
            width: 340px;
            height: 400px;
            margin-top: 200px;
        }
        .other_product{
            margin: 700px 0;
            margin-bottom: 1150px;
        }
        .other_product h1{
            font-size: 1.5rem;
            margin-left: 30px;
        }
        .list{
            flex-direction: column;
        }
       .list li img{
        width: 300px;
        height: 300px;
        margin-left: 40px;
       }
       .number{
        padding-left: 0;
       }
    }

</style>