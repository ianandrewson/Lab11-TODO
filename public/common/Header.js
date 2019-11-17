import Component from '../Component.js';

class Header extends Component {
    onRender(dom){
        const user = localStorage.getItem('USER');
        if (user) {
            const logoutButton = document.createElement('button');
            logoutButton.textContent = 'logout';
            dom.appendChild(logoutButton);
            logoutButton.addEventListener('click', () => {
                localStorage.removeItem('TOKEN');
                localStorage.removeItem('USER');
                this.update();
                window.location = '/index.html';

            });
        }
    }
    renderHTML() {
        const title = this.props.title || 'Todos';

        return /*html*/`
            <header>
                <img class="logo" src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
                <h1>${title}</h1>
                <nav>
                    <a href="./">Home</a>
                    <a href="./todo.html">Todos</a>
                </nav>
            </header>
        `;
    }
}

export default Header;