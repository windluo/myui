<template>
  <div class="Control2-selectbox" v-clickotherarea="hideSelectBox">
    <div class="value-container" :class="{selectShow:visible, default:value==='请选择'}" @click="showSelectBox">
      {{text}}
    </div>
    <div class="select-ul-container" v-show="visible" transition="expand">
      <ul class="select-ul">
        <li class="select-li" :class="{selectLiActived:currentLi === $index || defaultIndex === $index}" v-for="data in options" @click="handleGetCurrentLi(data, $index)">{{data.text}}</li>
      </ul>
    </div>
    <div class="select-arrow" :class="{show:visible}"></div>
  </div>
</template>

<script>
  import clickotherarea from '../../utils/clickotherarea'

  export default {
    name: 'selectBox',
    props: {
      options: {
        type: Array,
        default: () => []
      },
      visible: {
        type: Boolean,
        default: false
      },
      defaultIndex: {
        type: Number,
        default: null
      },
      onClick: {
        type: Function
      }
    },
    data () {
      return {
        currentLi: '',
        text: '请选择'
      }
    },
    directives: {
      clickotherarea
    },
    methods: {
      handleGetCurrentLi (data, index) {
        if (this.defaultIndex !== null) {
          this.defaultIndex = null
        }

        this.currentLi = index
        this.text = data.text
        this.visible = false
        if (typeof this.onClick === 'function') {
          this.onClick(data)
        }
      },
      showSelectBox () {
        this.visible = !this.visible
      },
      hideSelectBox () {
        this.visible = false
      },
      showAddEventListener () {
        let _this = this
        _this.showEventListener = function (e) {
          if (_this.$el && !_this.$el.contains(e.target)) {
            _this.visible = false
          }
        }

        document.addEventListener('click', _this.showEventListener)
      },
      showRemoveEventListener () {
        document.removeEventListener('click', this.showEventListener)
      }
    },
    watch: {
      // visible () {
      //   if (this.visible) {
      //     this.showAddEventListener()
      //   } else {
      //     this.showRemoveEventListener()
      //   }
      // }
    },
    ready () {
      if (this.defaultIndex !== null && this.defaultIndex < this.options.length) {
        this.text = this.options[this.defaultIndex].text
      }
    }
  }
</script>

<style lang="less">
  .Control2-selectbox{
    ul{
      padding: 0; 
      margin: 0;
    }
    li{
      list-style-type: none;
    }
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-size: 14px;
    .value-container{
      border: 1px solid #e5e5e5;
      width: 140px;
      line-height: 28px;
      padding: 6px 12px;
      border-radius: 5px;
      cursor: pointer;
      &.default{
        color: #999;
      }
    }
    .select-ul{
      width: 100%;
      background: #fff;
    }
    .select-ul-container{
      width: 100%;
      max-height: 200px;
      border: 1px solid #e5e5e5;
      overflow-x: hidden;
      overflow-y: auto!important;
      position: absolute;
      z-index: 900;
      box-shadow: 0 1px 6px rgba(0,0,0,.2);
    }
    .expand-transition {
      background-color: #fff;
      position: absolute;
      top: 44px;
      left: 0;
    }
    .expand-enter{
      animation: SlideUpIn 0.3s;
    }
    .expand-leave{
      animation: SlideUpOut 0.3s;
    }
    .select-li{
      color: #333;
      line-height: 1.6;
      padding: 6px 12px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover{
        color: lighten(#333, 10%);
        background: #f5f5f5;
      }
      &.selectLiActived{
        color: #fff;
        background: #5caeee;
      }
    }
    .select-arrow{
      width: 16px;
      height: 10px;
      position: absolute;
      top: 16px;
      right: 12px;
      background: url(./images/icon-arrow-down.png) 50% 50%;
      transition: all .3s ease;
      &.show{
        transform: rotate(180deg);
      }
    }
    @keyframes SlideUpIn {
      0% {
        opacity: 0;
        transform-origin: 0% 0%;
        transform: scaleY(.8);
      }
      100% {
        opacity: 1;
        transform-origin: 0% 0%;
        transform: scaleY(1);
      }
    }
    @keyframes SlideUpOut {
      0% {
        opacity: 1;
        transform-origin: 0% 0%;
        transform: scaleY(1);
      }
      100% {
        opacity: 0;
        transform-origin: 0% 0%;
        transform: scaleY(.8);
      }
    }
    @keyframes SlideDownIn {
      0% {
        opacity: 0;
        transform-origin: 100% 100%;
        transform: scaleY(.8);
      }
      100% {
        opacity: 1;
        transform-origin: 100% 100%;
        transform: scaleY(1);
      }
    }
    @keyframes SlideDownOut {
      0% {
        opacity: 1;
        transform-origin: 100% 100%;
        transform: scaleY(1);
      }
      100% {
        opacity: 0;
        transform-origin: 100% 100%;
        transform: scaleY(.8);
      }
    }
  }
</style>
