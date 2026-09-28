<script setup>
import { computed } from 'vue'
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  arrowType: {
    type: String,
    default: 'arrow-right'
  }
})

const BUTTON_CONSTANTS = Object.freeze({
  padding: 'px-6 py-4',
  gap: 'gap-2',
  roundness: 'rounded-xl'
})

const arrowMap = {
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'chevron-right': ChevronRight
}

const ArrowIcon = computed(() => arrowMap[props.arrowType] || ArrowRight)
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-flex items-center justify-center font-bold uppercase tracking-[0.12em] text-[11px] text-white bg-orange-600 shadow-lg transition-colors duration-200 hover:bg-orange-700',
      BUTTON_CONSTANTS.padding,
      BUTTON_CONSTANTS.gap,
      BUTTON_CONSTANTS.roundness
    ]"
  >
    <span>{{ text }}</span>
    <component :is="ArrowIcon" class="h-4 w-4" />
  </button>
</template>
