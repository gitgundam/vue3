# 使用
安装完本组件库之后在main.ts中引入样式文件

```
import 'h-vue3-ui/package/lib/h.css'
```

# Vue单文件组件中使用
```
<template>
  <Button>按钮</Button>
</template>

<script>
import {Button} from 'h-vue3-ui'
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>
```