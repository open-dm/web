<template>
  <el-aside
    width="200px"
    class="side-bar"
  >
    <el-menu class="menu">
      <el-menu-item>Characters</el-menu-item>
      <router-link to="/monsters/list">
        <el-menu-item>Monsters</el-menu-item>
      </router-link>
      <el-menu-item>Items</el-menu-item>
      <el-menu-item>Journal</el-menu-item>
      <el-menu-item>Locations</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'sidebar',
};
</script>

<style scoped>
.side-bar {
  @apply bg-blue-800;
}

.menu,
.menu * {
  @apply bg-transparent text-white;
}

.menu *:hover {
  @apply bg-gray-300 text-blue-700;
}
</style>
