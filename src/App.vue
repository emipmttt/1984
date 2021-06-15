<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

// fonts

@font-face {
  font-family: "Pacifica";
  src: url("./assets/fonts/pacificacondensed.ttf");
}

@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lora&family=Squada+One&display=swap");

.SquadaOne {
  font-family: "Squada One", cursive;
}
.Lora {
  font-family: "Lora", serif;
}
.AbrilFatface {
  font-family: "Abril Fatface", cursive;
}
.Pacifica {
  font-family: "Pacifica";
}

// global

.page {
  background: linear-gradient(to right, #222, #111);
  min-height: 100vh;
}

.red {
  background: #a33c3c;
}

.red-text {
  color: #a33c3c;
}

.white {
  background: #cecece;
}

.white-text {
  color: #cecece;
}

button {
  padding: 10px 50px;
  background: #a33c3c;
  font-weight: bold;
  color: white;
  box-shadow: inset 0 1px 5px rgba(0, 0, 0, 2);
  border-radius: 50px;
}
</style>
