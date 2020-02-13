<template>
  <div>
    <list-table
      v-if="monsters && monsters.length"
      :data="monsters"
      :display-fields="tableDisplayFields"
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
