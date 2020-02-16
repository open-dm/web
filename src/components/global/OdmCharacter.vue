<template>
  <div>
    <h1>{{ character.name }}</h1>

    <h3>Abilities</h3>
    <odm-abilities
      :abilities="character.abilities"
      include-skills
    />
  </div>
</template>

<script>
import OdmAbilities from './OdmAbilities';

export default {
  name: 'character',

  components: {
    OdmAbilities,
  },

  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>
