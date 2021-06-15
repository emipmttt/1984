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
                      <h1 class="text-xl">Archivo Secreto</h1>
                      <br />
                      <h1 class="text-xl">
                        Pruebas obtenidas en la investigación #452B_
                      </h1>
                      <br />
                      <p>
                        I. Textos Crimentales Las pantallas constantes de
                        publicidad, los anuncios que coinciden con mis
                        necesidades específicas, las conferencias web, las redes
                        sociales y hasta un apego insano a mi dispositivo móvil
                        delimitan básicamente un día común en mi vida. Con
                        tantos pixeles recorriendo mi mirada, la visión de mi
                        Dirección se ve consecuentemente corrompida con quién
                        sabe qué voz robótica en lontananza, con los micrófonos
                        que de seguro escuchan, con la cámara de mi computadora
                        grabándome al plasmar mis escritos más privados…
                      </p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="content text-justify">
                      <p>
                        Con tantos pixeles recorriendo mi mirada, la visión de
                        mi Dirección se ve consecuentemente corrompida con quién
                        sabe qué voz robótica en lontananza, con los micrófonos
                        que de seguro escuchan, con la cámara de mi computadora
                        grabándome al plasmar mis escritos más privados…
                      </p>
                      <br />
                      <p>
                        La cercanía innecesaria de quienes viven conmigo, en
                        este tiempo tan distópico y tan cercano a la ficción de
                        un autor del siglo XX, los vuelve incluso entes extraños
                        y ajenos, que afectan e influyen también en “mi visión".
                        -Alejandro Pineda. ALEJANDRO PINEDA
                      </p>
                      <br /><br /><br />
                      <img :src="require('@/assets/img/data/literaria.jpeg')" />
                    </div>
                  </div>
                </div>
                <hr />
                <div class="box my-10">
                  <div class="left">
                    <div class="content text-justify">
                      II. Personas que se revelaron en contra del Gran Hermano
                      Daniela Mosqueda y Andrea Sánchez son dos dramaturgas del
                      Colegio de Literatura Dramática y Teatro de la UNAM,
                      crearon está adaptación que lleva a los personajes de 1984
                      a enfrentarse a las nuevas tecnologías, comprobando que,
                      aunque la novela de Orwell haya sido escrita hace más de
                      cincuenta años, sigue siendo muy vigente en nuestros días.
                      <br />
                      <br />
                      <img :src="require('@/assets/img/data/andrea.jpeg')" />
                    </div>
                  </div>
                  <div class="right">
                    <div class="content text-justify">
                      <img :src="require('@/assets/img/data/daniela.jpeg')" />
                      <br />
                      III. Contacto con crimentales altamente perseguidos George
                      Orwell era el seudónimo de Eric Arthur Blair, nacido en
                      Motihari, Bengala, India, en 1903. Fue un escritor que
                      usaba sus letras como forma de protesta. En su novela, Mil
                      novecientos ochenta y cuatro (1949), expresa su odio por
                      el totalitarismo, satirizando los desarrollos de las
                      sociedades y describe futuros distópicos con el fin de
                      evitarlos. Este libro ha sido traducido en todo el mundo y
                      tuvo diferentes interpretaciones, especialmente durante el
                      conflicto de la Guerra Fría. Esta fue la última novela que
                      escribió Orwell antes de morir de tuberculosis en 1950, en
                      Londres, Inglaterra.
                    </div>
                  </div>
                </div>
                <div class="box my-10">
                  <div class="left">
                    <div class="content text-justify">
                      <h1 class="text-xl">
                        IV.ALERTA MÁXIMA: BUSCADOS POR REBELIÓN II.
                      </h1>

                      <br />
                      <br />
                      <img :src="require('@/assets/img/data/noelani.jpeg')" />
                      <br />
                      <img :src="require('@/assets/img/data/cristina.jpeg')" />
                      <br />
                    </div>
                  </div>
                  <div class="right">
                    <div class="content text-justify">
                      <br />
                      <img :src="require('@/assets/img/data/fernanda.jpeg')" />
                      <br />
                      <img :src="require('@/assets/img/data/gabriela.jpeg')" />
                      <br />
                      <img :src="require('@/assets/img/data/liminals.jpg')" />
                      <p>
                        NELLY CARDONA <br />
                        GUSTAVO GEORGE <br />
                        OCTAVIO ORTIZ <br />
                        GABRIELA GÁRLEZ <br />
                        <b>
                          MIEMBROS DE LA OPOSICIÓN, SE BUSCAN POR REALIZAR
                          MÚSICA QUE INCITA A LA REBELIÓN.
                        </b>
                      </p>
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
  border: solid 1px #666;
}
</style>