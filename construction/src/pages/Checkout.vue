<template>
  <div class="max-w-7xl mx-auto px-4 py-8 bg-white font-sans text-slate-800">

    <!-- Breadcrumb -->
    <nav class="mb-6 text-xs text-slate-500 flex items-center gap-2">
      <router-link to="/" class="hover:text-orange-600 font-medium transition-colors">Home</router-link>
      <span>/</span>
      <router-link to="/shop" class="hover:text-orange-600 font-medium transition-colors">Shop</router-link>
      <span>/</span>
      <router-link to="/cart" class="hover:text-orange-600 font-medium transition-colors">Cart</router-link>
      <span>/</span>
      <span class="text-slate-800 font-semibold">Checkout</span>
    </nav>

    <!-- Order Confirmation -->
    <div v-if="orderNumber" class="max-w-2xl mx-auto text-center py-16">
      <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
        <CheckCircle2 class="text-orange-600" :size="40" />
      </div>
      <h1 class="text-3xl font-bold text-slate-900 mb-3">Order Placed Successfully</h1>
      <p class="text-slate-500 mb-8">
        Thank you, {{ form.firstName }}. A confirmation has been sent to {{ form.email }}.
      </p>

      <div class="bg-slate-50/50 border border-slate-100 rounded-xl p-6 text-left space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-slate-500">Order Number</span>
          <span class="font-semibold text-slate-900">{{ orderNumber }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-slate-500">Payment Method</span>
          <span class="font-semibold text-slate-900 capitalize">{{ form.paymentMethod }} ending {{ form.cardNumber.slice(-4) || '••••' }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-slate-500">Total Paid</span>
          <span class="font-semibold text-orange-600">${{ paidTotal.toFixed(2) }}</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center gap-3 mt-8">
        <router-link
          to="/shop"
          class="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Continue Shopping
        </router-link>
        <router-link
          to="/work"
          class="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          View Our Work
        </router-link>
      </div>
    </div>

    <!-- Empty Cart Redirect -->
    <div v-else-if="cartItems.length === 0" class="text-center py-20 bg-slate-50 rounded-xl border border-slate-100">
      <ShoppingCart class="mx-auto mb-4 text-slate-300" :size="64" />
      <h2 class="text-2xl font-bold text-slate-800 mb-2">Nothing to Check Out</h2>
      <p class="text-slate-500 mb-8 max-w-md mx-auto">
        Your cart is empty. Add some equipment before heading to checkout.
      </p>
      <router-link
        to="/shop"
        class="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-orange-700 transition-colors shadow-sm"
      >
        Browse Shop
      </router-link>
    </div>

    <!-- Checkout Form -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- Forms -->
      <div class="lg:col-span-2 space-y-6">

        <!-- Step Indicator -->
        <div class="flex items-center gap-2 sm:gap-4 text-xs font-semibold">
          <template v-for="(step, index) in steps" :key="step">
            <div class="flex items-center gap-2">
              <span
                class="w-7 h-7 rounded-full flex items-center justify-center border transition-colors"
                :class="activeStep > index
                  ? 'bg-orange-600 border-orange-600 text-white'
                  : activeStep === index
                    ? 'bg-orange-50 border-orange-500 text-orange-700'
                    : 'bg-white border-slate-200 text-slate-400'"
              >
                <Check v-if="activeStep > index" :size="14" />
                <span v-else>{{ index + 1 }}</span>
              </span>
              <span :class="activeStep >= index ? 'text-slate-800' : 'text-slate-400'">{{ step }}</span>
            </div>
            <span v-if="index < steps.length - 1" class="hidden sm:block flex-1 h-px bg-slate-200"></span>
          </template>
        </div>

        <!-- Contact Information -->
        <section class="border border-slate-100 rounded-xl p-6">
          <div class="flex items-center gap-2 mb-5">
            <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
            <h2 class="text-lg font-bold text-slate-900">Contact Information</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">First Name</label>
              <input v-model.trim="form.firstName" type="text" placeholder="John"
                :class="inputClass" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label>
              <input v-model.trim="form.lastName" type="text" placeholder="Doe"
                :class="inputClass" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Email Address</label>
              <input v-model.trim="form.email" type="email" placeholder="you@company.com"
                :class="inputClass" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number</label>
              <input v-model.trim="form.phone" type="tel" placeholder="+1 (555) 000-0000"
                :class="inputClass" />
            </div>
          </div>
          <p v-if="errors.contact" class="mt-3 text-xs text-red-600">{{ errors.contact }}</p>
        </section>

        <!-- Shipping Address -->
        <section class="border border-slate-100 rounded-xl p-6">
          <div class="flex items-center justify-between mb-5">
            <div class="flex items-center gap-2">
              <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
              <h2 class="text-lg font-bold text-slate-900">Shipping Address</h2>
            </div>
            <label class="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer">
              <input v-model="form.saveAddress" type="checkbox"
                class="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
              Save address
            </label>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Company / Site</label>
              <input v-model.trim="form.company" type="text" placeholder="Optional"
                 :class="inputClass" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Country</label>
              <select v-model="form.country"
                :class="inputClass">
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Street Address</label>
              <input v-model.trim="form.address" type="text" placeholder="1280 Construction Ave"
                :class="inputClass" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">City</label>
              <input v-model.trim="form.city" type="text" placeholder="Los Angeles"
                :class="inputClass" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Postal Code</label>
              <input v-model.trim="form.postalCode" type="text" placeholder="90001"
                :class="inputClass" />
            </div>
          </div>
          <p v-if="errors.shipping" class="mt-3 text-xs text-red-600">{{ errors.shipping }}</p>
        </section>

        <!-- Delivery Method -->
        <section class="border border-slate-100 rounded-xl p-6">
          <div class="flex items-center gap-2 mb-5">
            <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
            <h2 class="text-lg font-bold text-slate-900">Delivery Method</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              v-for="option in deliveryOptions"
              :key="option.value"
              class="flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors"
              :class="form.deliveryMethod === option.value
                ? 'border-orange-500 bg-orange-50/50'
                : 'border-slate-200 hover:border-orange-300'"
            >
              <input v-model="form.deliveryMethod" type="radio" :value="option.value"
                class="mt-1 w-4 h-4 border-slate-300 text-orange-600 focus:ring-orange-500" />
              <span class="flex-1">
                <span class="block text-sm font-semibold text-slate-900">{{ option.label }}</span>
                <span class="block text-xs text-slate-500 mt-0.5">{{ option.hint }}</span>
              </span>
              <span class="text-sm font-bold text-orange-600">{{ option.priceLabel }}</span>
            </label>
          </div>
        </section>

        <!-- Payment -->
        <section class="border border-slate-100 rounded-xl p-6">
          <div class="flex items-center gap-2 mb-5">
            <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
            <h2 class="text-lg font-bold text-slate-900">Payment</h2>
          </div>

          <div class="flex gap-2 mb-5">
            <button
              v-for="method in paymentMethods"
              :key="method"
              type="button"
              @click="form.paymentMethod = method"
              class="px-4 py-2 text-xs font-semibold rounded-lg border transition-colors"
              :class="form.paymentMethod === method
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-slate-200 text-slate-600 hover:border-orange-300'"
            >
              {{ method }}
            </button>
          </div>

          <div v-if="form.paymentMethod !== 'PayPal'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Card Number</label>
              <input :value="form.cardNumber" @input="formatCardNumber" type="text" inputmode="numeric" placeholder="4242 4242 4242 4242"
                :class="inputClass" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Expiry Date</label>
              <input :value="form.expiry" @input="formatExpiry" type="text" inputmode="numeric" placeholder="MM / YY"
                :class="inputClass" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">CVV</label>
              <input v-model="form.cvv" type="text" inputmode="numeric" placeholder="123"
                :class="inputClass" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Name on Card</label>
              <input v-model.trim="form.cardName" type="text" placeholder="John Doe"
                :class="inputClass" />
            </div>
          </div>

          <p class="text-xs text-slate-400 mt-4 flex items-center gap-1.5">
            <Lock class="w-3.5 h-3.5" />
            Payments are encrypted and processed securely. We never store card details.
          </p>
          <p v-if="errors.payment" class="mt-3 text-xs text-red-600">{{ errors.payment }}</p>
        </section>
      </div>

      <!-- Order Summary -->
      <aside class="lg:col-span-1">
        <div class="bg-slate-50/50 border border-slate-100 rounded-xl p-6 sticky top-24">
          <h2 class="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
            <ShoppingCart class="text-orange-600" :size="22" />
            Order Summary
          </h2>

          <ul class="space-y-3 mb-5 max-h-64 overflow-y-auto pr-1">
            <li v-for="item in cartItems" :key="item.id" class="flex gap-3 items-center">
              <div class="w-14 h-14 flex-shrink-0 bg-white border border-slate-100 rounded-lg p-1.5 flex items-center justify-center">
                <img :src="item.image" :alt="item.name" class="max-h-full object-contain" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-slate-900 truncate">{{ item.name }}</p>
                <p class="text-xs text-slate-500">Qty {{ item.quantity }}</p>
              </div>
              <span class="text-sm font-bold text-slate-900">${{ (item.price * item.quantity).toFixed(2) }}</span>
            </li>
          </ul>

          <!-- Coupon -->
          <div class="flex gap-2 mb-5">
            <input v-model.trim="couponCode" type="text" placeholder="Coupon code"
              class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-orange-500" />
            <button
              type="button"
              @click="applyCoupon"
              class="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Apply
            </button>
          </div>
          <p v-if="couponMessage" class="mb-5 text-xs" :class="couponApplied ? 'text-emerald-600' : 'text-red-600'">
            {{ couponMessage }}
          </p>

          <div class="space-y-3 mb-5">
            <div class="flex justify-between text-sm">
              <span class="text-slate-600">Subtotal</span>
              <span class="font-semibold text-slate-900">${{ discountedSubtotal.toFixed(2) }}</span>
            </div>
            <div v-if="discount > 0" class="flex justify-between text-sm">
              <span class="text-slate-600">Discount</span>
              <span class="font-semibold text-emerald-600">-${{ discount.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-slate-600">Shipping</span>
              <span class="font-semibold text-slate-900">
                {{ deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}` }}
              </span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-slate-600">Tax</span>
              <span class="font-semibold text-slate-900">${{ discountTax.toFixed(2) }}</span>
            </div>
          </div>

          <div class="border-t border-slate-200 pt-4 mb-5">
            <div class="flex justify-between text-lg font-bold">
              <span class="text-slate-900">Total</span>
              <span class="text-orange-600">${{ grandTotal.toFixed(2) }}</span>
            </div>
          </div>

          <p v-if="errors.form" class="mb-3 text-xs text-red-600">{{ errors.form }}</p>

          <button
            type="button"
            @click="placeOrder"
            :disabled="isSubmitting"
            class="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Loader2 v-if="isSubmitting" class="animate-spin" :size="18" />
            {{ isSubmitting ? 'Processing...' : `Pay $${grandTotal.toFixed(2)}` }}
          </button>

          <router-link
            to="/cart"
            class="mt-3 w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
          >
            <ArrowLeft :size="16" />
            Back to Cart
          </router-link>

          <div class="flex items-center justify-center gap-4 mt-5 text-slate-300">
            <ShieldCheck :size="26" />
            <Lock :size="26" />
            <BadgeCheck :size="26" />
          </div>
          <p class="text-center text-xs text-slate-500 mt-3">
            Secure checkout powered by Stripe
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import {
  ShoppingCart,
  Check,
  CheckCircle2,
  ArrowLeft,
  Lock,
  ShieldCheck,
  BadgeCheck,
  Loader2
} from 'lucide-vue-next'
import { useCart, TAX_RATE } from '../composables/useCart'

const { cartItems, subtotal, shipping, clearCart } = useCart()

const steps = ['Contact', 'Shipping', 'Payment']
const activeStep = computed(() => {
  const contactDone = form.firstName && form.lastName && form.email
  const shippingDone = contactDone && form.address && form.city && form.postalCode
  return shippingDone ? 3 : contactDone ? 2 : 1
})

const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'India', 'Japan']
const paymentMethods = ['Credit Card', 'Debit Card', 'PayPal']
const coupons = { BUILD10: 0.1, CREW15: 0.15 }

const isSubmitting = ref(false)
const orderNumber = ref('')
const paidTotal = ref(0)
const couponCode = ref('')
const couponApplied = ref(false)
const couponMessage = ref('')

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  address: '',
  city: '',
  postalCode: '',
  country: 'United States',
  deliveryMethod: 'standard',
  paymentMethod: 'Credit Card',
  cardNumber: '',
  expiry: '',
  cvv: '',
  cardName: '',
  saveAddress: false
})

const errors = reactive({ contact: '', shipping: '', payment: '', form: '' })

const EXPRESS_SURCHARGE = 20

const deliveryOptions = computed(() => [
  {
    value: 'standard',
    label: 'Standard Delivery',
    hint: '5-7 business days',
    priceLabel: shipping.value === 0 ? 'Free' : `$${shipping.value.toFixed(2)}`
  },
  {
    value: 'express',
    label: 'Express Delivery',
    hint: '2-3 business days',
    priceLabel: `$${(shipping.value + EXPRESS_SURCHARGE).toFixed(2)}`
  }
])

const discountRate = computed(() => (couponApplied.value ? coupons[couponCode.value.toUpperCase()] : 0))
const discount = computed(() => subtotal.value * discountRate.value)
const discountedSubtotal = computed(() => subtotal.value - discount.value)
const discountTax = computed(() => discountedSubtotal.value * TAX_RATE)
const deliveryFee = computed(() =>
  form.deliveryMethod === 'express' ? shipping.value + EXPRESS_SURCHARGE : shipping.value
)
const grandTotal = computed(() => discountedSubtotal.value + deliveryFee.value + discountTax.value)

const applyCoupon = () => {
  const code = couponCode.value.trim().toUpperCase()
  if (!code) {
    couponApplied.value = false
    couponMessage.value = 'Enter a coupon code.'
    return
  }
  if (coupons[code] === undefined) {
    couponApplied.value = false
    couponMessage.value = `"${code}" is not a valid coupon.`
    return
  }
  couponApplied.value = true
  couponMessage.value = `Coupon ${code} applied.`
}

const inputClass = 'w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-orange-500'

const formatCardNumber = (event) => {
  form.cardNumber = event.target.value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

const formatExpiry = (event) => {
  const digits = event.target.value.replace(/\D/g, '').slice(0, 4)
  form.expiry = digits.length > 2 ? `${digits.slice(0, 2)} / ${digits.slice(2)}` : digits
}

const validate = () => {
  errors.contact = ''
  errors.shipping = ''
  errors.payment = ''

  if (!form.firstName || !form.lastName) {
    errors.contact = 'First and last name are required.'
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
    errors.contact = 'Enter a valid email address.'
  } else if (form.phone && form.phone.replace(/\D/g, '').length < 7) {
    errors.contact = 'Enter a valid phone number.'
  }

  if (!form.address || !form.city || !form.postalCode) {
    errors.shipping = 'Address, city and postal code are required.'
  }

  if (form.paymentMethod !== 'PayPal') {
    if (form.cardNumber.replace(/\D/g, '').length !== 16) {
      errors.payment = 'Enter a valid 16-digit card number.'
    } else if (!/^\d{2}\s?\/?\s?\d{2}$/.test(form.expiry)) {
      errors.payment = 'Enter the expiry date as MM / YY.'
    } else if (form.cvv.replace(/\D/g, '').length < 3) {
      errors.payment = 'Enter a valid CVV.'
    } else if (!form.cardName) {
      errors.payment = 'Enter the name printed on the card.'
    }
  }

  return !errors.contact && !errors.shipping && !errors.payment
}

const placeOrder = async () => {
  errors.form = ''
  if (!validate()) {
    errors.form = 'Please fix the highlighted fields to continue.'
    return
  }

  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1200))

  paidTotal.value = grandTotal.value
  orderNumber.value = `CN-${Date.now().toString().slice(-8)}`
  isSubmitting.value = false
  clearCart()
}
</script>
