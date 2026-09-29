<template>
  <div class="bg-[#f3f3f1]">
    <MainSection title="Careers" />

    <section class="py-12 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="flex items-center justify-center gap-2 mb-3">
            <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-orange-600">Join the team</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Build your career with us
          </h1>
          <p class="text-zinc-600 mt-4">
            We hire people who take pride in what gets built. Below are the roles we are actively recruiting for.
          </p>
        </div>

        <div class="space-y-4">
          <div
            v-for="job in openings"
            :key="job.id"
            class="bg-white border border-zinc-100 rounded-2xl overflow-hidden"
          >
            <button
              type="button"
              @click="toggle(job.id)"
              class="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left px-6 py-5 hover:bg-zinc-50 transition-colors"
            >
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="text-[10px] font-bold uppercase tracking-widest text-orange-600">{{ job.department }}</span>
                  <span class="text-xs text-zinc-400">·</span>
                  <span class="text-xs text-zinc-500">{{ job.location }}</span>
                  <span class="text-xs text-zinc-400">·</span>
                  <span class="text-xs text-zinc-500">{{ job.type }}</span>
                </div>
                <h2 class="text-lg font-bold text-zinc-900">{{ job.title }}</h2>
              </div>
              <span class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 flex-shrink-0">
                {{ openId === job.id ? 'Close' : 'View Role' }}
                <component :is="openId === job.id ? Minus : Plus" class="w-4 h-4 text-orange-600" />
              </span>
            </button>

            <div v-if="openId === job.id" class="px-6 pb-6 border-t border-zinc-100 pt-5">
              <p class="text-zinc-600 leading-relaxed mb-6">{{ job.summary }}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 class="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Responsibilities</h3>
                  <ul class="space-y-2">
                    <li v-for="item in job.responsibilities" :key="item" class="flex items-start gap-2 text-sm text-zinc-600">
                      <Check class="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Requirements</h3>
                  <ul class="space-y-2">
                    <li v-for="item in job.requirements" :key="item" class="flex items-start gap-2 text-sm text-zinc-600">
                      <Check class="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <router-link
                to="/contact"
                class="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-widest text-xs py-3 px-6 rounded-xl transition-colors"
              >
                Apply for this role
                <ArrowUpRight :size="14" />
              </router-link>
            </div>
          </div>
        </div>

        <div v-if="!openings.length" class="text-center py-20 bg-white rounded-2xl border border-zinc-100">
          <p class="text-zinc-500 font-medium">No open positions right now.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Check, Plus, Minus, ArrowUpRight } from 'lucide-vue-next'
import MainSection from '../component/MainSection.vue'
import openings from '../data/careers.ts'

const openId = ref(1)

const toggle = (id) => {
  openId.value = openId.value === id ? null : id
}
</script>
