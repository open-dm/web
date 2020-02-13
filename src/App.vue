<template>
  <layout>
    <template #content>
      <router-view/>
    </template>
  </layout>
</template>

<script>
import Layout from './components/layout/Layout';

export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Roboto");

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
