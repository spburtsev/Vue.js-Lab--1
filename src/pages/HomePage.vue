<template>
  <div class="wrapper">
    <task-info
      v-for="task in tasks"
      v-bind:key="task"
      :heading="task.heading"
      :subtasks="task.subTasks"
    />
  </div>
</template>

<script>
import TaskInfo from "../components/TaskInfo.vue";
export default {
  name: "HomePage",
  components: { TaskInfo },
  data() {
    return {
      tasks: [
        {
          heading: 'Сторінка "Привітання"',
          subTasks: [
            'Создать поле для ввода текста и строку с текстом "Привет незнакомец". Вместо слова "незнакомец" подставлять то, что будет написано в поле для ввода текста',
            "В предыдущем задании сделать так, чтобы после того, как был убран текст из поля для ввода строка приобрела исходный вид. Т.е. содержала текст “Привет незнакомец”",
          ],
        },
        {
          heading: 'Сторінка "Породи"',
          subTasks: [
            "С помощью api, которое предоставляет данный сайт вывести список всех пород. Если порода содержит подпроды, то название этой подпороды должно быть выделено красным цветом. ",
            "Сделать кнопку, по нажатию на которую будет выводится случайная порода, содержащая подпороды и её подпороды с помощью api, которое предоставляет данный сайт ",
          ],
        },
        {
          heading: 'Сторінка "Рандомайзер"',
          subTasks: [
            "Сделать 3 кнопки и список. По нажатию на первую кнопку в список добавляется случайная порода собаки. По нажатию на вторую кнопку из списка удаляется случайная порода собаки. По нажатию на третью кнопку список перемешивается.",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  background-color: white;
  border-radius: 4px;
  width: 60vw;
  height: 100%;
  display: block;
  padding: 1.2rem;
}
</style>