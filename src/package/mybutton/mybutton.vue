<style>
	p{margin: 0; margin-top: 10px; color: #999; font-size: 13px;}

	.btn{
		border: 1px solid #2db7f5;
		background: #2db7f5;
		color: #fff;
		font-size: 14px;
		padding: 6px 14px;
		outline: none;
		margin-right: 20px;
	}

	.btn.disabled{
		border-color: #aaa;
		background: #aaa;
	}

	.btn.del{
		background: red;
		border-color: red;
	}
</style>

<template>
	<button class="btn" :class="{disabled: btndisabled, del: del==1}" @click="handlerClick"><slot></slot></button>
</template>

<script>
	export default{
		name: 'mybutton',
		
		props: {
			del: {
				type: Number,
				default: 0
			},

			onBeforeClick: {
				type: Function,
				default (){
					return Promise.resolve('默认onBeforeClick');
				}
			},

			onClick: {
				type: Function,
				default (){
					return Promise.resolve('默认onClick');
				}
			},

			onAfterClick: {
				type: Function,
				default (){
					return Promise.resolve('默认onAfterClick');
				}
			}
		},

		data (){
			return {
				btndisabled: false
			}
		},

		methods: {
			handlerClick (){
				if(this.btndisabled) return;
				this.btndisabled = true;

				this.onBeforeClick()
					.then(this.onClick)
					.then(this.onAfterClick)
					.then( (reason) => {
						console.log(this.btntxt + '：' + reason);
						this.btndisabled = false;
					})
					.catch( (reason) => {
						console.log(this.btntxt + '：' + reason);
						this.btndisabled = false;
					});
			}
		},

		ready (){

		}
	}
</script>