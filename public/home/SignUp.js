import Component from '../Component.js';

class SignUp extends Component {
    onRender() {

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
                <button id="signup-submit">Sign In</button>
        </section>
        `;
    }
}

export default SignUp;