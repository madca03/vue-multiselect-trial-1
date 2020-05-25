<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link :to="{ name: 'vue-multiselect-1' }">Ex1</router-link>|
      <router-link :to="{ name: 'vue-multiselect-2' }">Ex2</router-link>|
      <router-link :to="{ name: 'vue-multiselect-3' }">Ex3</router-link>|
      <router-link :to="{ name: 'vue-multiselect-4' }">Ex4</router-link>|
      <router-link :to="{ name: 'vue-multiselect-5' }">Ex5</router-link>|
      <router-link :to="{ name: 'vue-multiselect-7' }">Ex7</router-link>|
      <router-link :to="{ name: 'vue-multiselect-8' }">Ex8</router-link>|
      <router-link :to="{ name: 'vue-multiselect-9' }">Ex9</router-link>|
      <router-link :to="{ name: 'vue-multiselect-10' }">Ex10</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
