### 说明
基于vuejs1.x写的可复用组件
### Button组件
#### btntxt
> string类型，配置按钮文本。默认值 '点击'

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