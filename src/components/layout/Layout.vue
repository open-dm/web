<template>
  <el-container class="wrapper">
    <sidebar />

    <el-container>

      <el-header class="header">
        <div class="logo-container">
          <img
            class="inline-block"
            alt="OpenDM logo"
            src="@/assets/vectors/opendmlogo.svg"
            width="30px"
          >
          <span>Open DM</span>
        </div>
      </el-header>

      <el-main class="body">
        <el-button type="primary">Primary</el-button>
        <el-button type="secondary">Secondary</el-button>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  name: 'layout',

  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
.logo-container {
  padding: 1em;

  img {
    margin-right: 0.5em;
  }
}

.wrapper {
  @apply h-screen;
}

.header {
  @apply shadow;
}

.body {
  @apply h-full;
}
</style>
