<template>
  <el-table
    :data="data"
    stripe
  >
    <el-table-column
      v-for="(field, key) in displayFields"
      :key="key"
      :prop="field.prop"
      :label="field.label"
    />
  </el-table>
</template>

<script>
export default {
  name: 'list-table',

  props: {
    data: {
      type: Array,
      required: true,
    },

    displayFields: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    console.log(this.data, this.displayFields);
  },
};
</script>

<style lang="scss" scoped>

</style>
