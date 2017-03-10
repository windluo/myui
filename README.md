### 说明
基于vuejs1.x写的可复用组件
### Button组件
#### onBeforeClick
>function类型，配置点击前事件。默认返回Promise.resolve

#### onClick
>function类型，配置点击事件。默认返回Promise.resolve

#### onAfterClick
>function类型，配置点击后事件。默认返回Promise.resolve

—————————————————————————————————————————————————

### simpleTable组件
需要引入column.vue
#### data
> table的数据

#### dataKey
> 当列属性值

#### name
> 对应dataKey列的th

#### align
> 设置text-align

#### width
> 设置宽度

#### style
> 批量设置样式

—————————————————————————————————————————————————

### selectBox组件
#### options
> 列表数据，Array类型

#### visible
> 列表是否可见，默认false

#### defaultIndex
> 默认显示项

#### onClick
> 列表项选中的回调函数
