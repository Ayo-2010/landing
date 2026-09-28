<template>
  <div
    class="inline-flex items-center font-bold uppercase tracking-wider"
    :class="[gapClass, textColorClass, textSizeClass]"
  >
    <span>{{ text }}</span>
    <ArrowDownRight :class="iconSizeClass" />
  </div>
</template>

<script setup>
import { ArrowDownRight } from 'lucide-vue-next'

defineProps({
  text: {
    type: String,
    required: true,
  }
})
</script>
