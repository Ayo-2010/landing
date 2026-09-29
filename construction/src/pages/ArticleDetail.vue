<template>
  <div class="bg-white">
    <MainSection title="News" />

    <div v-if="post" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-zinc-800">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <article class="lg:col-span-8">
          <div class="flex flex-wrap items-center gap-3 text-xs text-zinc-500 mb-4">
            <span class="px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold">
              {{ post.category }}
            </span>
            <span>{{ post.readTime }}</span>
            <span>·</span>
            <span>{{ post.day }} {{ post.month }} {{ post.year }}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            {{ post.title }}
          </h1>

          <p class="text-base sm:text-lg text-zinc-600 leading-relaxed mt-5">{{ post.excerpt }}</p>

          <div class="flex items-center gap-3 mt-6 pb-6 border-b border-zinc-100">
            <div class="w-11 h-11 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center">
              {{ post.author.charAt(0) }}
            </div>
            <div>
              <p class="font-bold text-zinc-900 text-sm">{{ post.author }}</p>
              <p class="text-xs text-zinc-500">{{ post.authorRole }}</p>
            </div>
          </div>

          <div class="mt-8 rounded-2xl overflow-hidden bg-zinc-100">
            <img :src="post.image" :alt="post.title" class="w-full h-64 sm:h-96 object-cover" />
          </div>

          <div class="mt-8 space-y-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
            <p v-for="(paragraph, index) in post.content" :key="index">{{ paragraph }}</p>
          </div>

          <div class="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-zinc-100">
            <span class="text-xs font-bold uppercase tracking-widest text-zinc-500 mr-2">Tags</span>
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold"
            >
              {{ tag }}
            </span>
          </div>
        </article>

        <aside class="lg:col-span-4 space-y-6">
          <div class="bg-[#f3f3f1] border border-zinc-100 rounded-2xl p-6">
            <h2 class="text-lg font-bold text-zinc-900 mb-4">More articles</h2>
            <ul class="space-y-4">
              <li v-for="item in otherPosts" :key="item.id" class="flex gap-3">
                <router-link :to="item.link" class="w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
                </router-link>
                <div>
                  <router-link :to="item.link" class="block">
                    <h3 class="text-sm font-bold text-zinc-900 leading-snug hover:text-orange-600 transition-colors">
                      {{ item.title }}
                    </h3>
                  </router-link>
                  <span class="text-xs text-zinc-500">{{ item.day }} {{ item.month }} {{ item.year }}</span>
                </div>
              </li>
            </ul>
          </div>

          <router-link
            to="/contact"
            class="block bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-widest text-xs py-4 px-6 rounded-xl text-center transition-colors"
          >
            Talk to an Engineer
          </router-link>
        </aside>
      </div>
    </div>

    <div v-else class="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 class="text-3xl font-bold text-zinc-900 mb-4">Article not found</h1>
      <p class="text-zinc-600 mb-8">This article may have been moved or removed.</p>
      <router-link
        to="/news"
        class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
      >
        Back to News
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainSection from '../component/MainSection.vue'
import posts from '../data/posts.ts'

const route = useRoute()

const post = computed(() => posts.value.find(item => item.slug === route.params.news))
const otherPosts = computed(() => posts.value.filter(item => item.slug !== route.params.news))
</script>
