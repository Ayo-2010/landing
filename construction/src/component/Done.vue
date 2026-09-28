<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCountUp } from '../composables/useCountUp'

const stats = [
  { id: 1, value: 26, title: 'Projects Completed', suffix: '+' },
  { id: 2, value: 98, title: 'Customers Satisfied', suffix: '%' },
  { id: 3, value: 20, title: 'Special Machinery', suffix: '+' },
  { id: 4, value: 30, title: 'Years in Business', suffix: '+' }
]

const COUNTER_DURATION = 5000

const counter0 = useCountUp(stats[0].value, COUNTER_DURATION)
const counter1 = useCountUp(stats[1].value, COUNTER_DURATION)
const counter2 = useCountUp(stats[2].value, COUNTER_DURATION)
const counter3 = useCountUp(stats[3].value, COUNTER_DURATION)

const counters = [counter0, counter1, counter2, counter3]

const sectionRef = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        counters.forEach(c => c.startCount())
      } else {
        counters.forEach(c => c.resetCount())
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section ref="sectionRef" class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
        
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.id"
          class="pt-6 md:pt-0 first:pt-0 flex flex-col items-center justify-center space-y-2"
        >
          <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent [-webkit-text-stroke:2px_#f97316] text-orange-500 tracking-tight">
            {{ counters[index].count.value }}{{ stat.suffix }}
          </div>
          <p class="text-sm sm:text-base font-semibold  tracking-wide uppercase">
            {{ stat.title }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>