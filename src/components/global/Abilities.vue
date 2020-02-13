<template>
  <el-row>
    <el-col
      v-for="(ability, key) in abilities"
      :key="key"
      :span="Math.round(24 / Object.keys(abilities).length)"
    >
      <ability
        :ability="ability"
        :name="key"
      />
    </el-col>
  </el-row>
</template>

<script>
import Ability from './Ability';

export default {
  name: 'abilities',

  components: {
    Ability,
  },

  props: {
    abilities: {
      type: Object,
      required: true,
    },
  },
};
</script>
