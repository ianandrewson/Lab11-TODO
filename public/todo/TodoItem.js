import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const checkbox = dom.querySelector('input');
        checkbox.addEventListener('click', () => {
            todo.complete = checkbox.checked;
            onUpdate(todo);
        });

        
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
            <div class="todo-item">
                <input type="checkbox" id=${todo.task} ${todo.complete ? 'checked' : ''}>
                <p class=${todo.complete ? 'complete' : 'incomplete' }>${todo.task}</p>
            </div>
        `;
    }
}

export default TodoItem;