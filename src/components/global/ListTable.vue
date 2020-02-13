<template>
  <div>
    <el-row>
      <el-col :span="6" :offset="18">
        <el-input
          placeholder="Search"
          prefix-icon="el-icon-search"
          v-model="searchTerm"
        />
      </el-col>
    </el-row>
    <el-table
      :data="data"
      stripe
      @row-click="onRowClick"
    >
      <el-table-column
        v-for="(field, key) in displayFields"
        :key="key"
        :prop="field.prop"
        :label="field.label"
      />
    </el-table>
  </div>
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

  data() {
    return {
      searchTerm: '',
    };
  },

  methods: {
    onRowClick(item, column, event) {
      console.log(item, column, event);
      this.$emit('row-click', item);
    },
  },

  watch: {
    searchTerm() {
      this.$emit('search', this.searchTerm);
    },
  },

  mounted() {
    console.log(this.data, this.displayFields);
  },
};
</script>

<style lang="scss" scoped>

</style>
