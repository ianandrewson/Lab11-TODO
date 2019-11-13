import Component from '../Component.js';

class AddTodo extends Component {

    onRender(form) {
        const onAdd = this.props.onAdd;
        
        form.addEventListener('submit', async event => {
            event.preventDefault();
            const todoToAdd = {
                task: form.querySelector('input').value,
                complete: false
            };
            const returnedToDo = await onAdd(todoToAdd);

            try {
                await onAdd(catType);
                // this only runs if no error:
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // nothing to do as App will show error,
                // but will keep form from clearing...
            }
        });
    }

    renderHTML() {
        return /*html*/`
            <form>
                <input type="text" id="add-todo">
                <button>Add Todo</button>
            </form>
        `;
    }
}

export default AddTodo;