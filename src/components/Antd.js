import Vue from 'vue'
import { Table } from 'ant-design-vue'

const components = [Table]

components.forEach(component => {
  Vue.use(component)
})
