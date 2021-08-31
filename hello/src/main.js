// 导入vue
import { createApp } from 'vue'

// 导入ElementPlus 组件
import ElementPlus from 'element-plus'

// 导入ElementPlus 样式
import 'element-plus/dist/index.css'

// 导入ElementPlus 中文组件
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 导入主UI组件
import App from './App.vue'

// 创建app
const app = createApp( App );

// 使用ElementPlus
app.use( ElementPlus, { locale: zhCn } );

// 挂载到app节点
app.mount( '#app' );
