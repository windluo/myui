<template>
	<mybutton 
		btntxt='传入三个函数'
		:on-before-click=onBeforeClick
		:on-click=onClick
		:on-after-click=onAfterClick
	>
	</mybutton>
	<mybutton
		btntxt='只有before'
		:on-before-click=onBeforeClick2
	>	
	</mybutton>
	<mybutton
		btntxt='只有click'
		:on-click=onClick3
	>	
	</mybutton>
	<mybutton
		btntxt='只有after'
		:on-after-click=onAfterClick4
	>	
	</mybutton>
	<mybutton
		btntxt='都没有'
	>	
	</mybutton>
</template>

<script>
	import mybutton from './comms/mybutton.vue';

	export default{
		components: {
			mybutton
		},

		data (){
			return {

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
		}
	}
</script>