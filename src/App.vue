<template>
  <div id="app">
    <headerNav></headerNav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import headerNav from '@/components/headNav';

export default {
  name: 'App',
  components: { headerNav },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
