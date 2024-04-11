const { createApp, ref } = Vue

createApp({
  data() {
    return {
      nav: false
    }
  },
  methods: {
    scroll() {
      console.log('d');
    },
    goto(link) {
      window.location.href = link
    }
  },
}).mount('#app')
