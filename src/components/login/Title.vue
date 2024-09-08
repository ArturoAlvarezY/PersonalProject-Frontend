<template>
    <section class="container">
        <h2 class="neon-text" id="title">PetCares</h2>
    </section>

</template>

<style>
#title {
    display: flex;
}

.container {
    font-family: "Poppins", sans-serif;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.neon-text {
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    font-size: 180px;
    transition: 3s linear;
    color: transparent;
    -webkit-text-stroke: 2px #b24cd8;
    background-image: linear-gradient(to left,
            #ff00ff,
            #d633ff,
            #b24cd8,
            #240046);
    -webkit-background-clip: text;
    animation: move 30s linear infinite;
}

.neon-text:hover {
    color: #b24cd8;
    text-shadow: 0 0 10px rgba(178, 76, 216, 0.5),
        0 0 20px rgba(214, 51, 255, 0.7),
        0 0 30px rgba(255, 0, 255, 0.9),
        0 0 40px rgba(255, 0, 255, 1),
        0 0 50px rgba(178, 76, 216, 1);
}

@keyframes move {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 2000px 0;
    }

}
</style>
