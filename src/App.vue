<template>
  <main-header />
  <main>
    <router-view />
  </main>
</template>

<script>
import MainHeader from "./components/Layout/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
main {
  padding: 0.4rem;
  display: flex;
  background: rgb(53, 53, 53);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 5rem);
}
button {
  background-color: rgb(53, 53, 53);
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.4rem;
  padding: 0.4rem 1.2rem 0.4rem 1.2rem;
}
button:hover {
  background-color: rgb(88, 88, 88);
  cursor: pointer;
}
</style>
