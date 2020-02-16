<template>
  <div>
    <el-row>
      <el-col
        v-for="(ability, key) in abilities"
        :key="key"
        :span="Math.round(24 / Object.keys(abilities).length)"
      >
        <odm-ability
          :ability="ability"
          :name="key"
        />
      </el-col>
    </el-row>

    <template v-if="includeSkills">
      <odm-skill v-for="(score, skill) in skills" :key="skill" :skill="skill" :score="score" />
    </template>
  </div>
</template>

<script>
import OdmSkill from './OdmSkill';
import OdmAbility from './OdmAbility';

export default {
  name: 'odm-abilities',

  components: {
    OdmSkill,
    OdmAbility,
  },

  computed: {
    skills() {
      return Object.assign(
        ...Object.values(this.abilities)
          .map((ability) => ability.skills),
      );
    },
  },

  props: {
    abilities: {
      type: Object,
      required: true,
    },

    includeSkills: {
      type: Boolean,
    },
  },
};
</script>
