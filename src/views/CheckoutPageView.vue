<template>
    <form class="checkout-page" @submit.prevent="submitForm">
        <div class="left-checkout-form">
            <div class="fill_in" >
                <h1>CHECKOUT</h1>
                <div class="billing">
                    <h4>BILLING DETAILS</h4>
                    <div class="field flex">
                        <div class="input flex">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" required>
                        </div>
                        <div class="input flex">
                            <label for="email">Email Address</label>
                            <input type="email" name="" id="email" placeholder="JohnDoe@example.com" required>
                        </div>
                        <div class="input flex">
                            <label for="phone">Phone Number</label>
                            <input type="tel" name="" id="phone" placeholder="+1 (202) 555-0136" required>
                        </div>
                    </div>
                </div>
                <div class="shipping">
                    <h4>SHIPPING INFO</h4>
                    <div class="field flex">
                        <div class="input flex">
                            <label for="address">Address</label>
                            <input type="text" id="address" placeholder="1131 Williams Avenue" required>
                        </div>
                        <div class="input flex">
                            <label for="zip">ZIP Code</label>
                            <input type="text" name="" id="zip" placeholder="10001" required>
                        </div>
                        <div class="input flex">
                            <label for="city">City</label>
                            <input type="text" name="" id="city" placeholder="New York" required>
                        </div>
                        <div class="input flex">
                            <label for="country">Country</label>
                            <input type="text" name="" id="city" placeholder="United States" required>
                        </div>
                    </div>
                </div>
                <div class="payment">
                    <h4>PAYMENT DETAILS</h4>
                    <h5>Payment Method</h5>
                    <div class="field flex">
                        <input type="checkbox" name="" id="checkbox1">
                        <label class="select flex" for="checkbox1" @click="emoneyTick">
                            <p>E-money</p>
                        </label>
                        <input type="checkbox" name="" id="checkbox2" checked>
                        <label class="select flex" for="checkbox2" @click="cashdeliveryTick">
                            <p>Cash on Delivery</p>
                        </label>
                    </div>
                    <div v-if="this.eMoney" class="emoney_checked">
                        <div class="input flex">
                            <label for="emoney-number">eMoney Number</label>
                            <input type="text" name="" id="emoney-number" placeholder="238521993" required>
                        </div>
                        <div class="input flex">
                            <label for="emoney-pin">eMoney PIN</label>
                            <input type="text" name="" id="emoney-pin" placeholder="6891" required>
                        </div>
                    </div>
                    <div v-if="this.cashDelivery" class="cashdelivery flex">
                        <img src="@/assets/checkout/icon-cash-on-delivery.svg" alt="">
                        <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-cart-item-list">
            <h3>SUMMARY</h3>
            <div class="item flex" v-for="item in cart" :key="item.id" >
                <div class="left flex">
                    <img :src="item.image.desktop" alt="">
                    <div class="title-total">
                        <h5>{{ item.name }}</h5>
                        <p class="price">${{ item.price }}</p>
                    </div>
                </div>
                <div class="right">
                    <p style="text-transform: lowercase;">x{{ item.productQuantity }}</p>
                </div>
            </div>
            <div class="total">
                <div class="flex bill">
                    <h4 class="head">TOTAL</h4>
                    <h4>${{cartTotal}}</h4>
                </div>
                <div class="flex bill">
                    <h4 class="head">SHIPPING</h4>
                    <h4>$50</h4>
                </div>
                <div class="flex bill">
                    <h4 class="head">VAT (INCLUDED)</h4>
                    <h4>${{vatCalculator}}</h4>
                </div>
                <div class="flex bill" style="margin-top: 30px">
                    <h4 class="head">GRAND TOTAL</h4>
                    <h4 style="color: var(--color-brown-dark);">${{grandTotal}}</h4>
                </div>
                <!-- <RouterLink :to="{ name: 'checkout' }" class="checkout" @click="checkoutDisplay" type="submit">CONTINUE & PAY
                </RouterLink> -->
                <button type="submit" class="checkout">CONTINUE & PAY</button>
            </div>
        </div>
    </form>
        <div class="modal flex" v-if="checkoutShow">
            <div class="summary">
                <img src="@/assets/checkout/icon-order-confirmation.svg" alt="">
                <div class="header">
                    <h2>THANK YOU </h2>
                    <h2>FOR YOUR ORDER</h2>
                </div>
                <p>You will receive an email confirmation shortly.</p>
                <div class="bracket flex">
                    <div class="left flex">
                        <div class="top flex">
                            <div class="left-side flex">
                                <img :src="cart[0].image.desktop" alt="">
                                <div class="flex" style="align-items: normal; justify-content: left;">
                                    <h6>{{ cart[0].name }}</h6>
                                    <p>${{ cart[0].price }}</p>
                                </div>
                            </div>
                            <div class="right-side">
                                <p>x{{ cart[0].productQuantity }}</p>
                            </div>
                        </div>
                        <div class="bottom">
                            <p>and {{ cart.length - 1 }} other item(s)</p>
                        </div>
                    </div>
                    <div class="right flex">
                        <h3 style="opacity: 0.4; margin-bottom: 10px; font-weight: lighter;">GRAND TOTAL</h3>
                        <h3>${{ grandTotal }}</h3>
                    </div>
                </div>
                <RouterLink :to="{ name: 'home' }" class="checkout">BACK TO HOME</RouterLink>
            </div>
        </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    data(){
        return{
            checkoutShow: false,
            eMoney: false,
            cashDelivery: true
        }
    },
    methods: {
        emoneyTick(){
            document.getElementById('checkbox2')
                this.eMoney = !this.eMoney
                 checkbox2.checked = false
                 this.cashDelivery = false
        },
        cashdeliveryTick(){
            document.getElementById('checkbox1')
            this.cashDelivery = !this.cashDelivery
            checkbox1.checked = false
            this.eMoney = false
        },
        submitForm(){
            this.$router.push({name: 'checkout'})
            this.checkoutShow = true
        }
    },
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['cartTotal', 'grandTotal', 'vatCalculator']),
    }

}
</script>

<style scoped>
.fill_in{
    padding: 40px;
}
    .checkout-page{
        width: 100%;
        height: 200vh;
        background-color: rgba(27, 26, 26, 0.501);
        padding-left: 160px;
        padding-top: 100px;
        gap: 50px;
        display: flex;
    }
    .left-checkout-form{
        width: 700px;
        height: 1080px;
        background-color: var(--color-white-light);
        border-radius: 10px;
    }
    form{
        padding: 40px;
    }
    .input{
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    label{
        font-weight: bold;
    }
    .field{
        gap: 20px;
        flex-wrap: wrap;
    }
    input{
        width: 300px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.355);
        padding-left: 10px;
    }
    input:hover{
        border: 1px solid var(--color-brown-dark);
    }
    input:focus{
        outline: 2px solid var(--color-brown-dark);
        border: none;
    }
    #address{
        width: 620px;
    }
    .billing, .shipping, .payment{
        margin-top: 50px;
    }
    .billing h4, .shipping h4, .payment h4{
        color: var(--color-brown-dark);
        margin-bottom: 20px;
    }
    .payment .field{
        margin-left: 350px;
        flex-direction: column;
    }
    .right-cart-item-list{
        width: 300px;
        height: fit-content;
        border-radius: 10px;
        background-color: var(--color-white-light);
        padding: 40px;
    }
    .item {
            justify-content: space-between;
            margin-bottom: 15px;
            gap: 40px;
            margin-top: 30px;
            text-transform: uppercase;
    }
    .item .left {
        gap: 15px;
    }
    .item img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
    .total{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .bill{
        justify-content: space-between;
    }
    .head{
        opacity: 0.3;
    }
    .total a {
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
    .total a:hover {
        background-color: var(--color-brown-light);
        transition: 0.3s ease-in-out;
    }
    .modal {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 59px;
        left: 0;
        background-color: rgba(27, 26, 26, 0.501);
        z-index: 100;
        justify-content: center;
    }
    .summary{
        width: 600px;
        height: 530px;
        margin-top: -50px;
        border-radius: 10px;
        background-color: var(--color-white-light);
        padding: 40px;
    }
    .summary .header{
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .summary p {
        opacity: 0.5;
    }
    .bracket{
        margin-top: 30px;
    }
    .bracket .left, .bracket .right{
        width: 300px;
        height: 150px;
        border-radius: 10px;
        background-color: rgba(128, 128, 128, 0.116);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .bracket .right{
        border-radius: 10px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        background-color: var(--color-black-dark);
        flex-direction: column;
        align-items: normal;
        justify-content: center;
        padding-left: 30px;
        color: var(--color-white-light);
    }
    .checkout  {
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
    margin-top: 40px;
    }
    .checkout:hover {
    background-color: var(--color-brown-light);
    transition: 0.3s ease-in-out;
    }
    .left-side img{
        width: 90px;
        height: 90px;
        border-radius: 10px;
    }
    .bracket .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .bracket .left{
        flex-direction: column;
        padding: 10px;
    }
    .left-side .flex{
        flex-direction: column;
        max-width: 80px;
        text-transform: uppercase;
    }
    .bracket .left .bottom{
        border-top: 1px solid rgba(0, 0, 0, 0.439);
        width: 80%;
        text-align: center;
        padding: 10px;
    }
    .right-side{
        margin-left: 40px;
    }
   label[for="checkbox1"],
   label[for="checkbox2"] {
       width: 250px;
       height: 40px;
       border: 1px solid rgba(0, 0, 0, 0.419);
       position: relative;
       padding-left: 20px;
       border-radius: 5px;
       cursor: pointer;
   }
   label p {
       margin-left: 30px;
   }
   label[for="checkbox1"]:hover,
   label[for="checkbox2"]:hover {
       border: 2px solid var(--color-brown-dark);
   }
   label[for="checkbox1"]::before,
   label[for="checkbox2"]::before {
       position: absolute;
       content: "";
       height: 20px;
       width: 20px;
       border-radius: 50%;
       border: 1px solid rgba(0, 0, 0, 0.429);
   }
   input[type="checkbox"] {
       display: none;
   }
   input[type="checkbox"]:checked+label[for="checkbox1"],
   input[type="checkbox"]:checked+label[for="checkbox2"]
 {
       border: 2px solid var(--color-brown-dark);
   }
    label[for="checkbox1"]:hover,
    label[for="checkbox2"]:hover{
    border: 1px solid var(--color-brown-dark);
    }
   input[type="checkbox"]:checked+label[for="checkbox1"]::after,
   input[type="checkbox"]:checked+label[for="checkbox2"]::after {
       width: 10px;
       height: 10px;
       margin-left: 5px;
       content: "";
       position: absolute;
       border-radius: 50%;
       background-color: var(--color-brown-dark);
   }
   .emoney_checked{
    margin-top: 30px;
    display: flex;
    gap: 20px;
   }
   .cashdelivery{
    gap: 20px;
    margin-top: 30px;
    line-height: 22px;
    color: grey;
   }
@media screen and (max-width: 480px){
    .checkout-page{
        flex-direction: column;
        padding-left: 0;
        height: 250vh;
    }
    .left-checkout-form{
        width: 80vw;
        margin: 0 40px;
        padding: 20px 0;
        height: auto;
    }
    .right-cart-item-list{
        margin: 50px;
        margin-left: 40px;
        width: 80vw;
    }
    form{
        padding: 30px;
    }
    .field{
        flex-direction: column;
        margin-left: -20px;
    }
    .payment .field{
        margin-top: 30px;
        margin-left: -35px;
    }
    input, #address, .emoney_checked input{
        width: 270px;
    }
    .emoney_checked{
        display: flex;
        flex-direction: column;
    }
    .summary{
        width: 80vw;
        padding: 10px 30px;
        margin-top: -40px;
        margin-left: 40px;
        height: auto;
    }
    .bracket{
        flex-direction: column;
    }
    .bracket .left, .bracket .right{
        height: 100px;
    }
    .bracket .left{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 10px;
        height: 110px;
    }
    .left-side img{
        height: 70px;
        width: 70px;
    }
    .bracket .right{
        border-top-right-radius: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 80px;
    }
    .modal{
        height: 200vh;
        display: block;
    }
    .summary img{
        height: 60px;
        width: 60px;
    }
}
</style>