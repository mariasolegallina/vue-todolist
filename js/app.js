const {createApp} = Vue

createApp({
    data() {
        return {
            inputValue: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],

        }
    },
    methods: {
        addTodo() {
            // console.log('click sul +')

            const newTodo = {
                text: this.inputValue,
                done: false,
            };
            
            this.todos.push(newTodo);

        }
    },
    mounted() {
        console.log("OK");
    }

}).mount('#app')