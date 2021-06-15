<template>
  <div class="page">
    <div class="container">
      <div class="flex main-container">
        <div
          class="flex-1 p-10 flex items-center justify-center"
          style="max-height: 100vh"
        >
          <div>
            <img
              :src="require('@/assets/img/logo.jpg')"
              style="width: 400px; display: inline-block"
            />
            <br />
            <br />
            <img
              :src="require('@/assets/img/ingsoc.jpeg')"
              style="width: 400px; display: inline-block"
            />
            <br />
            <br />
            <section class="Pacifica text-center text-4xl" style="color: white">
              <p>LA GUERRA ES LA PAZ</p>
              <p>LA IGNORANCIA ES LA FUERZA</p>
              <p>LA LIBERTAD ES LA ESCLAVITUD</p>
            </section>
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
                      <h1 class="text-xl">Miembros</h1>
                      <p>
                        Agradecemos la participación de las siguientes
                        instituciones y personas:
                      </p>
                      <br />
                      <p>
                        <b>Universidad Nacional Autónoma de México</b> <br />
                        <br />
                        <img :src="require('@/assets/img/unam.png')" alt="" />
                        <br />

                        Rector: Dr. Enrique Graue Wiechers. <br />
                        Secretario General: Dr. Leonardo Lomelí Vanegas
                        <br />
                        Unidad Administrativa: Lic. Raúl Bejarano Sarmiento
                        <br />
                        Secretaría de Desarrollo Institucional: Dr. Alberto Ken
                        Oyama Nakagawa. <br />
                        Abogado General: Dr. Alfredo Sánchez Castañeda
                      </p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="content text-justify">
                      <p>
                        <b>
                          Autoridades de la Facultad de Filosofía y Letras
                        </b>
                        <br />
                        <br />
                        <img
                          :src="require('@/assets/img/filosofia.png')"
                          alt=""
                        />
                        <br />
                        Directora: Dra. Mary Frances Rodríguez Van Gort. <br />
                        Secretaría Ejecutiva de la Dirección: Eduardo Rivera
                        <br />
                        Pizano Secretaría del Consejo Técnico: Lic. Miguel
                        <br />
                        Antonio del Castillo Paredes Secretaria Académica: Dra.
                        <br />
                        Nair Anaya Ferreira Secretaria Administrativa: Lic.
                        <br />
                        Laura V. Orozco Rodríguez <br />
                      </p>
                      <br />
                      <p>
                        <b> Colegio de Literatura Dramática y Teatro </b>
                        <img
                          :src="require('@/assets/img/literatura.webp')"
                          alt=""
                        />
                        Coordinador: Lic. Horacio José Almada Anderson
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="box my-10">
                  <div class="left">
                    <div class="content text-justify">
                      <h1 class="text-xl">INGSOC</h1>
                      <br />
                      Ya que gracias a ellos podemos seguir en operación...
                    </div>
                  </div>
                  <div class="right">
                    <div class="content text-justify">
                      <img
                        :src="require('@/assets/img/ingsocpromo.webp')"
                        alt=""
                      />
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
hr {
  border: solid 1px #555;
}
</style>