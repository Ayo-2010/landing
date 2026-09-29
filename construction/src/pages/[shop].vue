<template>
  <div class="max-w-7xl mx-auto px-4 pt-28 pb-8 bg-white font-sans text-slate-800">
    
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <router-link to="/shop" class="hover:text-orange-600 font-medium transition-colors">Shop</router-link>
      <span>/</span>
      <span v-if="product?.category" class="hover:text-orange-600 font-medium cursor-pointer" @click="goToCategory(product.category)">
        {{ product.category }}
      </span>
      <span v-if="product?.category">/</span>
      <span class="text-slate-800 font-semibold truncate">{{ product?.name || 'Product Details' }}</span>
    </nav>

    <main v-if="product">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        
        <div class="w-full bg-slate-50 rounded border border-slate-100 p-8 flex items-center justify-center min-h-[400px]">
          <img
            :src="product.image"
            :alt="product.name"
            class="max-h-96 object-contain mx-auto transition-all duration-300"
          />
        </div>

        <div class="flex flex-col justify-center">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            {{ product.name }}
          </h1>

          <div class="flex items-center gap-2 mb-4">
            <div class="flex items-center gap-1">
              <Star
                v-for="star in 5"
                :key="star"
                :size="16"
                :class="star <= product.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'"
              />
            </div>
            <span class="text-xs text-slate-500 font-medium">(1 Customer Review)</span>
          </div>

          <div class="flex items-center gap-3 mb-6">
            <span v-if="product.originalPrice" class="text-lg text-slate-400 line-through font-medium">
              ${{ product.originalPrice.toFixed(2) }}
            </span>
            <span class="text-3xl font-bold text-orange-600">
              ${{ product.price.toFixed(2) }}
            </span>
            <span class="text-xs text-slate-400 font-normal">each</span>
          </div>

          <p class="text-slate-600 text-sm leading-relaxed mb-4">
            {{ product.shortDescription }}
          </p>

          <ul v-if="product.features" class="mb-6 space-y-1.5 text-xs text-slate-700 font-medium list-disc list-inside">
            <li v-for="(feat, idx) in product.features" :key="idx">{{ feat }}</li>
          </ul>

          <div class="flex items-center gap-4 mb-8">
            <div class="flex items-center border border-slate-200 rounded bg-white">
              <button 
                @click="decrementQuantity" 
                class="px-3.5 py-2 text-slate-600 hover:bg-slate-100 transition-colors font-bold"
                type="button"
              >
                -
              </button>
              <input
                v-model.number="quantity"
                type="number"
                min="1"
                class="w-12 text-center text-sm font-semibold border-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button 
                @click="incrementQuantity" 
                class="px-3.5 py-2 text-slate-600 hover:bg-slate-100 transition-colors font-bold"
                type="button"
              >
                +
              </button>
            </div>

            <button
              @click="addToCart(product)"
              type="button"
              class="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded transition-colors text-sm shadow-sm"
            >
              <ShoppingCart :size="18" />
              Add to Cart
            </button>
          </div>

          <div class="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-2">
            <p><span class="font-bold text-slate-700">SKU Code:</span> {{ product.sku }}</p>
            <p>
              <span class="font-bold text-slate-700">Category:</span> 
              <button 
                type="button" 
                @click="goToCategory(product.category)" 
                class="text-orange-600 hover:underline ml-1 font-medium"
              >
                {{ product.category }}
              </button>
            </p>
            <p v-if="product.tags && product.tags.length">
              <span class="font-bold text-slate-700">Tags:</span>
              <span v-for="(tag, index) in product.tags" :key="tag" class="ml-1">
                <button type="button" @click="goToTag(tag)" class="text-orange-600 hover:underline">
                  {{ tag }}</button><template v-if="index < product.tags.length - 1">,</template>
              </span>
            </p>
          </div>
        </div>

      </div>

      <div id="hikashop_product_bottom_part" class="mt-12 border-t border-slate-200 pt-8">
        <div id="hikashop_tabs_div">
          
          <ul class="flex gap-8 border-b border-slate-200 mb-6">
            <li>
              <button
                type="button"
                @click="activeTab = 'description'"
                class="pb-3 text-sm font-bold transition-colors relative"
                :class="activeTab === 'description' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-slate-500 hover:text-slate-800'"
              >
                Description
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="activeTab = 'specifications'"
                class="pb-3 text-sm font-bold transition-colors relative"
                :class="activeTab === 'specifications' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-slate-500 hover:text-slate-800'"
              >
                Specifications
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="activeTab = 'comment'"
                class="pb-3 text-sm font-bold transition-colors relative"
                :class="activeTab === 'comment' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-slate-500 hover:text-slate-800'"
              >
                Post a comment
              </button>
            </li>
          </ul>

          <div v-if="activeTab === 'description'" class="text-sm text-slate-600 space-y-4 leading-relaxed max-w-4xl">
            <p class="whitespace-pre-line">{{ product.longDescription || product.shortDescription }}</p>
          </div>

          <div v-else-if="activeTab === 'specifications'" class="text-sm text-slate-700 space-y-2 max-w-md bg-slate-50 p-6 rounded border border-slate-100">
            <div v-if="product.specifications?.weight" class="flex justify-between border-b border-slate-200/60 pb-2">
              <span class="font-bold">Weight:</span>
              <span>{{ product.specifications.weight }}</span>
            </div>
            <div v-if="product.specifications?.width" class="flex justify-between border-b border-slate-200/60 pb-2">
              <span class="font-bold">Width:</span>
              <span>{{ product.specifications.width }}</span>
            </div>
            <div v-if="product.specifications?.length" class="flex justify-between border-b border-slate-200/60 pb-2">
              <span class="font-bold">Length:</span>
              <span>{{ product.specifications.length }}</span>
            </div>
            <div v-if="product.specifications?.height" class="flex justify-between pb-1">
              <span class="font-bold">Height:</span>
              <span>{{ product.specifications.height }}</span>
            </div>
          </div>

          <div v-else-if="activeTab === 'comment'" class="max-w-xl bg-slate-50 p-6 rounded border border-slate-100">
            <form @submit.prevent="submitComment" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Your Vote:</label>
                <div class="flex items-center gap-1 cursor-pointer">
                  <Star
                    v-for="star in 5"
                    :key="star"
                    :size="20"
                    @click="userRating = star"
                    :class="star <= userRating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-300'"
                  />
                </div>
              </div>

              <div>
                <label for="pseudo_comment" class="block text-xs font-bold text-slate-700 mb-1">Username:</label>
                <input
                  id="pseudo_comment"
                  v-model="commentUser"
                  type="text"
                  required
                  placeholder="Your Name"
                  class="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label for="hikashop_vote_comment" class="block text-xs font-bold text-slate-700 mb-1">Give your advice about this item:</label>
                <textarea
                  id="hikashop_vote_comment"
                  v-model="commentText"
                  rows="4"
                  required
                  placeholder="Post a comment ..."
                  class="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                class="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded text-xs transition-colors"
              >
                Send a comment
              </button>
            </form>
          </div>

        </div>
      </div>

      <section class="mt-16 border-t border-slate-200 pt-10">
        <div class="flex items-center gap-2 mb-8">
          <span class="w-1 h-5 bg-orange-600 rounded-full inline-block"></span>
          <h2 class="text-2xl font-bold text-slate-900">Related Products</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="relProduct in relatedProducts"
            :key="relProduct.id"
            class="bg-white border border-slate-100 rounded p-4 flex flex-col justify-between hover:shadow-md transition-shadow group"
          >
            <div>
              <div class="bg-slate-50 rounded p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <router-link :to="`/shop/${relProduct.slug}`" class="block">
                  <img
                    :src="relProduct.image"
                    :alt="relProduct.name"
                    class="max-h-48 object-contain mx-auto group-hover:scale-105 transition-transform duration-200"
                  />
                </router-link>
              </div>

              <div class="flex items-center gap-2 mb-2 text-xs">
                <span v-if="relProduct.originalPrice" class="text-slate-400 line-through">
                  ${{ relProduct.originalPrice.toFixed(2) }}
                </span>
                <span class="font-bold text-orange-600">
                  ${{ relProduct.price.toFixed(2) }}
                </span>
                <span class="text-slate-400">each</span>
              </div>

              <h3 class="font-bold text-slate-800 text-sm mb-1 hover:text-orange-600 transition-colors">
                <router-link :to="`/shop/${relProduct.slug}`">
                  {{ relProduct.name }}
                </router-link>
              </h3>

              <p class="text-[11px] text-slate-400 mb-3">{{ relProduct.sku }}</p>

              <div class="flex items-center gap-0.5 mb-4">
                <Star
                  v-for="s in 5"
                  :key="s"
                  :size="12"
                  :class="s <= relProduct.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'"
                />
              </div>
            </div>

            <div class="space-y-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                @click="addToCart(relProduct)"
                class="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold py-2 rounded transition-colors"
              >
                Add to cart
              </button>
              <router-link
                :to="`/shop/${relProduct.slug}`"
                class="block text-center w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-2 rounded transition-colors"
              >
                Product details
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div v-else class="text-center py-20 bg-slate-50 rounded border border-slate-100">
      <h2 class="text-2xl font-bold text-slate-800 mb-2">Product Not Found</h2>
      <p class="text-sm text-slate-500 mb-6">The requested product slug could not be located in database.</p>
      <router-link to="/shop" class="inline-block bg-orange-600 text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-orange-700 transition-colors">
        Return to Shop
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Star, ShoppingCart } from 'lucide-vue-next'
import products from '../data/product.ts'
import { useCart } from '../composables/useCart'

const { addToCart: addToCartFn } = useCart()

const route = useRoute()
const router = useRouter()

const product = ref(null)
const quantity = ref(1)
const activeTab = ref('description')

const userRating = ref(5)
const commentUser = ref('')
const commentText = ref('')

const loadProduct = () => {
  const currentSlug = route.params.shop
  const found = products.find(p => p.slug === currentSlug)
  
  if (found) {
    product.value = found
  } else {
    product.value = products[0]
  }
  
  quantity.value = 1
  activeTab.value = 'description'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(loadProduct)
watch(() => route.params.shop, loadProduct)

const relatedProducts = computed(() => {
  if (!product.value) return []
  return products
    .filter(p => p.id !== product.value.id && p.category === product.value.category)
    .slice(0, 3)
})

const incrementQuantity = () => quantity.value++
const decrementQuantity = () => {
  if (quantity.value > 1) quantity.value--
}

const goToCategory = (categoryName) => {
  router.push({ path: '/shop', query: { category: categoryName } })
}

const goToTag = (tagName) => {
  router.push({ path: '/shop', query: { tag: tagName } })
}

const addToCart = (item) => {
  const qty = item.id === product.value?.id ? quantity.value : 1
  addToCartFn(item, qty)
  alert(`Added ${qty} x "${item.name}" to cart!`)
}

const submitComment = () => {
  alert(`Thank you ${commentUser.value}! Your comment and ${userRating.value}-star rating have been submitted.`)
  commentUser.value = ''
  commentText.value = ''
}
</script>
