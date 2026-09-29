<template>
  <div class="bg-white">
    <MainSection :title="doc.title" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-8">
          <p class="text-xs uppercase tracking-widest text-orange-600 font-bold mb-3">{{ doc.updated }}</p>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">{{ doc.title }}</h1>
          <p class="text-base sm:text-lg text-zinc-600 leading-relaxed mt-5">{{ doc.intro }}</p>

          <div v-if="doc.sections.length" class="mt-10 space-y-8">
            <section v-for="section in doc.sections" :key="section.title">
              <h2 class="text-xl font-bold text-zinc-900 mb-3">{{ section.title }}</h2>
              <div class="space-y-4">
                <p
                  v-for="(paragraph, index) in section.paragraphs"
                  :key="index"
                  class="text-zinc-600 leading-relaxed"
                >
                  {{ paragraph }}
                </p>
              </div>
            </section>
          </div>

          <div v-if="doc.faqs" class="mt-10 space-y-3">
            <div
              v-for="(item, index) in doc.faqs"
              :key="item.question"
              class="border border-zinc-100 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                @click="toggle(index)"
                class="w-full flex items-center justify-between gap-4 text-left px-5 py-4 bg-[#f3f3f1] hover:bg-zinc-100 transition-colors"
              >
                <span class="font-bold text-zinc-900 text-sm sm:text-base">{{ item.question }}</span>
                <component
                  :is="openIndex === index ? Minus : Plus"
                  class="w-4 h-4 flex-shrink-0 text-orange-600"
                />
              </button>
              <div v-if="openIndex === index" class="px-5 py-4 border-t border-zinc-100">
                <p class="text-zinc-600 leading-relaxed text-sm sm:text-base">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <aside class="lg:col-span-4">
          <div class="bg-[#f3f3f1] border border-zinc-100 rounded-2xl p-6 sticky top-24">
            <h2 class="text-lg font-bold text-zinc-900 mb-4">Related pages</h2>
            <ul class="space-y-2">
              <li v-for="item in related" :key="item.key">
                <router-link
                  :to="`/legal/${item.key}`"
                  class="flex items-center justify-between px-4 py-3 rounded-lg bg-white border border-zinc-100 text-sm font-semibold text-zinc-700 hover:border-orange-500 hover:text-orange-600 transition-colors"
                >
                  <span>{{ item.title }}</span>
                  <ArrowUpRight :size="16" />
                </router-link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Plus, Minus, ArrowUpRight } from 'lucide-vue-next'
import MainSection from '../component/MainSection.vue'
import { legalDocuments } from '../data/legal.ts'

const route = useRoute()
const openIndex = ref(0)

const doc = computed(() => legalDocuments[route.params.doc] || legalDocuments.privacy)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

watch(
  () => route.params.doc,
  () => {
    openIndex.value = 0
  }
)

const related = computed(() =>
  Object.entries(legalDocuments).map(([key, value]) => ({ key, title: value.title }))
)
</script>
