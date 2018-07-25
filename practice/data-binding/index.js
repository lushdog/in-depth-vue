import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      {{ isActive ? 'active' : 'notActive' }}
    </div>
  `,
  data: {
    isActive: false
  }
})
