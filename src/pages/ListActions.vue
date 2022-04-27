<template>
  <div class="list-controls">
    <button title="Додає випадкову породу" @click="addRandomBreed">
      Додати
    </button>
    <button title="Видаляє випадкову породу" @click="removeRandomBreed">
      Видалити
    </button>
    <button title="Перемішує список" @click="shuffleBreeds">Перемішати</button>
  </div>

  <breed-list :breeds="displayedBreeds" />
</template>

<script>
import BreedList from "../components/BreedList.vue";
import { fetchBreeds } from "../lib";

export default {
  name: "ListActions",
  data() {
    return {
      breeds: [],
      displayedBreeds: [],
    };
  },
  components: { BreedList },
  methods: {
    async loadBreeds() {
      this.breeds = await fetchBreeds();
    },
    shuffleBreeds() {
      this.displayedBreeds = this.displayedBreeds.sort(
        () => Math.random() - 0.5
      );
    },
    addRandomBreed() {
      const breedCannotBeAdded =
        this.breeds.length === this.displayedBreeds.length ||
        this.breeds.length === 0;
      if (breedCannotBeAdded) {
        return;
      }

      for (;;) {
        const randomBreed =
          this.breeds[Math.floor(Math.random() * this.breeds.length)];

        if (!this.displayedBreeds.includes(randomBreed)) {
          this.displayedBreeds.push(randomBreed);
          return;
        }
      }
    },
    removeRandomBreed() {
      const breedToRemove =
        this.displayedBreeds[
          Math.floor(Math.random() * this.displayedBreeds.length)
        ];
      this.displayedBreeds = this.displayedBreeds.filter(
        (breed) => breed !== breedToRemove
      );
    },
  },
  created() {
    this.loadBreeds();
  },
};
</script>

<style>
.list-controls {
  position: absolute;
  top: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.4rem;
  width: 100%;
  height: 5rem;
}
</style>
