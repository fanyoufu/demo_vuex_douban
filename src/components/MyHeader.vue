<template>
     <div class="my-header">
        <span>{{title}}</span>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        computed:{
            ...mapState(['title'])
        }
    }
</script>

<style lang="" scoped>
    
</style>