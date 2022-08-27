<template>
    <div class="products">
        <form class="searchbar">
            <input placeholder="Пошук" v-model="search">
            <input type="submit"  class="btn">
           <router-link :to="'/cart'"><button class="btn">Cart</button></router-link>
        </form>
        <div class="product" v-for="(item) in filteredItems" v-bind:key="item.id">
            <div class="product-image">
                <img v-bind:src="item.src">
            </div>
            <div>
                <h4 class="product-title">
                    <router-link v-bind:to="'/product/' + item.id">
                        {{ item.title }}
                    </router-link>
                </h4>
                <label>{{item.price}}</label>
                <button @click="addToCart(item)" class="btn">Add to cart</button>  
            </div>
        </div>
    </div>
</template>
<script>
    import products from '../data/products.js'
    import Vue from 'vue'


    export default {
        data: function () {
            return {
                items: [],
                search: '',
                searchResult: []
            };
        },
        mounted: function(){
              console.log(products);
            this.items = products;
        },
        // mounted: function() {
        //     Vue.axios.get("http://localhost:3000/users").then((response) => {
        //         console.log(response.data)
        //         this.items = response.data;
        //     })
        // },
        computed: {
            filteredItems: function() {
                console.log(this);
                if (!this.search) {
                    return this.items;
                }
                return this.items.filter(element => {
                    return element.item.toUpperCase().includes(this.search.toUpperCase());
                });
            },
        },
        methods:{
            addToCart(item){
                    this.$store.commit('addToCart',item)
                }
        }
    }
</script>
