<template>
    <div class="hero flex">
        <div class="line"></div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style scoped>
.hero {
    width: 100%;
    height: 30vh;
    flex-direction: column;
    background-color: var(--color-black-dark);
    text-align: center;
    color: var(--color-white-light);
    margin-top: 59px;
}
.hero .line {
    height: 1px;
    background-color: var(--color-white-dark);
    width: 73vw;
    opacity: 0.2;
}
.hero h1 {
    margin-top: 60px;
    text-transform: uppercase;
}
@media screen and (max-width: 480px) {
    .hero{
        height: 100px;
        padding: 0 50px;
        margin-top: 84px;
    }
    .hero h1{
        margin-top: 30px;
    }
}
</style>