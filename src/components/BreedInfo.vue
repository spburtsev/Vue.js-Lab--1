<template>
  <section class="info">
    <h1 class="breed-name">{{ getBeautifiedName(breed.name) }}</h1>
    <ul class="sub-breeds">
      <li v-for="breed in breed.subBreeds" v-bind:key="breed">
        {{ getBeautifiedName(breed) }}
      </li>
    </ul>
    <img class="image" v-bind:src="imageUrl" />
  </section>
</template>

<script>
export default {
  name: "BreedInfo",
  props: {
    breed: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    getBeautifiedName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    async getImageUrl() {
      console.log("updating");
      const response = await fetch(
        `https://dog.ceo/api/breed/${this.breed.name}/images/random`
      );
      const json = await response.json();
      this.imageUrl = json.message;
    },
  },
  created() {
    this.getImageUrl();
  },
  watch: {
    breed: {
      handler() {
        this.getImageUrl();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.info {
  border-radius: 4px;
  background-color: rgb(231, 231, 231);
  padding: 0.4rem;
  margin: 0.4rem;
  display: grid;
  grid-gap: 4px;
  grid-template-areas:
    "breed-name breed-name"
    "sub-breeds image";
}

.breed-name {
  grid-area: breed-name;
}
.sub-breeds {
  display: flex;
  flex-direction: column;
  padding: 0;
  grid-area: sub-breeds;
}

.sub-breeds li {
  justify-self: flex-start;
  align-self: flex-end;
  list-style: none;
  position: relative;
}

.image {
  grid-area: image;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 36rem;
  border-radius: 4px;
}

@media (min-width: 500px) {
  .info {
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "breed-name breed-name"
      "sub-breeds image";
  }
}
</style>