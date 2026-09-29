<template>
  <span
    class="logo inline-flex items-center justify-center font-bold text-center leading-none"
    :class="[
      withWordmark ? 'gap-2' : ''
    ]"
  >
    <span class="logo font-bold rounded text-2xl sm:text-3xl border-4 px-1 py-0.5 text-center leading-none">Cn</span>
    <span v-if="withWordmark" class="logo font-bold text-2xl sm:text-3xl tracking-tight">Construction</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  withWordmark: {
    type: Boolean,
    default: false
  }
})
</script>
