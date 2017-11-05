new Vue({
    el: '#header',
    data: {
      message: 'Welcome to TodoIst'
    }
  })


  var app = new Vue({
    el: '#app',
    data: {
      seen: true,
      message: "",
      todos: objectTrue
    },
    methods : {
      appendToList : (message) => {
        objectMessage = {"text" :  message}

        $.ajax({
          url: "add",
          method: "POST",
          data: objectMessage
        }).done(function() {
          app.todos.push({ text: message })
        });
      
                
      },
      removeFromList : (index, message) => {
        objectMessage = {"delete" :  message}
        $.ajax({
          url: "remove",
          method: "POST",
          data: objectMessage
        }).done(function() {
          app.todos.splice(index, 1)  
        })
      
            
      }
    }
  })

