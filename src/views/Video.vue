<template>
  <div style="text-align: center; background: #000">
    <video
      :src="video.src"
      autoplay
      style="height: 100vh; display: inline-block"
      @ended="showQuestion = true"
      controls
    ></video>
    <div v-if="showQuestion" class="question">
      <div class="question__content">
        <img
          :src="require('@/assets/img/gh.png')"
          style="display: inline-block"
        />
        <br />
        <h1 class="text-2xl">
          {{ video.question }}
        </h1>
        <br />
        <button
          @click="goToNewVideo(option.video)"
          v-for="option in video.options"
          :key="option.video"
          class="mb-4 block mx-auto"
        >
          {{ option.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import video from "../utils/videos";
export default {
  data() {
    return {
      video: {},
      showQuestion: false,
    };
  },
  methods: {
    goToNewVideo(src) {
      if (src == "-1") {
        this.$router.go("-1");
      } else {
        this.$router.push("/video/" + src);
        location.reload();
      }
    },
  },
  created() {
    if (!this.$route.params.id) {
      this.$router.push("/");
    } else {
      this.video = video(this.$route.params.id);
    }
  },
};
</script>

<style>
.question {
  position: fixed;
  z-index: 2;
  top: 0;
  left: calc(50% - 200px);
  background: linear-gradient(to bottom, #000 50%, rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(10px);
  color: white;
  width: 400px;
  height: 100vh;
  display: flex;
  align-items: center;
}

.question__content {
  text-align: center;
  width: 100%;
}
</style>