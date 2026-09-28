<template>
  <div class="absolute w-full overflow-hidden bg-transparent pt-0 pb-6 select-none pointer-events-none z-20">
    <div class="flex whitespace-nowrap min-w-full">
      
      <div class="flex items-start gap-3 animate-marquee shrink-0 pr-3">
        <div v-for="i in 16" :key="'t1-' + i" class="flex items-start gap-3">
          <div class="w-[2px] h-6 bg-black/40"></div>
          <div class="w-[1.5px] h-3 bg-black/60"></div>
          <div class="w-[1.5px] h-3 bg-black/60"></div>
          <div class="w-[1.5px] h-3 bg-black/60"></div>
          <div class="w-[1.5px] h-3 bg-black/60"></div>
        </div>
      </div>

      <div class="flex items-start gap-3 animate-marquee shrink-0 pr-3" aria-hidden="true">
        <div v-for="i in 16" :key="'t2-' + i" class="flex items-start gap-3">
          <div class="w-[2px] h-6 bg-black/40"></div>
          <div class="w-[1.5px] h-3 bg-black/60"></div>
          <div class="w-[1.5px] h-3 bg-black/60"></div>
          <div class="w-[1.5px] h-3 bg-black/60"></div>
          <div class="w-[1.5px] h-3 bg-black/60"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marqueeReverse 25s linear infinite;
}

@keyframes marqueeReverse {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
}
</style>
