<template>
  <div class="page">
    <div class="container m-auto">
      <div class="flex">
        <div class="flex-1 p-10">
          <h1 class="SquadaOne red-text text-4xl">PERSONAS EN INVESTIGACIÓN</h1>
        </div>
        <div class="flex-1 flex p-10">
          <Header />
        </div>
      </div>
      <div class="block md:flex">
        <div class="md:flex-1">
          <div class="papers-1"></div>
          <div class="papers-2"></div>
          <div class="papers p-5" style="height: 450px">
            <div class="flex">
              <img
                :src="require('@/assets/img/elenco/' + currentActor.image)"
                class="flex-1"
                style="width: 150px; height: 200px"
              />
              <div class="flex-1">
                <div class="p-5" style="width: 250px">
                  <h1 class="text-3xl">
                    {{ currentActor.name }}
                  </h1>
                </div>
              </div>
            </div>
            <p class="text-2xl p-5 text-justify" style="width: 400px">
              {{ currentActor.text }}
            </p>
          </div>
        </div>
        <div class="md:flex-1 elenco-list">
          <div
            class="inline-block elenco-list__item"
            v-for="(user, index) in elenco"
            :key="user.image"
          >
            <img
              class="elenco-list__item__image"
              :src="require('@/assets/img/elenco/' + user.image)"
              @click="currentPictureIndex = index"
            />
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
      currentPictureIndex: 0,
      elenco: [
        {
          name: `Erick Labrada. WINSTON SMITH`,
          image: "1.jpg",
          text: `La traición devela la
verdadera cara de quién la
lleva a cabo.`,
        },
        {
          name: `Ilhuicatl Martínez.
JULIA`,
          image: "2.jpg",
          text: `El poder de la confesión
yace en que el Gran
Hermano te escucha.`,
        },
        {
          name: `Octavio Aguilar
GEORGE ORWELL`,
          image: "3.jpg",
          text: `Si quiere una imagen del futuro,
imagine una bota pisando un
rostro humano incesantemente`,
        },
        {
          name: `Diego Valle Vargas
EMMANUEL GOLDSTEIN/
TOM PARSONS`,
          image: "4.jpg",
          text: `El Partido nunca detendría a
alguien inocente.`,
        },
        {
          name: `Janeth Tellez
SYME / NIÑA PARSONS`,
          image: "5.jpg",
          text: `Corrige lo que sabes que está mal...
antes de que el Gran Hermano te
invite a hacerlo`,
        },
        {
          name: `Angel Urrutia
POLICÍA DEL PENSAMIENTO 2 / NIÑO
PARSONS`,
          image: "6.jpg",
          text: `En los camaradas envías tu furor para
consumirlos como desechos. `,
        },
        {
          name: `Gabriela Garciamoreno
SEÑORA PARSONS`,
          image: "7.jpg",
          text: `Aborrece el crimental
Aférrate al Gran Hermano `,
        },
        {
          name: `Gustavo George
POLICÍA DEL PENSAMIENTO 1`,
          image: "8.jpg",
          text: `Haz justicia.
El Gran Hermano te llenará de
prosperidad y honra`,
        },
        {
          name: `Alhelí Martínez
SRA. CHARRINGTON /
PROLE`,
          image: "9.jpg",
          text: `Cuando finalmente te
rindas ante nosotros será
por voluntad propia.`,
        },
        {
          name: `Paola García
AMPLEFORTH /
KATHARINE`,
          image: "10.jpg",
          text: `Siempre creí que mi trabajo
me convertía en un poeta`,
        },
        {
          name: `Rodrigo Sánchez
TILLOTSON`,
          image: "11.jpg",
          text: `Reconoce al GH y
permanece en él`,
        },
        {
          name: `Marisol Hernández
El Gran Hermano / Martin`,
          image: "12.jpg",
          text: `La guerra es la paz.
La libertad es la esclavitud.
La ignorancia es la fuerza. `,
        },
        {
          name: `Nelly Cardona
O’ BRIEN`,
          image: "13.jpg",
          text: `La fidelidad no se siente, se
determina.`,
        },
      ],
    };
  },
  computed: {
    currentActor() {
      return this.elenco[this.currentPictureIndex];
    },
  },
  methods: {
    changeCurrentPicture() {
      if (this.currentPictureIndex == 13) {
        this.currentPictureIndex = 1;
      } else {
        this.currentPictureIndex = this.currentPictureIndex + 1;
      }
      setTimeout(() => {
        this.changeCurrentPicture();
      }, 6000);
    },
  },
  mounted() {
    setTimeout(() => {
      this.changeCurrentPicture();
    }, 6000);
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
  border-radius: 15px;
  padding: 10px;
  margin-top: 20px;
  position: absolute;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
}

.papers-1 {
  position: absolute;
  background: linear-gradient(to bottom, #f1f1f1, #7c7c7c);
  border-radius: 15px;
  padding: 10px;
  transform: rotate(5deg);
  width: 450px;
  height: 470px;
  margin: auto;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
}
.papers-2 {
  position: absolute;
  background: linear-gradient(to bottom, #f1f1f1, #7c7c7c);
  border-radius: 15px;
  padding: 10px;
  transform: rotate(-7deg);
  width: 400px;
  height: 450px;
  margin: auto;
  box-shadow: 0px 1px 10px 10px rgba(0, 0, 0, 0.2);
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
.elenco-list {
  color: white;
}

.elenco-list__item {
  border-radius: 10px;
  height: 130px;
  width: 100px;
  margin-right: 10px;
  display: inline-block;
}

.elenco-list__item__image {
  height: 130px;
  width: 100px;
  transition: 0.5s;
  position: absolute;
  border-radius: 10px;
}

.elenco-list__item__image:hover {
  position: absolute;
  height: 170px;
  width: 130px;
  margin-left: -10px;
  margin-top: -10px;
  transition: 0.5s;
  z-index: 1;
  box-shadow: 0px 1px 15px 10px rgba(0, 0, 0, 0.8);
}
</style>