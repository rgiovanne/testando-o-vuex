<template>
    <div>
        <h1>Contador: {{numero}}</h1>
        <button @click="Subtrair">Subtrair 1</button>
        <button @click="Somar">Somar 1</button>
    </div>
</template>

<script>

import {mapMutations} from 'vuex'
export default {    
    
    computed:{
        
        numero(){
            return this.$store.state.numero
        },

        
    },

    methods:{
        ...mapMutations(['Somar', 'Subtrair']),
    }


}
</script>

<style>

</style>
