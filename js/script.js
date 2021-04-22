//console.log('Hello');
/**
 * ToDo list Vue
 */
const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Portare il cane',
                completed: false,
            },
            {
                text: 'Fare la spesa',
                completed: false,
            },
            {
                text: 'Pagare le bollette',
                completed: false,
            },
            {
                text: 'Fare gli esercizi',
                completed: false,
            },
            {
                text: 'Andare al mare',
                completed: false,
            },
            {
                text: 'Fare il bucato',
                completed: false,
            },
        ],
        newTodo: '',  // così metti dentro il nuovo mex
        editTodo: {
            visibility: false,
            text: '',
            index: 0,
        }
    },
    methods: {
        addTodo() {
             console.log('Aggiunta nuona riga');
              // ! fa il contrario di cià che trova
            if(this.newTodo !== '') {
                 
                // scrivere tutto ciò che c'era prima 
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';
                  //$richiamare il ref ma deve essere plurale e deve avere $ 
                this.$refs.todoInput.focus();
            }
        },


       /**
        * rimuovi il todo dalla lista con l'index (ind)
        * @param {numero} index 
        */

        removeTodo(index) {
            // controlla
           console.log(index);
           // splice , 1 perche prende 1 solo elemento
           this.todos.splice(index, 1);
        },

        // stato della todo 

        updateStatus(index) {
            this.todos[index].completed = ! this.todos[index].completed;
        },


        // per vedere la box 
        showEdit(index) {
            this.editTodo.text = this.todos[index].text;
            this.editTodo.index = index;
            this.editTodo.visibility = true;
        },

        updateTodo() {
            console.log(this.editTodo);

            this.todos[this.editTodo.index].text = this.editTodo.text;
            
            this.editTodo.text = false;
            this.editTodo.index = '';
            this.editTodo.visibility = 0;
        }

    }
});