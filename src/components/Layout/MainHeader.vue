<template>
  <header>
    <nav>
      <h1>Advanced JS Lab #1</h1>
      <ul>
        <li><router-link to="/">Головна</router-link></li>
        <li><router-link to="/greeting">Привітання</router-link></li>
        <li><router-link to="/breeds">Породи</router-link></li>
        <li><router-link to="/list-actions">Рандомайзер</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #ffffff;
}

nav {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active {
  color: rgb(0, 45, 247);
  border-color: #e9e8e8;
  border-radius: 4px;
  background-color: #e9e8e8;
}
a.router-link-active {
	color: rgb(0, 45, 247);
}
</style>