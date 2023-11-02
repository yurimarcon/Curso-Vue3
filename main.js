const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {

    const cart = ref(0);
    const addToCart = () =>{
        cart.value += 1
    }

    const image = ref("./assets/images/t-shirt-blue.png");
    const changeImage = (variantImage) =>{
        image.value = variantImage
    }

    const product_title = 'T-Shirt';
    const brand = "Marconyu";
    const titleWithBrand = computed(()=>{
        return product_title + " " + brand;
    });

    const inStock = 15;
    const inStockComputed = computed(()=>{
        if(inStock > 10)
            return "In Stock"
        else if(inStock <= 10 && inStock > 0 )
            return "Almost of Stock"
        else
            return "Out of Stock"
    })
    
    return {
        image,
        details: ['50% Cotton', '30% polyester', '20% wool'],
        variants: [
        {id:1, color:'blue', image: "./assets/images/t-shirt-blue.png"},
        {id:2, color:'green', image: "./assets/images/t-shirt-green.png"}
    ],
        cart,
        addToCart,
        changeImage,
        titleWithBrand,
        inStockComputed
    }
    }
})