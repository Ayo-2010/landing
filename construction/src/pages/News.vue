<template>
  <div class="bg-[#f3f3f1]">
    <MainSection title="News & Article" />

    <section class="py-12 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
              <span class="text-xs font-bold uppercase tracking-widest text-orange-600">Daily Update</span>
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Latest news from the jobsite
            </h1>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <input
              v-model.trim="search"
              type="search"
              placeholder="Search articles"
              class="px-4 py-2.5 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-orange-500 w-full sm:w-64"
            />
            <div class="flex flex-wrap gap-2">
              <button
                v-for="category in categories"
                :key="category"
                type="button"
                @click="selectedCategory = category"
                class="px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors"
                :class="selectedCategory === category
                  ? 'bg-orange-600 border-orange-600 text-white'
                  : 'bg-white border-zinc-200 text-zinc-600 hover:border-orange-400 hover:text-orange-600'"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>

        <div v-if="filteredPosts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in filteredPosts"
            :key="post.id"
            class="bg-white rounded-2xl border border-zinc-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <router-link :to="post.link" class="block aspect-[4/3] overflow-hidden bg-zinc-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </router-link>

            <div class="p-6 flex flex-col flex-1">
              <div class="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                <span class="px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold">
                  {{ post.category }}
                </span>
                <span>{{ post.readTime }}</span>
              </div>

              <router-link :to="post.link" class="block">
                <h2 class="text-lg font-bold text-zinc-900 leading-snug hover:text-orange-600 transition-colors">
                  {{ post.title }}
                </h2>
              </router-link>

              <p class="text-sm text-zinc-600 leading-relaxed mt-3 flex-1">{{ post.excerpt }}</p>

              <div class="flex items-center justify-between mt-5 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                <span class="font-semibold">{{ post.author }}</span>
                <span>{{ post.day }} {{ post.month }} {{ post.year }}</span>
              </div>
            </div>
          </article>
        </div>

        <div v-else class="text-center py-20 bg-white rounded-2xl border border-zinc-100">
          <p class="text-zinc-500 font-medium mb-4">No articles match your search.</p>
          <button
            type="button"
            @click="resetFilters"
            class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MainSection from '../component/MainSection.vue'
import posts from '../data/posts.ts'

const search = ref('')
const selectedCategory = ref('All')

const categories = ['All', ...new Set(posts.value.map(post => post.category))]

const filteredPosts = computed(() => {
  const term = search.value.toLowerCase()
  return posts.value.filter(post => {
    const matchesCategory = selectedCategory.value === 'All' || post.category === selectedCategory.value
    const matchesSearch = !term || post.title.toLowerCase().includes(term) || post.excerpt.toLowerCase().includes(term)
    return matchesCategory && matchesSearch
  })
})

const resetFilters = () => {
  search.value = ''
  selectedCategory.value = 'All'
}
</script>
