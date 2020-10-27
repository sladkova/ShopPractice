<template>
    <div>
        <template v-if="$store.state.cart.length > 0">
            <div v-for="item in $store.state.cart" :key="item.id">
                <div class="product-image"><img v-bind:src="item.src"></div>
                <p>{{ item.title }} x{{ item.quantity }} - ${{ item.totalPrice }}</p>
            </div>
            <p> Итого: ${{ totalPrice }} </p>
        </template>

        <template v-else >
            <h1> Корзина пуста </h1>
        </template>
    </div>
</template>

<script>
export default {

    computed:{
        totalPrice() {
            let total = 0;
            for(let item of this.$store.getters.getCart){
                total += item.totalPrice;
            }

            return total.toFixed(2);
        }
    }
}
</script>