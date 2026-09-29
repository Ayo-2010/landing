<template>
  <div class="bg-[#f3f3f1]">
    <MainSection :title="service ? service.title : 'Service'" />

    <div v-if="service" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-zinc-800">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div class="lg:col-span-7 space-y-8">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
              <span class="text-xs font-bold uppercase tracking-widest text-orange-600">
                Service {{ service.id }}
              </span>
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              {{ service.title }}
            </h1>
          </div>

          <p class="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {{ service.description }}
          </p>

          <div class="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4">
            <Check class="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-600" />
            <span class="text-sm font-semibold text-zinc-800">{{ service.feature }}</span>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-4">What we deliver</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li
                v-for="item in service.deliverables"
                :key="item"
                class="flex items-start gap-2 text-sm text-zinc-600"
              >
                <CheckCircle2 class="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-5">How we work</h2>
            <ol class="space-y-4">
              <li
                v-for="(step, index) in service.process"
                :key="step.title"
                class="flex gap-4 bg-white border border-zinc-100 rounded-xl p-5"
              >
                <span class="flex-shrink-0 w-9 h-9 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm">
                  {{ index + 1 }}
                </span>
                <div>
                  <h3 class="font-bold text-zinc-900">{{ step.title }}</h3>
                  <p class="text-sm text-zinc-600 mt-1">{{ step.description }}</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <aside class="lg:col-span-5 space-y-6">
          <div class="bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-64 object-cover"
            />
          </div>

          <div class="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
            <h2 class="text-lg font-bold text-zinc-900 mb-4">Other services</h2>
            <ul class="space-y-2">
              <li v-for="item in otherServices" :key="item.slug">
                <router-link
                  :to="`/service/${item.slug}`"
                  class="flex items-center justify-between px-4 py-3 rounded-lg border border-zinc-100 text-sm font-semibold text-zinc-700 hover:border-orange-500 hover:text-orange-600 transition-colors"
                >
                  <span>{{ item.title }}</span>
                  <ArrowUpRight :size="16" />
                </router-link>
              </li>
            </ul>
          </div>

          <router-link
            to="/contact"
            class="block bg-zinc-900 hover:bg-orange-600 text-white font-bold uppercase tracking-widest text-xs py-4 px-6 rounded-xl text-center transition-colors"
          >
            Request a Quote
          </router-link>
        </aside>
      </div>
    </div>

    <div v-else class="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 class="text-3xl font-bold text-zinc-900 mb-4">Service not found</h1>
      <p class="text-zinc-600 mb-8">The service you are looking for does not exist or has moved.</p>
      <router-link
        to="/services"
        class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
      >
        Back to Services
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRight, Check, CheckCircle2 } from 'lucide-vue-next'
import MainSection from '../component/MainSection.vue'
import services from '../data/service.ts'

const route = useRoute()

const service = computed(() => services.value.find(item => item.slug === route.params.service))
const otherServices = computed(() => services.value.filter(item => item.slug !== route.params.service))
</script>
