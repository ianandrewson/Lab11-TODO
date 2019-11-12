import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        // const todo = this.props.todo;
        // const onUpdate = this.props.onUpdate;
        // const onRemove = this.props.onRemove;

        
    }

    renderHTML() {
        const todoItem = this.props.todo;

        return /*html*/`
            <div class="todo-item">
                <input type="checkbox" id=${todoItem.task} checked=${todoItem.complete}>
                <p>${todoItem.task}</p>
            </div>
        `;
    }
}

export default TodoItem;