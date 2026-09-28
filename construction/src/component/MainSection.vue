<template>
  <div class="flex items-center justify-center relative h-[300px] bg-cover bg-bottom bg-no-repeat   bg-gray-400" >
    <div 
      class="absolute inset-0 z-0 bg-cover bg-center"
      style="background-image: url('/images/process-bg1-1.png');"
    >

      <div class="absolute inset-0 bg-zinc-900/80 mix-blend-multiply"></div>
    </div>

    <h1 class="font-bold text-5xl text-white text-center z-10">{{title}}</h1>
    <div class="absolute py-2 px-4 pr-15 bg-orange-500 text-white bottom-0 left-20 flex gap-2 justify-center items-center clip-top-banner">
      <div class="flex gap-1 justify-center items-center"><MapPin class="w-4 h-4 text-white" /><router-link to="/" class="text-white">Home</router-link></div><span>/</span>
      <span class="capitalize underline">{{current}}</span>
    </div>
  </div>
</template>

<script setup>
import {MapPin} from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const current = route.path.slice(1)

defineProps({
  title: String
})
</script>

<style>
.clip-top-banner {
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
}
</style>