<template>
  <el-container class="wrapper">
    <sidebar />

    <el-container>

      <el-header class="header">
        <div
          class="logo-container"
        >
          <router-link
            to="/"
          >
            <img
              class="inline-block"
              alt="OpenDM logo"
              src="@/assets/vectors/opendmlogo.svg"
              width="30px"
            >
            <span>Open DM</span>
          </router-link>
        </div>
      </el-header>

      <el-main class="body">
        <slot name="content" />
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar';

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
