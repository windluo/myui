<template>
    
</template>
<script>
    export default {
        name: 'column',

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

            style: String,

            template: {
                type: String
            }
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