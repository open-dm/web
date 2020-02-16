<template>
  <div>
    <span class="text-lg mr-4">{{ score }}</span> <span>{{ skill }}</span>
  </div>
</template>

<script>
export default {
  name: 'odm-skill',

  props: {
    skill: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
};
</script>
