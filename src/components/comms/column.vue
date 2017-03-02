<template>
    
</template>
<script>
    export default {
        props: {
            dataKey: {
                type: String
            },

            name: {
                type: String,
                required: true
            },

            align: {
                type: String,
                default: 'center'
            },
            
            width: String,

            style: String
        },

        data: function () {
            return {}
        },

        ready: function () {
            
        }
    }
</script>
<style>
</style>