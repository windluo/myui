<style type="text/css">
	.add{
		color: red;
	}
</style>
<template>
	<div>
		<h1>button组件</h1>
		<mybutton 
			:on-before-click=onBeforeClick
			:on-click=onClick
			:on-after-click=onAfterClick
		>
		传入三个函数
		</mybutton>
		<mybutton
			:on-before-click=onBeforeClick2
		>	
		只有before
		</mybutton>
		<mybutton
			:on-click=onClick3
		>	
		只有click
		</mybutton>
		<mybutton
			:on-after-click=onAfterClick4
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
		<simple-table :data="tableData" :edit=1 :del=1>
		    <column data-key="date" name="日期" width="120px"></column>
		    <column data-key="name" name="姓名"></column>
		    <column data-key="address" name="地址"></column>
		    <column name="操作" ></column>
		</simple-table>
	</div>
</template>

<script>
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
		        }]
			}
		},

		methods: {
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
			console.log(this);
		}
	}
</script>