<template>
  <div>
    <h1>Monsters</h1>
    <list-table
      v-if="monsters"
      :data="monsters"
      :display-fields="tableDisplayFields"
      @search="onSearch"
      @row-click="onRowClick"
      @filter="onFilter"
      @limit="limit = $event"
      :filter-sets="filterSets"
      empty-text="No monsters can be found. Try changing your search criteria"
      :limit="limit"
    />
  </div>
</template>

<script>
import Monster from '@/classes/Monster';
import Alignment from '@/classes/Alignment';
import Size from '@/classes/Size';

import ListTable from '@/components/global/ListTable';

export default {
  name: 'list-monsters',

  components: {
    ListTable,
  },

  data() {
    return {
      monsters: null,
      tableDisplayFields: [
        {
          prop: 'id',
          label: 'ID',
        },
        {
          prop: 'name',
          label: 'Name',
        },
        {
          prop: 'alignment.name',
          label: 'Alignment',
        },
        {
          prop: 'challenge.level',
          label: 'Challenge',
        },
      ],

      searchTerm: null,
      filterSets: {},
      filters: null,

      limit: 100,
    };
  },

  methods: {
    fetchMonsters() {
      Monster.list(
        {
          limit: this.limit,
          search: this.searchTerm,
          filters: this.filters,
        },
      ).then((monsters) => {
        this.monsters = monsters;
        monsters[0].test();
      });
    },

    onSearch(value) {
      this.searchTerm = value;
      this.fetchMonsters();
    },

    onFilter(filters) {
      this.filters = Object.keys(filters)
        .filter((key) => filters[key].length)
        .map((key) => `${key}:${filters[key].join(',')}`);

      this.fetchMonsters();
    },

    onRowClick(monster) {
      this.$router.push(`/monsters/view/${monster.id}`);
    },

    fetchAlignments() {
      Alignment.list().then((alignments) => {
        this.filterSets.alignment = {
          type: 'select',
          options: alignments.map((alignment) => ({
            value: alignment.code,
            label: alignment.name,
          })),
        };
      });
    },

    fetchSizes() {
      Size.list().then((sizes) => {
        this.filterSets.size = {
          type: 'select',
          options: sizes.map((size) => ({
            value: size.code,
            label: size.name,
          })),
        };
      });
    },
  },

  mounted() {
    this.fetchAlignments();
    this.fetchSizes();
    this.fetchMonsters();
  },
};
</script>

<style lang="scss" scoped>

</style>
