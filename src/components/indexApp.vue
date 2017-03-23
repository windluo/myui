<template>
	<div>
		<h1>button组件</h1>
		<mybutton 
			:on-before-click='onBeforeClick'
			:on-click='onClick'
			:on-after-click='onAfterClick'
		>
		传入三个函数
		</mybutton>
		<mybutton
			:on-before-click='onBeforeClick2'
		>	
		只有before
		</mybutton>
		<mybutton
			:on-click='onClick3'
		>	
		只有click
		</mybutton>
		<mybutton
			:on-after-click='onAfterClick4'
		>	
		只有after
		</mybutton>
		<mybutton
		>	
		都没有
		</mybutton>
	</div>

	<div>
		<h1>SimpleTable组件</h1>
		<simple-table :data="tableData" :edit='1' :del='1'>
		    <column data-key="date" name="日期" width="120px"></column>
		    <column data-key="name" name="姓名"></column>
		    <column data-key="address" name="地址"></column>
		</simple-table>
	</div>

	<div>
		<h1>SelectBox组件</h1>
		<select-box :options="selectData"></select-box>
	</div>

	<mybutton :on-click='showToast'>看Toast</mybutton>
</template>

<script>
	import Toast from '../package/Toast/Toast'
	export default{
		data (){
			return {
				tableData: [{
		            date: '2016-05-02',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		            date: '2016-05-04',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		            date: '2016-05-01',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		            date: '2016-05-03',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1516 弄'
		        }],
		    selectData: [{value: 0, text: '全部'}, {value: 1, text: '待付款'}, {value: 2, text: '审核中'}, {value: 3, text: '购买中'},
                    {value: 4, text: '已到期'}, {value: 5, text: '已终止'}, {value: 6, text: '已完成'}, {value: 7, text: '未通过'}]
			}
		},

		methods: {
			showToast () {
				return Promise.resolve()
					.then(() => {
						Toast.show({msg: '我是Toast', type: 'error', confirm: true})
					})
			},

			onBeforeClick (){
				return new Promise( function (resolve, reject) {
					setTimeout(function(){
						let flag = (Math.random()*2 + 1).toFixed(0);
						if(flag == 1){
							reject("onBeforeClick失败")
						}else{
							resolve("onBeforeClick成功");
						}
					}, 1000);
				})
			},

			onClick (){
				return new Promise( function (resolve, reject) {
					setTimeout(function(){
						let flag = (Math.random()*2 + 1).toFixed(0);
						if(flag == 1){
							reject("onClick失败")
						}else{
							resolve("onClick成功");
						}
					}, 1000);
				})
			},

			onAfterClick (){
				return new Promise( function (resolve, reject) {
					setTimeout(function(){
						let flag = (Math.random()*2 + 1).toFixed(0);
						if(flag == 1){
							reject("onAfterClick失败")
						}else{
							resolve("onAfterClick成功");
						}
					}, 1000);
				})
			},

			onBeforeClick2 (){
				return new Promise( function (resolve, reject) {
					setTimeout(function(){
						let flag = (Math.random()*2 + 1).toFixed(0);
						if(flag == 1){
							reject("onBeforeClick2失败")
						}else{
							resolve("onBeforeClick2成功");
						}
					}, 1000);
				})
			},

			onClick3 (){
				return new Promise( function (resolve, reject) {
					setTimeout(function(){
						let flag = (Math.random()*2 + 1).toFixed(0);
						if(flag == 1){
							reject("onClick3失败")
						}else{
							resolve("onClick3成功");
						}
					}, 1000);
				})
			},

			onAfterClick4 (){
				return new Promise( function (resolve, reject) {
					setTimeout(function(){
						let flag = (Math.random()*2 + 1).toFixed(0);
						if(flag == 1){
							reject("onAfterClick4失败")
						}else{
							resolve("onAfterClick4成功");
						}
					}, 1000);
				})
			}
		},

		ready (){
			// console.log(this);
		}
	}
</script>
<style type="text/css">
	.add{
		color: red;
	}
</style>