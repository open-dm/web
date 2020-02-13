<template>
  <div>
    <h1>Monsters</h1>
    <list-table
      v-if="monsters && monsters.length"
      :data="monsters"
      :display-fields="tableDisplayFields"
      @search="onSearch"
      @row-click="onRowClick"
    />
  </div>
</template>

<script>
import Monster from '@/classes/Monster';
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
    };
  },

  methods: {
    onSearch(term) {
      // TODO integrate with the search functionality of opendm-api
      console.log(term);
    },

    onRowClick(monster) {
      this.$router.push(`/monsters/view/${monster.id}`);
    },
  },

  mounted() {
    Monster.list().then((monsters) => {
      this.monsters = monsters;
      monsters[0].test();
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
