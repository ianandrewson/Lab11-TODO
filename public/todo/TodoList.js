import Component from '../Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    
    onRender(list) {

        const todos = this.props.todos;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        todos.forEach(todo => {
            const todoItem = new TodoItem({ todo });
            console.log(todoItem);
            const todoItemDOM = todoItem.renderDOM();
            list.appendChild(todoItemDOM);

        });

        
    }
    renderHTML() {
        return /*html*/`
            <section id="todo-list"></section>
        `;
    }
}

export default TodoList;
