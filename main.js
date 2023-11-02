const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {

    const cart = ref(0);
    const addToCart = () =>{
        cart.value += 1
    }
    
    return {
        cart,
        addToCart
    }
    }
})