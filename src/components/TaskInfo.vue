<template>
  <h1>{{ heading }}</h1>
  <p v-for="subtask in subtasks" v-bind:key="subtask">
    Завдання: <br />{{ subtask }}
  </p>
</template>

<script>
export default {
  name: "TaskInfo",
  props: {
    heading: {
      type: String,
      required: true,
    },
    subtasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  text-align: left;
  justify-content: start;
  align-items: start;
}
</style>