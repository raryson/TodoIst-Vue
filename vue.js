new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true
    }
  })

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      seen: true,
      message: 'Send something for your list',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    },
    methods : {
      appendToList : (message) => {
        app4.todos.push({ text: message })
      },
      removeFromList : (index) => {
        app4.todos.splice(index, 1)       
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })
