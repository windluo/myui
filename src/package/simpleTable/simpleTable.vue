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
                <th v-if='edit==1||del==1'>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(rowIndex, trData) in data | table rule" class="row_{{rowIndex+1}}">
                <td v-for="(colIndex, tdData) in trData"
                    :style="getStyle(rule[colIndex])"
                    track-by="$index"
                    class="col_{{colIndex+1}}">
                    {{render(tdData, rule[colIndex])}}
                </td>
                <td v-if='edit==1||del==1'>
                	<div class="btn-cont">
                		<mybutton v-if='edit==1'
                			:on-before-click='getCurcolData(data[rowIndex])'
                		>编辑
                		</mybutton>
                		<mybutton v-if='del==1'
                			:del=1
                			:on-before-click='delCurcolData(data[rowIndex], rowIndex)'
                		>删除
                		</mybutton>
                	</div>
                </td>
            </tr>
            </tbody>
        </table>
        <slot></slot>
        <div v-show='curshow'>
        	<p>日期：{{curcol.date}}</p>
        	<p>姓名：{{curcol.name}}</p>
        	<p>地址：{{curcol.address}}</p>
        </div>
    </div>
</template>

<script>
    export default {
    	name: 'simpleTable',

        props: {
        	data: {
        		type: Array,
		        default: function() {
		          	return [];
		        }
        	},

        	edit: {
                type: Number,
                default: 0
            },

            del: {
                type: Number,
                default: 0
            }
        },
        
        data() {
            return {
                rule: [],
                curshow: false,
		        curcol: {}
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

        created (){
        	// console.log(this);
        },

        beforeCompile (){
        	// console.log(this);
        },

        compiled (){
        	// console.log(this);
        },

        ready: function () {
        	var _this = this;
            this.$children.forEach(function (child) {
                if(child.$el.nodeName == '#text'){
                	var obj = {};
	                for(var p in child._props){

	                    obj[p] = child[p]
	                }

	                _this.rule.push(obj)
                }
            })
        },

        methods: {
            //渲染列 可以根据类型渲染不同的样式，比如说渲染普通文本，渲染数字，渲染过滤后的文本，可以自定义渲染的td
            render: function (tdData, rule) {
                return tdData
            },
            //设置样式
            getStyle: function (col) {
            	var style = '';
            	if(col.style){
            		style = col.style;
            	}else{
            		style = {
	                    "text-align" : col.align,
	                    "width" : col.width
	                }
            	}

                return style;
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
            },

            getCurcolData (data){
            	var _this = this;

            	return function(){
            		return new Promise( function (resolve, reject) {
	            		_this.curcol = data;
	            		_this.curshow = true;
						resolve();
					})
            	}
            },

            delCurcolData (data, index){
            	var _this = this;

            	return function(){
            		return new Promise( function (resolve, reject) {
	            		_this.data.splice(index, 1);
						resolve();
					})
            	}
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

	.btn-cont{
		text-align: center;
	}

    .btn-cont button{
    	display: inline-block;
    }
</style>