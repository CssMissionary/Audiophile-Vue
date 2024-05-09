<template>
    <router-link :to="{ name: title }">
    <button class="flex">
        <p>SHOP</p><img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-right">
    </button>
    </router-link>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style scoped>
    button{
        background: none;
        border: none;
        color: var(--color-black-light);
        cursor: pointer;
    }
    button:hover{
        background: none;
        color: var(--color-brown-dark);
        transition: 0.2s ease-in;
    }
    button p{
        margin-right: 10px;
        font-weight: bold;
        opacity: 0.8;
    }
</style>