import Component from '../Component.js';
import TodoItem from './TodoItem.js';
import { addTodo } from '../services/todo-api.js';

class TodoList extends Component {
    
    onRender(list) {

        const todos = this.props.todos;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const addTodoButton = list.querySelector('button');
        addTodoButton.addEventListener('click', async event => {
            event.preventDefault();
            const todoToAdd = {
                task: list.querySelector('input').value,
                complete: false
            };
            await addTodo(todoToAdd);
        });

        todos.forEach(todo => {
            const todoItem = new TodoItem({ todo });
            const todoItemDOM = todoItem.renderDOM();
            list.appendChild(todoItemDOM);

        });

        
    }
    renderHTML() {
        return /*html*/`
        <div class="todo-list">
            <input type="text" id="add-todo">
            <button>Add Todo</button>
            <section></section>
        <div>
        `;
    }
}

export default TodoList;
