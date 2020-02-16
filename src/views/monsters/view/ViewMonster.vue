<template>
  <el-container>
    <template v-if="monster">
      <odm-monster :monster="monster" />
    </template>
  </el-container>
</template>

<script>
import Monster from '@/classes/Monster';

import OdmMonster from '@/components/global/OdmMonster';

export default {
  name: 'view-monster',

  components: {
    OdmMonster,
  },

  data() {
    return {
      monsterId: null,
      monster: null,
    };
  },

  methods: {
    retrieveMonster() {
      Monster.retrieve(this.monsterId).then((monster) => {
        this.monster = monster;
      }).catch((error) => {
        console.log(error);
        this.$router.push('/404');
      });
    },
  },

  mounted() {
    this.monsterId = this.$route.params.id;

    this.retrieveMonster();
  },
};
</script>
