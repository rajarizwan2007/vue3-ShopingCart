/*
* Vue Code written for simple Shoping Cart Tutorial
* 
*/
const app = Vue.createApp({
    data: function() {
        return {
            cart: 0,
            product: 'Socks',
            selectedVarient: 0,
            details: ['50% Cotton', '30% Polyester', '20% Wool'],
            varients: [ {  id: 1, color: "Blue", image:  "./assets/images/socks_blue.jpg", quantity: 20, onSale: false, brand:"Outfitters" }, 
                        {  id: 2, color: "Green", image:  "./assets/images/socks_green.jpg", quantity: 0, onSale:true, brand: "BreakOut" }
                      ]
        }
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
    }
})
