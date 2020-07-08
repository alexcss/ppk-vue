<template>
  <nav class="ba-nav">
    <router-link to="/">Головна</router-link>|
    <router-link to="/vykladachi">Викладачі</router-link>|
    <router-link to="/spetcіalіzatsii">Спеціалізаціі</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss">
.ba-nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>