import Component from '../Component.js';
import Header from '../common/Header.js';
import SignUp from '../home/SignUp.js';
import SignIn from './SignIn.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const mainArea = dom.querySelector('main');

        const signUp = new SignUp({});
        const signUpDOM = signUp.renderDOM();
        mainArea.appendChild(signUpDOM);

        const signIn = new SignIn({});
        const signInDOM = signIn.renderDOM();
        mainArea.appendChild(signInDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                </main>
            </div>
        `;
    }
}

export default App;