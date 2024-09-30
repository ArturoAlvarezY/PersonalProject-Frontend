<template>
    <div class="cardm">
        <div class="card">
            <svg class="weather" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px"
                viewBox="0 0 100 100" xml:space="preserve">
                <image id="image0" width="100" height="100" x="0" y="0"
                    href="https://img.freepik.com/foto-gratis/perro-pug-aislado-fondo-blanco_2829-11416.jpg?t=st=1727688299~exp=1727691899~hmac=dc5e7cdb14c672a351edc339513dcfe2d69205e4c87c0eb67bf55998acfff7c3&w=740">
                </image>
            </svg>
            <div class="main">Jhon D</div>
            <div class="mainsub">Gijon, Spain</div>

        </div>

        <div class="card2">
            <div class="upper">
                <div class="humidity">
                    <div class="humiditytext">Age<br>03/03/2024</div>
                    <svg xml:space="preserve" viewBox="0 0 30 30" height="30px" width="30px" y="0px" x="0px"
                        xmlns:xlink="https://www.svgrepo.com/show/386977/birthday-cake.svg"
                        xmlns="https://www.svgrepo.com/show/386977/birthday-cake.svg" id="Layer_1" version="1.1"
                        class="humiditysvg">
                        <image href="https://www.svgrepo.com/show/386977/birthday-cake.svg" y="0" x="0" height="30"
                            width="30" id="image0"></image>
                    </svg>
                </div>

                <div class="air">
                    <div class="airtext">Clientes<br>+100</div>
                    <svg class="airsvg" version="1.1" id="Layer_1"
                        xmlns="https://www.svgrepo.com/show/401417/dog-face.svg"
                        xmlns:xlink="https://www.svgrepo.com/show/401417/dog-face.svg" x="0px" y="0px" width="30px"
                        height="30px" viewBox="0 0 30 30" xml:space="preserve">
                        <image id="image0" width="30" height="30" x="0" y="0"
                            href="https://www.svgrepo.com/show/401417/dog-face.svg"></image>
                    </svg>
                </div>
            </div>

            <div class="lower">
                <div class="aqi">
                    <svg class="aqisvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px"
                        viewBox="0 0 20 20" xml:space="preserve">
                        <image id="image0" width="20" height="20" x="0" y="0"
                            href="https://www.svgrepo.com/show/507297/euro-circle.svg"></image>
                    </svg>
                    <div class="aqitext">hora<br>15$</div>
                </div>

                <div class="realfeel">
                    <svg class="rfsvg" version="1.1" id="Layer_1"
                        xmlns="https://www.svgrepo.com/show/507297/euro-circle.svg"
                        xmlns:xlink="https://www.svgrepo.com/show/507297/euro-circle.svg" x="0px" y="0px" width="20px"
                        height="20px" viewBox="0 0 20 20" xml:space="preserve">
                        <image id="image0" width="20" height="20" x="0" y="0"
                            href="https://www.svgrepo.com/show/112185/dog-bone.svg"></image>
                    </svg>
                    <div class="realfeeltext">Correas<br>Las pone él</div>
                </div>

                <div class="pressure">
                    <svg class="pressuresvg" version="1.1" id="Layer_1"
                        xmlns="https://www.svgrepo.com/show/441623/dog-walking.svg"
                        xmlns:xlink="https://www.svgrepo.com/show/441623/dog-walking.svg" x="0px" y="0px" width="20px"
                        height="20px" viewBox="0 0 20 20" xml:space="preserve">
                        <image id="image0" width="20" height="20" x="0" y="0"
                            href="https://www.svgrepo.com/show/441623/dog-walking.svg"></image>
                    </svg>
                    <div class="pressuretext">Pasea por<br>Asturias</div>
                </div>
                <div class="card3">
                    Paseador de Perros
                </div>
            </div>
        </div>
    </div>

</template>

<style>

.card {
  position: absolute;
  width: 250px;
  height: 130px;
  border-radius: 25px;
  background: whitesmoke;
  color: black;
  z-index: 2;
  transition: .4s ease-in-out;
}

.weather {
  position: relative;
  margin: 1em;
}

.main {
  font-size: 2em;
  position: relative;
  top: -3em;
  left: 4.3em;
}

.mainsub {
  position: relative;
  top: -10.2em;
  left: 14em;
  font-size: 0.6em;
}

.card2 {
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 240px;
  height: 130px;
  border-radius: 35px;
  background: white;
  z-index: -1;
  transition: .4s ease-in-out;
}

.card:hover {
  background-color: #FFE87C;
  cursor: pointer;
}

.card:hover + .card2 {
  height: 300px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.card:hover + .card2 .lower {
  top: 20.2em;
}

.upper {
  display: flex;
  flex-direction: row;
  position: relative;
  color: black;
  left: 1.8em;
  top: 0.5em;
  gap: 4em;
}

.humiditytext {
  position: relative;
  left: 3.6em;
  top: 2.7em;
  font-size: 0.6em;
}

.airtext {
  position: relative;
  left: 3.8em;
  top: 2.7em;
  font-size: 0.6em;
}

.lower {
  display: flex;
  flex-direction: row;
  position: absolute;
  text-align: center;
  color: black;
  left: 3em;
  top: 1em;
  margin-top: 0.7em;
  font-size: 0.7em;
  transition: .4s ease-in-out;
}

.aqi {
  margin-right: 3.25em;
}

.realfeel {
  margin-right: 1.8em;
}

.card3 {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 30px;
  top: 4.7em;
  left: -2.4em;
  font-size: 1.24em;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  background: limegreen;
  transition: .4s ease-in-out;
}
</style>