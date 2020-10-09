app.component('product-display', {
    template: 
    /* html */ `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">InStock</p>
        <p v-else="inStock">Out of Stock</p>
        <p :premimum="premimum">{{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div v-for="(varient, index) in varients" 
          :key="varient.id" 
          @mouseover="updateVarient(index)" 
          class="color-circle" 
          :style="{ backgroundColor: varient.color }"
        ></div>
        <button 
          class="button" 
          :class="{ disabledButton: !inStock}"
          v-on:click="addToCart" 
          v-bind:disabled="!inStock"
        >Add to Cart</button>
        <button 
          class="button" 
          :class="{ disabledButton: cart < 1}"
          v-on:click="removeFromCart"
        >Remove From Cart</button>
      </div>
    </div>`,
    data: function() {
        return {
            cart: 0,
            premimum: true
        }
    },
    props: {

    },
    methods: {
        addToCart(){
            return this.cart += 1;
        },
        removeFromCart(){
            if(this.cart > 0)
                return this.cart -= 1;
        },
        updateImage(varientImage){
            return this.image = varientImage
        },
        updateVarient(index){
            return this.selectedVarient = index
            //console.log(index);
        }
    },
    computed: {
        title(){
            return this.varients[this.selectedVarient].brand + ' ' + this.product;
        },
        image(){
            return this.varients[this.selectedVarient].image;
        },
        inStock(){
            return this.varients[this.selectedVarient].quantity
        },
        shipping(){
          if(this.premimum)
          {
            return "Shipping"
          }
          return "2.99"
        }
    }
});