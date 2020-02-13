<template>
  <el-card
    class="text-center"
    shadow="never"
  >
    <p class="text-xs mb-2">
      {{ upperFirst(name) }}
    </p>
    <p class="mb-1">
      {{ ability.score }}
    </p>
    <p>
      {{ ability.modifier >= 0 ? '+' : '-' }}{{ ability.modifier }}
    </p>
  </el-card>
</template>

<script>
import { upperFirst } from 'lodash';

export default {
  name: 'ability',

  props: {
    ability: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  methods: {
    upperFirst,
  },
};
</script>
