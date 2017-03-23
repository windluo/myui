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

<style lang="less">
	.btn{
		border: 1px solid #2db7f5;
		background: #2db7f5;
		color: #fff;
		font-size: 14px;
		padding: 6px 14px;
		outline: none;
		margin-right: 20px;
		cursor: pointer;
		-webkit-transition: background ease .3s;
		transition: background ease .3s;
		&:hover{
			background: lighten(#2db7f5, 4%);
		}
		&:active{
			background: lighten(#2db7f5, 10%);
		}
	}

	.btn.disabled{
		border-color: #aaa;
		background: #aaa;
	}

	.btn.del{
		background: #ff0000;
		border-color: #ff0000;
		&:hover{
			background: lighten(#ff0000, 12%);
		}
		&:active{
			background: lighten(#ff0000, 20%);
		}
	}
</style>