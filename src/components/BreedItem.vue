<template>
  <div class="item">
    <p class="name">{{ breed.name }}</p>
    <ul class="sub-breeds">
      <li v-for="subBreed in breed.subBreeds" v-bind:key="subBreed">
        {{ subBreed }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BreedItem",
  props: {
    breed: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item {
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  margin: 0.4rem;
  padding: 0.4rem;
}
.name {
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 0.2rem;
  outline: none;
}
.sub-breeds {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sub-breeds li {
  font-size: 1.6rem;
  color: rgb(255, 0, 0);
}
</style>
