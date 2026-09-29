import { ref, onUnmounted } from 'vue'

export function useCountUp(targetNumber, duration = 2500) {
  const count = ref(0)
  let animationFrame = null

  const startCount = () => {
    if (animationFrame) cancelAnimationFrame(animationFrame)

    const startTime = performance.now()

    const update = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutProgress = 1 - (1 - progress) * (1 - progress)
      count.value = Math.floor(easeOutProgress * targetNumber)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update)
      } else {
        count.value = targetNumber
      }
    }

    animationFrame = requestAnimationFrame(update)
  }

  const resetCount = () => {
    if (animationFrame) cancelAnimationFrame(animationFrame)
    count.value = 0
  }

  onUnmounted(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame)
  })

  return {
    count,
    startCount,
    resetCount
  }
}