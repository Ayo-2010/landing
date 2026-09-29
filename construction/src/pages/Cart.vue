<template>
  <div class="max-w-7xl mx-auto px-4 py-8 bg-white font-sans text-slate-800">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <router-link to="/" class="hover:text-orange-600 font-medium transition-colors">Home</router-link>
      <span>/</span>
      <router-link to="/shop" class="hover:text-orange-600 font-medium transition-colors">Shop</router-link>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Shopping Cart</span>
    </nav>

    <main>
      <!-- Empty Cart State -->
      <div v-if="cartItems.length === 0" class="text-center py-20 bg-slate-50 rounded-xl border border-slate-100">
        <ShoppingCart class="mx-auto mb-4 text-slate-300" :size="64" />
        <h2 class="text-2xl font-bold text-slate-800 mb-2">Your Cart is Empty</h2>
        <p class="text-slate-500 mb-8 max-w-md mx-auto">
          Looks like you haven't added any products to your cart yet.
        </p>
        <router-link 
          to="/shop" 
          class="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-orange-700 transition-colors shadow-sm"
        >
          Continue Shopping
        </router-link>
      </div>

      <!-- Cart with Items -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">
          
          <div 
            v-for="item in cartItems" 
            :key="item.id"
            class="bg-white border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row gap-4"
          >
            <!-- Product Image -->
            <div class="w-full sm:w-24 flex-shrink-0 bg-slate-50 rounded-lg p-3 flex items-center justify-center">
              <router-link :to="`/shop/${item.slug}`" class="block">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="max-h-20 object-contain mx-auto"
                />
              </router-link>
            </div>

            <!-- Product Info -->
            <div class="flex-1 min-w-0">
              <router-link :to="`/shop/${item.slug}`" class="block">
                <h3 class="font-bold text-slate-900 hover:text-orange-600 transition-colors mb-1">
                  {{ item.name }}
                </h3>
              </router-link>
              <p class="text-xs text-slate-500 mb-2">{{ item.sku }}</p>
              
              <div class="flex items-center gap-3">
                <span v-if="item.originalPrice" class="text-sm text-slate-400 line-through">
                  ${{ item.originalPrice.toFixed(2) }}
                </span>
                <span class="text-lg font-bold text-orange-600">
                  ${{ item.price.toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- Quantity & Remove -->
            <div class="flex items-center justify-between sm:flex-col sm:items-end gap-2 w-full sm:w-auto">
              <!-- Quantity Selector -->
              <div class="flex items-center border border-slate-200 rounded-lg bg-white">
                <button
                  @click="updateQuantity(item.id, item.quantity - 1)"
                  :disabled="item.quantity <= 1"
                  class="px-3 py-2 text-slate-600 hover:bg-slate-100 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg"
                  type="button"
                >
                  -
                </button>
                <input
                  v-model.number="item.quantity"
                  @change="updateQuantity(item.id, item.quantity)"
                  type="number"
                  min="1"
                  max="99"
                  class="w-14 text-center text-sm font-semibold border-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  @click="updateQuantity(item.id, item.quantity + 1)"
                  class="px-3 py-2 text-slate-600 hover:bg-slate-100 transition-colors font-bold rounded-r-lg"
                  type="button"
                >
                  +
                </button>
              </div>

              <!-- Line Total -->
              <div class="text-right sm:w-auto">
                <p class="font-bold text-slate-900">
                  ${{ (item.price * item.quantity).toFixed(2) }}
                </p>
                <button
                  @click="removeFromCart(item.id)"
                  class="text-xs text-slate-400 hover:text-red-600 transition-colors mt-1"
                  type="button"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <!-- Cart Actions -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-slate-200">
            <button
              @click="clearCart"
              class="text-sm text-slate-500 hover:text-red-600 font-medium transition-colors"
              type="button"
            >
              Clear Cart
            </button>
            <router-link
              to="/shop"
              class="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              <ArrowLeft :size="18" />
              Continue Shopping
            </router-link>
          </div>
        </div>

        <!-- Order Summary -->
        <aside class="lg:col-span-1">
          <div class="bg-slate-50/50 border border-slate-100 rounded-xl p-6 sticky top-24">
            <h2 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ShoppingCart class="text-orange-600" :size="22" />
              Order Summary
            </h2>

            <div class="space-y-3 mb-6">
              <div class="flex justify-between text-sm">
                <span class="text-slate-600">Subtotal</span>
                <span class="font-semibold text-slate-900">${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-600">Shipping</span>
                <span class="font-semibold text-slate-900">
                  {{ shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}` }}
                </span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-600">Tax (Estimated)</span>
                <span class="font-semibold text-slate-900">${{ tax.toFixed(2) }}</span>
              </div>
            </div>

            <div class="border-t border-slate-200 pt-4 mb-6">
              <div class="flex justify-between text-lg font-bold">
                <span class="text-slate-900">Total</span>
                <span class="text-orange-600">${{ total.toFixed(2) }}</span>
              </div>
              <p class="text-xs text-slate-500 mt-2 text-center">
                Shipping and tax calculated at checkout.
              </p>
            </div>

            <router-link
              to="/checkout"
              class="block w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors shadow-sm"
            >
              Proceed to Checkout
            </router-link>

            <p class="text-center text-xs text-slate-500 mt-4">
              Secure checkout powered by Stripe
            </p>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart'
import { ShoppingCart, ArrowLeft } from 'lucide-vue-next'

const { cartItems, subtotal, shipping, tax, total, updateQuantity, removeFromCart, clearCart } = useCart()
</script>