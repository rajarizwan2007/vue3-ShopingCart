app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

        <!-- solution -->
        <button 
        class="button" 
        :class="{ disabledButton: !inStock }" 
        :disabled="!inStock" 
        @click="removeFromCart">
        Remove Item
      </button>
      <!-- solution -->

      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'My Brand',
        selectedVariant: 0,
        details: ['30% cotton', '40% wool', '30% polyester'],
        variants: [
          { id: 100, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10 },
          { id: 200, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 1 },
        ],
        reviews: []
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      // Communicating Events
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
      },
      // Communicating Events
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
      title() {
          return this.brand + ' - ' + this.product
      },
      image() {
          /* one way binding */
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 3.99
      }
  }
})