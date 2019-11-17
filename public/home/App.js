import Component from '../Component.js';
import Header from '../common/Header.js';
import SignUp from '../home/SignUp.js';
import SignIn from './SignIn.js';
import { signin, signup, success } from '../services/todo-api.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const user = localStorage.getItem('USER');

        const mainArea = dom.querySelector('main');

        const signUp = new SignUp({
            onSignup: async newUser => {
                try {
                    const user = await signup(newUser);
                    success(user);
                    console.log(user);
                }
                catch (err){
                    console.log(err);
                }
            } });

        const signUpDOM = signUp.renderDOM();
        mainArea.appendChild(signUpDOM);

        const signIn = new SignIn({
            onSignin: async credentials => {
                try {
                    const loadedUser = await signin(credentials);
                    success(loadedUser);
                }
                catch (err) {
                    console.log(err);
                }
            } });
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