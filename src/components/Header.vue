<template>
  <header>
    <router-link class="SquadaOne" to="/">INICIO</router-link>
    <router-link class="SquadaOne" to="/ingsoc">INGSOC</router-link>
    <router-link class="SquadaOne" to="/camaradas-del-partido">CAMARADAS DEL PARTIDO</router-link>
    <router-link class="SquadaOne" to="/personas-en-investigacion">PERSONAS EN INVESTIGACIÓN</router-link>
    <router-link class="SquadaOne" to="/enemigos-del-partido">ENEMIGOS DEL PARTIDO</router-link>
    <router-link class="SquadaOne" to="/data">DATA: EVIDENCIAS</router-link>
    <!-- <router-link class="SquadaOne" to="">ARCHIVOS DEL PARTIDO</router-link>
    <router-link class="SquadaOne" to="">CÁMARA ESCONDIDA</router-link> -->
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  color: white;
  font-size: 15px;
}
header a {
  margin-right: 10px;
  display: inline-block;
  transition: 1s;
}

header a:hover {
  margin-right: 10px;
  display: inline-block;
  color: #a33c3c;
  transition: 0.3s;
}
</style>