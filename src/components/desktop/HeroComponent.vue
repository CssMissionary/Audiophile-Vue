<template>
    <div class="hero">
        <div class="line"></div>
        <p class="new">New Product</p>
        <h1 class="title">XX99 MARK II HEADPHONES</h1>
        <p class="description">Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.</p>
        <BrownbuttonComponent productId="4" />
    </div>
</template>

<script>
import BrownbuttonComponent from './BrownbuttonComponent.vue'

export default {
    components: {
        BrownbuttonComponent
    },
    data(){
        return{
           
        }
    }
}
</script>

<style scoped>
.hero{
    height: 91vh;
    background-image: url('@/assets/home/desktop/image-hero.jpg');
    background-size: cover;
    background-position: center;
    padding: 12rem;
    color: var(--color-white-dark);
    text-transform: uppercase;
    margin-top: 59px;
}
.new{
    letter-spacing: 0.5em;
    opacity: 0.2;
    margin-bottom: 1.5em;
}
.title{
    color: var(--color-white-light);
    font-size: 4.5em;
    width: 35vw;
    margin-bottom: 0.3em;
    line-height: 1em;
}
.description{
    text-transform: lowercase;
    opacity: 0.8;
    text-transform: none;
    width: 35vw;
    line-height: 1.5em;
    margin-bottom: 3rem;
}
.line {
    width: 73vw;
    height: 1px;
    background-color: var(--color-white-dark);
    margin-top: -12em;
    opacity: 0.2;
    margin-bottom: 10em;
}

@media screen and (max-width: 480px) {
    .hero{
        background-image: url('@/assets/home/mobile/image-header.jpg');
        height: 58vh;
        padding: 70px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }
    .title{
        font-size: 3em;
        width: fit-content;
    }
    .description{
        width: fit-content;
        padding: 0px 20px;
    }
    .line{
        display: none;
    }
    
}
</style>