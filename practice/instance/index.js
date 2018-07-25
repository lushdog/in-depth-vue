import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>this is {{text}} </div>',
  data: {
    text: 0
  }
})
setInterval(() => {
  app.text += 1
}, 1000)

console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
console.log(app.$options)
app.$options.render = (h) => h('div', {}, 'this is render function')
console.log(app.$root === app)
console.log(app.$children)
console.log(app.$slot)
console.log(app.$scopedSlot)
console.log(app.$refs)
console.log(app.$isServer)

const unwatch = app.$watch('text', (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
setTimeout(() => {
  unwatch()
}, 2000)
app.$on('text', (v) => {
  console.log('text emited', v)
})
app.$emit('text', 1)
app.$forceUpdate()
