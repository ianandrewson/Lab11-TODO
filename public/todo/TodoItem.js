import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
            <div class="todo-item">
                <input type="checkbox" id=${todo.task} checked=${todo.complete}>
                <p>${todo.task}</p>
            </div>
        `;
    }
}

export default TodoItem;