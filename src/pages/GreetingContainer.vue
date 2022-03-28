<template>
  <input
    v-model="name"
    type="text"
    class="name-input"
    placeholder="Введіть своє ім'я"
  />
  <h1 class="greeting-text">
    Привет, {{ name.trim() === "" ? "незнакомец" : name }}!
  </h1>
</template>

<script>
export default {
  name: "GreetingContainer",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>
.name-input {
  width: 240px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}
.greeting-text {
  font-size: 48px;
  margin-top: 20px;
  color: #ccc;
}
</style>
