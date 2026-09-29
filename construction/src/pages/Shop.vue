<template>
  <div class="max-w-7xl mx-auto px-4 pt-28 pb-8 bg-white font-sans text-slate-800">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <aside class="space-y-8">
        
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
            <h3 class="text-lg font-bold text-slate-900">Search Here</h3>
          </div>
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search ..."
              class="w-full pl-4 pr-10 py-2.5 text-sm border border-slate-200 rounded focus:outline-none focus:border-orange-500 text-slate-600 placeholder-slate-400"
            />
            <button 
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-8 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ✕
            </button>
            <button class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-600">
              <Search :size="16" />
            </button>
          </div>
        </div>

        <div class="bg-slate-50/50 p-6 rounded border border-slate-100">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
              <h3 class="text-lg font-bold text-slate-900">Categories</h3>
            </div>
            <button 
              v-if="selectedCategory" 
              @click="selectedCategory = null"
              class="text-xs text-orange-600 hover:underline font-medium"
            >
              Clear
            </button>
          </div>
          <ul class="space-y-2">
            <li v-for="category in categories" :key="category.name">
              <button
                type="button"
                @click="toggleCategory(category.name)"
                class="w-full flex items-center justify-between px-4 py-2.5 rounded text-xs font-semibold transition-colors text-left"
                :class="selectedCategory === category.name 
                  ? 'bg-orange-600 text-white border border-orange-600' 
                  : 'bg-white border border-slate-200/80 text-slate-700 hover:border-orange-500 hover:text-orange-600'"
              >
                <span>{{ category.name }}</span>
                <span :class="selectedCategory === category.name ? 'text-white/80' : 'text-slate-500'">
                  ({{ category.count }})
                </span>
              </button>
            </li>
          </ul>
        </div>

        <div class="bg-slate-50/50 p-6 rounded border border-slate-100">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
              <h3 class="text-lg font-bold text-slate-900">Tags</h3>
            </div>
            <button 
              v-if="selectedTag" 
              @click="selectedTag = null"
              class="text-xs text-orange-600 hover:underline font-medium"
            >
              Clear
            </button>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tag in tags"
              :key="tag"
              type="button"
              @click="toggleTag(tag)"
              class="px-3 py-1.5 rounded text-[11px] font-medium transition-colors"
              :class="selectedTag === tag 
                ? 'bg-orange-600 text-white border border-orange-600' 
                : 'bg-white border border-slate-200/80 text-slate-600 hover:border-orange-500 hover:text-orange-600'"
            >
              {{ tag }}
            </button>
          </div>
        </div>

      </aside>

      <main class="lg:col-span-3">
        <div v-if="selectedCategory || selectedTag || searchQuery" class="mb-6 flex flex-wrap items-center gap-2 bg-slate-50 p-3 rounded border border-slate-100 text-xs">
          <span class="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Active Filters:</span>
          
          <span v-if="selectedCategory" class="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">
            Category: {{ selectedCategory }}
            <button @click="selectedCategory = null" class="hover:text-orange-900 font-bold ml-1">✕</button>
          </span>

          <span v-if="selectedTag" class="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">
            Tag: {{ selectedTag }}
            <button @click="selectedTag = null" class="hover:text-orange-900 font-bold ml-1">✕</button>
          </span>

          <span v-if="searchQuery" class="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">
            Search: "{{ searchQuery }}"
            <button @click="searchQuery = ''" class="hover:text-orange-900 font-bold ml-1">✕</button>
          </span>

          <button @click="resetAllFilters" class="ml-auto text-slate-500 hover:text-orange-600 underline font-medium">
            Reset All
          </button>
        </div>

        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="group text-center flex flex-col items-center"
          >
            <div class="w-full bg-slate-50/80 rounded border border-slate-100/60 p-6 mb-4 flex items-center justify-center min-h-[220px]">
              <router-link :to="`/shop/${product.slug}`" class="block">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="max-h-40 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                />
              </router-link>
            </div>

            <div class="flex justify-center items-center gap-1 mb-2">
              <Star
                v-for="star in 5"
                :key="star"
                :size="14"
                :class="star <= product.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'"
              />
            </div>

            <router-link :to="`/shop/${product.slug}`" class="block mb-1">
              <h4 class="text-base font-bold text-slate-900 hover:text-orange-600 transition-colors">
                {{ product.name }}
              </h4>
            </router-link>

            <div class="flex items-center justify-center gap-2 text-sm">
              <span v-if="product.originalPrice" class="text-slate-400 line-through font-medium">
                ${{ product.originalPrice.toFixed(2) }}
              </span>
              <span class="text-orange-600 font-bold">
                ${{ product.price.toFixed(2) }}
              </span>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-16 bg-slate-50 rounded-lg border border-slate-100">
          <p class="text-slate-500 font-medium">No products match your selected criteria.</p>
          <button 
            @click="resetAllFilters"
            class="mt-4 px-4 py-2 bg-orange-600 text-white rounded text-sm font-semibold hover:bg-orange-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </main>

    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search, Star } from 'lucide-vue-next'
import products from '../data/product.ts'

const route = useRoute()
const router = useRouter()

const searchQuery = ref(route.query.search || '')
const selectedCategory = ref(route.query.category || null)
const selectedTag = ref(route.query.tag || null)

watch(
  () => route.query,
  (newQuery) => {
    selectedCategory.value = newQuery.category || null
    selectedTag.value = newQuery.tag || null
    searchQuery.value = newQuery.search || ''
  }
)

const updateUrl = () => {
  const query = {}
  if (selectedCategory.value) query.category = selectedCategory.value
  if (selectedTag.value) query.tag = selectedTag.value
  if (searchQuery.value) query.search = searchQuery.value

  router.push({ query })
}

watch(searchQuery, () => {
  updateUrl()
})

const tags = ref([
  'Architecture', 'Building', 'Home', 
  'Factory', 'Construction', 'Business', 
  'Design', 'Industry'
])

const categories = computed(() => {
  const catMap = {
    'Construction': 0,
    'Architecture': 0,
    'Business': 0,
    'Engineering': 0,
    'Building': 0
  }

  products.forEach((p) => {
    if (catMap[p.category] !== undefined) {
      catMap[p.category]++
    }
  })

  return Object.keys(catMap).map((key) => ({
    name: key,
    count: catMap[key]
  }))
})

const toggleCategory = (categoryName) => {
  if (selectedCategory.value === categoryName) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = categoryName
  }
  updateUrl()
}

const toggleTag = (tagName) => {
  if (selectedTag.value === tagName) {
    selectedTag.value = null
  } else {
    selectedTag.value = tagName
  }
  updateUrl()
}

const resetAllFilters = () => {
  selectedCategory.value = null
  selectedTag.value = null
  searchQuery.value = ''
  
  router.push({ query: {} })
}

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesSearch = !searchQuery.value || 
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory = !selectedCategory.value || 
      product.category === selectedCategory.value

    const matchesTag = !selectedTag.value || 
      product.tags.includes(selectedTag.value)

    return matchesSearch && matchesCategory && matchesTag
  })
})
</script>
