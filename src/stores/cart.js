import { defineStore } from "pinia";

export const useCartStore=defineStore('cart',{
    state: ()=> ({
        items:[]
    }),
    getters:{
        cartcount: (state) => state.items.length,
        cartprice:(state)=> state.items.reduce((acc, item) => acc + item.price, 0).toFixed(2)
    },
    actions:{
        addToCart(product){
            this.items.push(product)
        },
        removefromcart(index){
            this.items.splice(index,1)
        },

        clearcart(){
            this.items=[]

        }
    }

})

