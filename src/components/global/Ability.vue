<template>
  <el-card
    class="text-center"
    shadow="never"
  >
    <p>{{ ability.score }}</p>
    <p>{{ ability.modifier >= 0 ? '+' : '-' }}{{ ability.modifier }}</p>
    <p class="text-xs">{{ name }}</p>
  </el-card>
</template>

<script>
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
};
</script>
