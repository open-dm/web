<template>
  <odm-character :character="monster" is-monster />
</template>

<script>
import Monster from '@/classes/Monster';
import OdmCharacter from './OdmCharacter';

export default {
  name: 'monster',

  props: {
    monster: {
      type: Monster,
      required: true,
    },
  },

  components: {
    OdmCharacter,
  },
};
</script>
