<template>
    <div class="container flex">
        <div class="left-text">
            <h1>BRINGING YOU THE <span style="color: var(--color-brown-dark);">BEST</span> AUDIO GEAR</h1>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                available for you to browse and experience a wide range of our products. Stop by our store to meet some
                of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <img src="@/assets/shared/desktop/image-best-gear.jpg" alt="" style="border-radius: 3%;">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    width: 68vw;
    height: 400px;
    margin-left: 190px;
    margin-top: 250px;
    justify-content: space-evenly;
    gap: 50px;
    margin-bottom: 250px;
}
.container img{
    height: 500px;
}
.left-text h1{
    margin-bottom: 20px;
    width: 80%;
}
.left-text p{
    line-height: 22px;
    width: 95%;
}
@media screen and (max-width: 480px){
    img{
        width: 340px;
    }
    .container{
        flex-direction: column;
        width: 100vw;
        margin-top: 130px;
        height: auto;
        margin-left: 0;
        margin-bottom: 150px;
    }
    .container .left-text{
        order: 2;
        text-align: center;
    }
  .left-text p, .left-text h1{
        width: 80%;
        margin-left: 40px;
  }
    .container img{
        order: 1;
        height: 300px;
        border-radius: 10px;
    }
}
</style>