<template>
  <section class="panel-section">
    <h1>Випадкова порода, що має підпороди:</h1>
    <button @click="rollBreed">Далі</button>
    <breed-info v-if="rolledBreed" :breed="rolledBreed" />
    <h3 class="no-button-pressed-msg" v-else>Натисніть кнопку 😢</h3>
  </section>
</template>

<script>
import BreedInfo from "./BreedInfo.vue";

export default {
  name: "RandomBreed",
  props: {
    breeds: {
      type: Array,
      required: true,
    },
  },
  components: {
    BreedInfo,
  },
  data() {
    return {
      rolledBreed: null,
    };
  },
  methods: {
    rollBreed() {
      const breedsThatHaveSubReeds = this.breeds.filter(
        (breed) => breed.subBreeds.length > 0
      );
      const randomBreed =
        breedsThatHaveSubReeds[
          Math.floor(Math.random() * breedsThatHaveSubReeds.length)
        ];
      this.rolledBreed = randomBreed;
    },
  },
};
</script>

<style scoped>
.panel-section {
  background: white;
  height: 100%;
  width: 100%;
  margin: 0.4rem;
  padding: 0.4rem;
  border-radius: 4px;
}
.no-button-pressed-msg {
  color: rgb(148, 148, 148);
}
</style>