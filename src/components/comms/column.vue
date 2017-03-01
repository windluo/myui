<template>

</template>
<script>
    import Vue from 'vue';
    var util = Vue.util;
    function parseText(str){
        if(str.startsWith("{") || str.startsWith("[")){
            str = str.replace(/'/g, "\"");
            str = str.replace(/(\s?\{\s?)(\S)/g, "$1"+"\""+"$2");
            str = str.replace(/(\s?,\s?)(\S)/g, "$1"+"\""+"$2");
            str = str.replace(/(\S\s?):(\s?\S)/g, "$1"+"\":"+"$2");
            str = str.replace(/,"\{/g, ",{");
            str = str.replace(/""/g, "\"");
            str = str.replace(/\s/g, "");
            try{
                str = JSON.parse(str)
            }catch(e){
            }
        }
        return str;
    }
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
            filter: [String, Array],
            width: String,
            action: [String, Array, Object]
        },
        data: function () {
            return {}
        },
        ready: function () {
            //把{key:1}变成object
            var filter = this.filter;
            if(filter && !util.isObject(filter)){
                this.filter = parseText(filter);
            }
            var action = this.action;
            if(action && !util.isObject(action)){
                this.action = parseText(action);
                if(util.isObject(this.action)){
                    this.action = [this.action];
                }
            }
        }
    }
</script>
<style>
</style>