<template>
  <div class="page">
    <div class="container">
      <div class="flex main-container">
        <div class="flex-1 p-10">
          <div class="text-center">
            <img
              :src="require('@/assets/img/logo.jpg')"
              style="width: 400px; display: inline-block"
            />
            <br />
            <br />
            <img
              class="background-papers"
              :src="require(`@/assets/img/promo/${currentPictureIndex}.jpg`)"
            />
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center p-5">
          <div>
            <Header />

            <div class="papers Lora">
              <header class="papers__header flex">
                <div class="flex-1 justify-center items-center flex">
                  <span>Oceanía</span>
                </div>
                <div class="flex-1 text-center">
                  <h2 class="AbrilFatface text-8xl">GH</h2>
                  <h1>Gran Hermano</h1>
                </div>
                <div class="flex-1 justify-center items-center flex">
                  <span>{{ date }}</span>
                </div>
              </header>
              <main>
                <div class="box my-10">
                  <div class="left">
                    <div class="content text-justify">
                      <h1 class="text-xl">Misión</h1>
                      <br />
                      El INGSOC es una organización en pro al Gran Hermano,
                      velamos por los intereses del partido y estamos en contra
                      de cualquier oposición. Existimos con el propósito de
                      exterminar cualquier forma de pensamiento libre, el
                      conocimiento y las que estimulan este son destruidas, o en
                      todo caso manipuladas.
                    </div>
                  </div>
                  <div class="right">
                    <div class="content text-justify">
                      Nadie tiene el derecho de quejarse de su estilo de vida,
                      si es así nuestro deber es convencerlos de que viven mejor
                      que nunca y si esto no es suficiente para evitar que se
                      conviertan en crimentales, simplemente debemos borrar su
                      existencia.
                    </div>
                  </div>
                </div>
                <div class="box my-10">
                  <div class="left">
                    <div class="content text-justify">
                      <h1 class="text-xl">Lemas</h1>
                      <br />
                      “UNA MENTIRA DICHA CIEN VECES SE CONVIERTE EN REALIDAD”
                      Quienes se han encargado de detener a cualquiera que
                      planee algo en contra del Gran Hermano o de buscar
                      información sobre Emanuel Goldstein y la Hermandad
                    </div>
                  </div>
                  <div class="right">
                    <div class="content text-justify">
                      Nadie tiene el derecho de quejarse de su estilo de vida,
                      si es así nuestro deber es convencerlos de que viven mejor
                      que nunca y si esto no es suficiente para evitar que se
                      conviertan en crimentales, simplemente debemos borrar su
                      existencia.
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
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
    };
  },
  computed: {
    date() {
      return new Date().toLocaleDateString();
    },
  },
  methods: {
    changeCurrentPicture() {
      if (this.currentPictureIndex == 3) {
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

.background-papers {
  width: 300px;
  display: inline-block;
}

.papers {
  background: linear-gradient(to bottom, #f1f1f1, #7c7c7c);
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
}

.box {
  overflow: hidden;
}

.content {
  font-size: 15px;
  line-height: 20px;
  padding: 0 20px;
  text-align: justify;
}

.left {
  float: left;
  width: 50%;
}

.left .content {
  border-right: 5px solid transparent;
}

.right {
  float: right;
  width: 50%;
}
</style>