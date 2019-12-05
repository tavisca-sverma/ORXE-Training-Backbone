
   var TodoItemView = Backbone.View.extend({ 
     tagName: 'tr',
     template: _.template($('#item-template').html()),
     initialize: function(){
     },
     render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
     }
    });
  

    var TodoListView = Backbone.View.extend({
    el: '#todo-list',
    initialize: function(){
     this.render();
    },
    render: function(){

        this.model.each((item) => {
            const todoItemView = new TodoItemView({model:item});
            this.$el.append(todoItemView.render().$el);
        }, this);
        this.$el.html(`<table><tr><th></th><th>Task</th><th>Status</th><tr>${this.$el.html()}</table>`);
    }

    });

 

    var TodoItemModel = Backbone.Model.extend({ 
        defaults: {
        content: '',
        status: false
      }
    });

    var TodoList = Backbone.Collection.extend({
        model: TodoItemModel,
    });
    
    var todoList = new TodoList();
    
    var task1 = new TodoItemModel({content:'Go to gym'});
    var task2 = new TodoItemModel({content:'Buy fruits'});
    var task3 = new TodoItemModel({content:'Learn Redux'});
    todoList.add(task1);
    todoList.add(task2);
    todoList.add(task3);
    var todoItemView = new TodoListView({model:todoList});