<template>
  <ul v-if="breeds.length === 0" class="no-breeds">
    <li>Пород не додано</li>
  </ul>
  <ul v-else class="list">
    <li v-for="breed in breeds" v-bind:key="breed.id">
      <breed-item :breed="breed" />
    </li>
  </ul>
</template>

<script>
import BreedItem from "./BreedItem.vue";

export default {
  name: "BreedList",
  props: {
    breeds: {
      type: Array,
      required: true,
    },
  },
  components: {
    BreedItem,
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.no-breeds {
  list-style: none;
  margin: 12rem;
  font-weight: bold;
  font-size: 4rem;
  padding: 0;
  text-align: center;
  color: white;
}
</style>
