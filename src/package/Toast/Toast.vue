<!--
// 默认显示无按钮提示
// 需要按钮，配置confirm为true
// 
-->

<template>
	
</template>

<script>
	import Vue from 'vue'

	let Toast = {
		el: document.body.appendChild(document.createElement('div')),
		template: `
			<div class="comm-tips-c">
				<div class="comm-tips" v-show="showFlag" transition="toast" :class="{success:type==='success', error:type==='error'}">
					<p id="commmsg" class="comm-msg">{{msg}}</p>
					<div class="confirm-c" v-if="confirm">
						<button class="tip-btn cancel-btn" @click="cancelToast">取消</button>
						<button class="tip-btn confirm-btn" @click="confirmToast">确定</button>
					</div>
				</div>
			</div>
		`,
		data () {
			return {
				showFlag: false,
				type: '',
				confirm: false,
				msg: '',
				confirmBack: '',
				hideTime: ''
			}
		},
		methods: {
			show (options) {
				// msg: 提示信息
				// type: 提示类型，对应样式
				// confirm：是否需要按钮
				this.msg = options.msg
				this.type = this.switchType(options.type)
				this.confirm = options.confirm === undefined ? false : options.confirm
				this.confirmBack = options.confirmBack
				this.hideTime = options.hideTime || 2400
				this.showFlag = true

				setTimeout(() => {
					this.showFlag = false
				}, this.hideTime)
			},
			switchType (val) {
				let res = ''
				switch (val) {
					case '0':case 0:case false: case 'error': res = 'error';break;
					default: res = 'success';break;
				}

				return res
			},
			cancelToast () {
				this.showFlag = false
			},
			confirmToast () {
				if (this.confirmBack && this.confirmBack === "function") {
					this.confirmBack()
				}
				this.showFlag = false
			}
		}
	}

	let toast = new Vue(Toast)
	export default toast
</script>

<style lang="less">
.comm-tips-c{
	width: 100%;
	height: 0;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999999;
	.comm-tips{
		width: 300px;
		-webkit-box-shadow: 1px 2px 10px #ccc;
		box-shadow: 1px 2px 10px #ccc;
		margin: 0 auto;
		text-align: center;
		font-size: 16px;
	}

	.toast-transition {
	  -webkit-transition: all linear 600ms;
		transition: all linear 600ms;
	}

	.toast-enter,
	.toast-leave{
		transform: translateY(-100%);
	}

	.comm-tips.success{
		background: #DEFCD5;
		border-color: #52A954;
		color: #52A954;
	}

	.comm-tips.confirm{
		height: auto;
	}

	.comm-tips.error{
		background: #F1D7D7;
		border-color: #A95252;
		color: #A95252;
	}

	.comm-msg{
		padding: 8px 10px;
		margin: 0;
	}

	.confirm-c{
	  padding: 6px 10px;
	}

	.tip-btn{
		color: #fff;
		padding: 6px 10px;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.confirm-btn{
		background: #2db7f5;
		&:hover{
			background: lighten(#2db7f5, 2%)
		}
		&:active{
			background: lighten(#2db7f5, 4%)
		}
	}

	.cancel-btn{
		background: #ff0000;
		&:hover{
			background: lighten(#ff0000, 2%)
		}
		&:active{
			background: lighten(#ff0000, 4%)
		}
	}
}
</style>