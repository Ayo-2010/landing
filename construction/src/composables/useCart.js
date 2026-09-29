import { ref, computed } from 'vue'

const cartItems = ref([])

export const FREE_SHIPPING_THRESHOLD = 100
export const FLAT_SHIPPING_RATE = 15
export const TAX_RATE = 0.08

const loadCart = () => {
  const stored = localStorage.getItem('cart1')
  if (stored) {
    try {
      cartItems.value = JSON.parse(stored)
    } catch {
      cartItems.value = []
    }
  }
}

const saveCart = () => {
  localStorage.setItem('cart1', JSON.stringify(cartItems.value))
}

loadCart()

export function useCart() {
  const addToCart = (product, quantity = 1) => {
    const existingIndex = cartItems.value.findIndex(item => item.id === product.id)
    
    if (existingIndex >= 0) {
      cartItems.value[existingIndex].quantity += quantity
    } else {
      cartItems.value.push({
        id: product.id,
        slug: product.slug,
        sku: product.sku,
        name: product.name,
        category: product.category,
        image: product.image,
        price: product.price,
        originalPrice: product.originalPrice,
        quantity
      })
    }
    saveCart()
  }

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
    saveCart()
  }

  const updateQuantity = (productId, quantity) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
        saveCart()
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
    saveCart()
  }

  const itemCount = computed(() => 
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const subtotal = computed(() => 
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  const shipping = computed(() => {
    if (cartItems.value.length === 0) return 0
    return subtotal.value >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING_RATE
  })

  const tax = computed(() => subtotal.value * TAX_RATE)

  const total = computed(() => subtotal.value + shipping.value + tax.value)

  return {
    cartItems,
    itemCount,
    subtotal,
    shipping,
    tax,
    total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}