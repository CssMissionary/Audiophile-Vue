<template>
    <div class="container">
        <div class="speaker">
            <img src="@/assets/home/desktop/image-speaker-zx9.png" alt="" width="300px" height="360px">
        </div>
        <div class="middle">
            <img src="@/assets/home/desktop/pattern-circles.svg" alt="" class="circle" width="800px" height="800px">
        </div>
        <div class="right">
            <h1>ZX9 SPEAKER</h1>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <!-- <button>SEE PRODUCT</button> -->
            <BrownbuttonComponent class="black" productId="6"/>
        </div>
    </div>
    <div class="container-two">
        <div class="left">
            <h1>ZX7 SPEAKER</h1>
            <BrownbuttonComponent class="transparent" productId="5"/>
        </div>
    </div>
    <div class="container-three">
        <div class="left"></div>
        <div class="right">
            <h1>YX1 EARPHONES</h1>
            <BrownbuttonComponent class="transparent" productId="1" />
        </div>
    </div>
</template>

<script>
import BrownbuttonComponent from './BrownbuttonComponent.vue'

export default {    
    components: {
        BrownbuttonComponent
    }
}
</script>

<style scoped>
.container{
    width: 68vw;
    height: 450px;
    background-color: var(--color-brown-dark);
    margin-top: 130px;
    margin-left: 190px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}
.speaker{
    position: absolute;
    left: 7vw;
    bottom: -15px;
    z-index: 99;
}
.container .middle{
    position: absolute;
    left: -100px;
}
.container .right{
    position: absolute;
    right: 80px;
    width: 300px;
    color: var(--color-white-light);
}
.container .right h1{
    width: 100px;
    font-size: 48px;
    margin-bottom: 0.4em;
}
.container .right p{
    line-height: 25px;
    width: 350px;
    opacity: 0.8;
    margin-bottom: 1em;
}
.black{
background-color: var(--color-black-dark);
color: var(--color-white-light);
}
.black:hover{
background-color: var(--color-black-light) ;
}
.transparent{
background-color: transparent;
    color: var(--color-black-dark);
    border: 1px solid var(--color-black-dark);
}
.transparent:hover{
background-color: var(--color-black-dark);
color: var(--color-white-light);
}
.container-two{
    width: 68vw;
    height: 360px;
    margin-left: 190px;
    background-image: url('@/assets/home/desktop/image-speaker-zx7.jpg');
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 50px;
    border-radius: 8%;
}
.container-two .left{
    padding: 100px 0 0 80px;
}
.container-two h1{
    margin-bottom: 30px;
}
.container-three{
    width: 68vw;
    height: 330px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 190px;
}
.container-three .left{
    width: 50%;
    height: 100%;
    background-image: url('@/assets/home/desktop/image-earphones-yx1.jpg');
    background-position: center;
    border-radius: 2%;
}
.container-three .right{
    width: 50%;
    height: 100%;
    background-color: var(--color-white-dark);
    border-radius: 10px;
}
.container-three .right h1{
    margin: 50px 0 0 50px;
}
.container-three .right .transparent{
    margin: 40px 0 0 50px;
    transition: .3s ease-in-out;
}
@media screen and (max-width: 480px){
    .speaker, .middle, .right{
        position: static;
    }
    .container{
        width: 80vw;
        height: 700px;
        margin: 0;
        margin-left: 40px;
        margin-top: 120px;
        flex-direction: column;
    }
    .container .right{
        position: static;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container .right h1{
        width: 200px;
        text-align: center;
    }
    .container .right p{
        width: 270px;
        text-align: center;
    }
    .speaker img{
        background-image: url('@/assets/home/mobile/image-speaker-zx9.png');
        width: 200px;
        height: 250px;
    }
    .container .middle{
        left: 0;
        top: 0;
    }
    .container .middle img{
        width: 340px;
        height: 340px;
    }
    .speaker{
        margin-top: 30px;
        margin-bottom: 50px;
    }
    .container-two{
        background-image: url('@/assets/home/mobile/image-speaker-zx7.jpg');
        background-position: right; 
        width: 80vw;
        margin-top: 50px;
        margin-left: 40px;
        border-radius: 10px;
    }
    .container-two .left{
        padding-left: 40px;
    }
    .container-three{
        flex-direction: column;
        margin-left: 40px;
        width: 80vw;
        height: auto;
    }
    .container-three .left{
        background-image: url('@/assets/home/mobile/image-earphones-yx1.jpg') center no-repeat;
        width: 100%;
        height: 250px;
        border-radius: 10px;
    }
    .container-three .right{
        width: 100%;
        height: 250px;
        border-radius: 10px;
    }
    .container-three .right h1{
        margin-left: 40px;
    }
}
</style>