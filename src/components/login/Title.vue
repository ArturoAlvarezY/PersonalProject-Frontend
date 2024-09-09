<template>
        <h2 class="neon-text" id="title">PetCares</h2>

</template>

<style>
#title {
    display: flex;
}


.neon-text {
    font-family: "Poppins", sans-serif;
    width: 100%;
    display: flex;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    font-size: 180px;
    transition: 3s linear;
    color: transparent;
    -webkit-text-stroke: 2px #b24cd8;
    background-image: linear-gradient(to left, #064bf3, #475fff, #6565ff, #240046);
    -webkit-background-clip: text;
    animation: move 30s linear infinite;
}

.neon-text:hover {
    color: #4cb2d8; /* Un azul claro y vibrante */
    text-shadow: 0 0 10px rgba(76, 178, 216, 0.5),  /* Azul claro suave */
                 0 0 20px rgba(51, 214, 255, 0.7),  /* Azul más fuerte */
                 0 0 30px rgba(0, 128, 255, 0.9),   /* Azul intermedio */
                 0 0 40px rgba(0, 128, 255, 1),     /* Azul más intenso */
                 0 0 50px rgba(76, 178, 216, 1);    /* El mismo azul claro para más brillo */
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
