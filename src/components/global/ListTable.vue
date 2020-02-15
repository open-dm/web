<template>
  <div>
    <el-row>
      <el-col :span="1" :offset="17">
        <el-button
          icon="el-icon-s-operation"
          @click="openDialog"
        />
      </el-col>
      <el-col :span="6">
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
      :empty-text="emptyText"
    >
      <el-table-column
        v-for="(field, key) in displayFields"
        :key="key"
        :prop="field.prop"
        :label="field.label"
      />
    </el-table>

    <el-dialog
      title="Filters"
      width="400px"
      :visible.sync="showFilterDialog"
    >
      <el-row>
        <template
          v-for="(filterSet, index) in filterSets"
        >
          <el-select
            :key="index"
            class="w-full mb-4"
            v-if="filterSet.type === 'select'"
            :value="filterValues[index]"
            @input="onFilterSelected($event, index)"
            multiple
            collapse-tags
            :placeholder="upperFirst(index)"
          >
            <el-option
              v-for="item in filterSet.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-row>
      <el-row class="mb-4">
        <el-col :span="8">
          <span>Items per page</span>
        </el-col>
        <el-col :span="16">
          <el-radio-group v-model="internalLimit" class="w-full">
            <el-radio-button label="10"/>
            <el-radio-button label="25"/>
            <el-radio-button label="50"/>
            <el-radio-button label="100"/>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="text-right">
        <el-button
          type="primary"
          @click="closeDialogAndApplyFilters"
        >
          Apply
        </el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { upperFirst } from 'lodash';

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

    filterSets: {
      type: Object,
    },

    emptyText: {
      type: String,
      default: 'No records could be found.',
    },

    limit: {
      type: Number,
      default: 100,
    },
  },

  data() {
    return {
      searchTerm: '',
      filterValues: {},
      showFilterDialog: true,
      internalLimit: 100,
    };
  },

  methods: {
    onRowClick(item, column, event) {
      console.log(item, column, event);
      this.$emit('row-click', item);
    },

    openDialog() {
      this.showFilterDialog = true;
    },

    closeDialogAndApplyFilters() {
      this.showFilterDialog = false;
      this.emitSettings();
    },

    emitSettings() {
      this.$emit('limit', this.internalLimit);
      this.$emit('filter', this.filterValues);
    },

    onFilterSelected(value, index) {
      console.log(value, index);
      this.filterValues[index] = value;

      this.filterValues = { ...this.filterValues };
    },

    upperFirst,
  },

  watch: {
    searchTerm() {
      this.$emit('search', this.searchTerm);
    },

    limit: {
      immediate: true,
      handler() {
        this.internalLimit = this.limit;
      },
    },
  },

  mounted() {
    console.log(this.data, this.displayFields);

    Object.keys(this.filterSets).forEach((key) => {
      this.filterValues[key] = [];
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
