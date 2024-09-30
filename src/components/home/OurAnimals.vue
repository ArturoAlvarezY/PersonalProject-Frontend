<template>

    <body>

        <h2>¿En que animales nos especializamos?</h2>

        <div class="slider-frame">
            <ul>
                <li><img src="../../../public/images/dog.jpg" alt="dog"></li>
                <li><img src="../../../public/images/cat.jpg" alt="dog"></li>
                <li><img src="../../../public/images/parrot.jpg" alt="dog"></li>
                <li><img src="../../../public/images/turtle.jpg" alt="dog"></li>
            </ul>
        </div>

    </body>

</template>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
}

h2 {
    text-align: center;
    font-size: 2rem;
    padding-top: 50px;
}

.slider-frame {
    width: 100%;
    max-width: 1280px;
    margin: 50px auto 0;
    overflow: hidden;
}

.slider-frame ul {
    display: flex;
    padding: 0;
    width: 400%;
    animation: slide 20s infinite alternate ease-in-out;
}

.slider-frame li {
    width: 100%;
    list-style: none;
}

.slider-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    h2 {
        font-size: 1.5rem;
    }

    .slider-frame {
        height: 300px;
    }
}

@keyframes slide {
    0% {
        margin-left: 0;
    }

    20% {
        margin-left: 0;
    }

    25% {
        margin-left: -100%;
    }

    45% {
        margin-left: -100%;
    }

    50% {
        margin-left: -200%;
    }

    70% {
        margin-left: -200%;
    }

    75% {
        margin-left: -300%;
    }

    100% {
        margin-left: -300%;
    }
}
</style>