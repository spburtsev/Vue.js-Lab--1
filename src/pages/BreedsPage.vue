<template>
  <div class="wrapper">
    <random-breed :breeds="breeds" />
    <breed-list class="all-breeds" :breeds="breeds" />
  </div>
</template>

<script>
import RandomBreed from "../components/RandomBreed.vue";
import BreedList from "../components/BreedList.vue";
import { fetchBreeds } from "../lib";

export default {
  name: "BreedsPage",
  components: {
    RandomBreed,
    BreedList,
  },
  data() {
    return {
      breeds: [],
    };
  },
  methods: {
    async loadBreeds() {
      this.breeds = await fetchBreeds();
    },
  },
  created() {
    this.loadBreeds();
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-areas: "random-breed" "all-breeds";
}
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 3fr 1fr;
    grid-template-areas: "random-breed all-breeds";
  }
}
</style>