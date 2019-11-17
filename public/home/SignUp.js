import Component from '../Component.js';

class SignUp extends Component {
    onRender(dom) {
        const onSignup = this.props.onSignup;

        const signUpButton = dom.querySelector('#signup-submit');
        signUpButton.addEventListener('click', () => {
            const email = dom.querySelector('input[name=signup-email]').value;
            const password = dom.querySelector('input[name=signup-password').value;

            const user = {
                email,
                password
            };

            onSignup(user);
        });

    }
    renderHTML() {
        return /*html*/`
        <section>
            <h2>Sign Up</h2>
                <div class="sign-area">
                    <label name="signup-email">E-mail Address</label>
                        <input type="text" name="signup-email">
                </div>
                <div class="sign-area">
                    <label name="signup-password">Password</label>
                        <input name="signup-password" type="text">
                </div>
                <button id="signup-submit">Sign Up</button>
        </section>
        `;
    }
}

export default SignUp;