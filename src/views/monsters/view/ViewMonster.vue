<template>
  <div>
    <template v-if="monster">
      <h1>{{ monster.name }}</h1>

      <h3>Abilities</h3>
      <abilities
        :abilities="monster.abilities"
      />
    </template>
  </div>
</template>

<script>
import Abilities from '@/components/global/Abilities';
import Monster from '@/classes/Monster';

export default {
  name: 'view-monster',

  components: {
    Abilities,
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
