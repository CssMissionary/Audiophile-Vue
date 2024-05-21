<template>
    <div class="container">
        <div class="line"></div>
        <nav class="flex">
            <RouterLink to="/"><img src="@/assets/shared/desktop/logo.svg" alt="logo" class="logo"></RouterLink>
            <ul>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/headphones">Headphones</RouterLink>
                <RouterLink to="/speakers">Speakers</RouterLink>
                <RouterLink to="/earphones">Earphones</RouterLink>
            </ul>
        </nav>

        <div class="text flex">
            <div class="description">

                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and
                    sound specialists who are devoted to helping you get the most out of personal audio. Come and visit
                    our
                    demo facility - we’re open 7 days a week.</p>
                <p class="copyright">Copyright 2021. All Rights Reserved</p>
            </div>

            <div class="socials flex">
                <RouterLink to=""><img src="@/assets/shared/desktop/icon-facebook.svg" alt=""></RouterLink>
                <RouterLink to=""><img src="@/assets/shared/desktop/icon-instagram.svg" alt=""></RouterLink>
                <RouterLink to=""><img src="@/assets/shared/desktop/icon-twitter.svg" alt=""></RouterLink>
            </div>
        </div>

    </div>
</template>

<style scoped>
.container{
    width: 100%;
    height: 55vh;
    background-color: var(--color-black-dark);
    color: var(--color-white-light);
}
nav{
    justify-content: space-between;
    margin: 0 150px;
    padding-top: 40px;
}
ul a {
    margin-left: 2rem;
    color: var(--color-white-light);
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 100;
}
ul a:hover,
ul a.router-link-active {
    color: var(--color-brown-dark);
    transition: .3s ease-in-out;
}
.text{
    margin: 0 150px;
    justify-content: space-between;
}
.text p, p{
    opacity: 0.8;
    line-height: 25px;
    width: 57%;
    font-size: 15px;
}
p{
    margin-bottom: 40px;
    margin-top: 40px;
}
.socials a{
    margin-right: 20px;
}
.socials{
    margin-top: 40px;
}
.copyright{
    margin-top: 60px;
}
.line{
    width: 100px;
    height: 3px;
    background-color: var(--color-brown-dark);
    margin-left: 150px;
}
@media screen and (max-width: 480px) {
    .container{
        height: 800px;
    }
    nav{
        flex-direction: column;
    }
    ul{
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        text-align: center;
    }
    ul a{
        margin: 20px 0;
    }
    .text{
        margin: 0;
        text-align: center;
        flex-direction: column;
    }
    .text p, p{
        width: 100%;
        padding: 0 40px;
    }
    .copyright{
        margin: 0;
    }
    .line{
        margin-left: 170px;
    }
}
</style>