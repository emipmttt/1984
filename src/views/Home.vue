<template>
  <div class="page">
    <div class="container">
      <div class="flex main-container">
        <div class="flex-1 p-10 flex items-center justify-center">
          <img
            class="elenco-background-1"
            :src="require('@/assets/img/creatives/1.jpg')"
          />
          <img
            class="elenco-background-2"
            :src="require('@/assets/img/creatives/2.jpg')"
          />
          <img
            class="elenco-background-3"
            :src="require(`@/assets/img/creatives/${currentPictureIndex}.jpg`)"
          />
        </div>
        <div class="flex-1 flex items-center justify-center p-5">
          <div>
            <Header />

            <h1
              class="
                text-7xl
                red-text
                SquadaOne
                inner-shadow-red
                mt-4
                text-justify
              "
            >
              19+84=2021
            </h1>
            <h3
              class="text-xl red-text SquadaOne inner-shadow-red text-justify"
            >
              Basada en Nineteen eighty-four de George Orwell Adaptación de
              Daniela Mosqueda y Andrea Sánchez
            </h3>
            <p
              class="
                text-2xl
                white-text
                SquadaOne
                inner-shadow-white
                mt-4
                text-justify
              "
            >
              En 2021, el mundo está controlado por el Gran Hermano (GH), quien
              vigila absolutamente todo. Los ciudadanos viven bajo este régimen
              totalitario. Un hombre, llamado Winston Smith, se revelará contra
              este mandato. Sin embargo, el espectador se sumergirá en una serie
              de decisiones que podrían cambiar el destino de Winston
            </p>
            <div class="text-center pt-10">
              <button @click="showModal = true">COMENZAR</button>
            </div>
          </div>
        </div>
      </div>
      <div class="backdrop" v-if="showModal">
        <div class="card">
          <span class="text-3xl">ACCESO RESTINGIDO</span>
          <br />
          <br />
          <input v-model="password" type="text" placeholder="CONTRASEÑA" />
          <br />
          <br />
          <button @click="verifyPass">ENTRAR</button>
          <br />
          <br />
          <div v-if="message">
            {{ message }}
            <br />
            <br />
          </div>
          <span class="text-3xl">SÓLO MIEMBROS DEL PARTIDO</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      currentPictureIndex: 1,
      showModal: false,
      password: "",
      message: "",
    };
  },
  methods: {
    verifyPass() {
      if (this.password == "winstonsmith1984") {
        this.$router.push("/video");
      } else {
        this.message = "¡NO ERES MIEMBRO DEL PARTIDO!";
      }
    },
    changeCurrentPicture() {
      if (this.currentPictureIndex == 18) {
        this.currentPictureIndex = 1;
      } else {
        this.currentPictureIndex = this.currentPictureIndex + 1;
      }
      setTimeout(() => {
        this.changeCurrentPicture();
      }, 2000);
    },
  },
  mounted() {
    setTimeout(() => {
      this.changeCurrentPicture();
    }, 2000);
  },
};
</script>
<style scoped>
.main-container {
  width: 100%;
  min-height: 100vh;
}

.elenco-background-1 {
  width: 300px;
  transform: rotate(5deg);
  position: absolute;
}
.elenco-background-2 {
  width: 300px;
  transform: rotate(15deg);
  position: absolute;
}
.elenco-background-3 {
  width: 300px;
  transform: rotate(-5deg);
  position: absolute;
}

.backdrop {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  padding: 2%;
  background: #441b1b;
  color: #c1c1c1;
  text-align: center;
  border-radius: 10px;
}

.card input {
  padding: 10px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
}
</style>