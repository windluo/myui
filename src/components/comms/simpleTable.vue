<template>
    <div>
        <table>
            <thead>
            <tr>
                <th v-for="item in rule"
                    class="col_{{$index+1}}"
                    :style="getStyle(item)">
                    {{item.name}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(rowIndex, trData) in data | table rule" class="row_{{rowIndex+1}}">
                <td v-for="(colIndex, tdData) in trData"
                    track-by="$index"
                    :style="getStyle(rule[colIndex])"
                    class="col_{{colIndex+1}}">
                    {{render(tdData, rule[colIndex])}}
                    <template v-if="tdData === null && rule[colIndex].action">
                        <span v-for="actionItem in rule[colIndex].action" @click.stop="fireAction(actionItem, data[rowIndex], $event)">
                            {{actionItem.text}}
                        </span>
                    </template>
                </td>
            </tr>
            </tbody>
        </table>
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    var util = Vue.util;
    export default {
        props: ['data'],
        data: function () {
            return {
                rule: []
            }
        },
        filters: {
            table: function (data, rule) {
                var arr = data.slice(0);
                var _arr = [];
                arr.forEach(function (trDate) {
                    var __arr = [];
                    for (var i = 0; i < rule.length; i++) {
                        __arr.push(trDate[rule[i].dataKey] || null)
                    }
                    _arr.push(__arr);
                });
                return _arr
            }
        },
        ready: function () {
            var _this = this;
            console.log(this.$children);
            this.$children.forEach(function (child) {
                //把column的配置整合到rule中
                var obj = {};
                console.log(child);
                for(var p in child._props){
                    obj[p] = child[p]
                }
                _this.rule.push(obj)
            })
            console.log(this.rule);
        },
        methods: {
            //渲染列 可以根据类型渲染不同的样式，比如说渲染普通文本，渲染数字，渲染过滤后的文本，可以自定义渲染的td
            render: function (tdData, rule) {
                //如果filter存在
                if(rule.filter){
                    var filter = rule.filter;
                    if(typeof filter == "string"){
                        tdData = (this[filter] && this[filter](tdData)) || tdData;
                    }else if(util.isArray(filter)){
                        var theOne = filter.filter(function (o) {
                            return o.key == tdData;
                        });
                        if(theOne.length > 0){
                            tdData = theOne[0].value
                        }
                    }
                }
                return tdData
            },
            //设置样式
            getStyle: function (col) {
                return {
                    "text-align" : col.align,
                    "width" : col.width
                }
            },
            //触发action动作
            fireAction: function (action, rowData, event) {
                if(typeof action.func == "string"){
                    this.$parent[action.func].call(this.$parent, rowData)
                }
                if(typeof action.func == "function"){
                    action.func(rowData)
                }
            },
            //其实是一个过滤器
            status: function (value) {
                var arr = {
                    "1" : "有效",
                    "2" : "无效"
                };
                return arr[value]
            }
        }
    }
</script>
<style scoped>
    table {
        width: 100%;
        max-width: 100%;
        border: 1px solid #d7d7d7;
        border-spacing: 0;
        border-collapse: collapse;
    }
    tr{
        border-bottom: 1px solid #e4e4e4;
    }
    td, th{
        padding: 10px 20px;
    }
    th{
        background-color: #e8e8e8;
    }
</style>