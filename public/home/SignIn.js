import Component from '../Component.js';

class SignIn extends Component {
    onRender(dom){
        const onSignin = this.props.onSignin;

        const signInButton = dom.querySelector('#signin-submit');
        signInButton.addEventListener('click', () => {
            console.log('signin button clicked');
            onSignin();
        });
    }
    renderHTML(){
        return /*html*/`
            <section>
                <br>
                <p>---------OR---------</p>
                <br>
                <h2>Sign In</h2>
                <div class="sign-area">
                    <label name="signin-email">E-mail Address</label>
                        <input type="text" name="signin-email">
                </div>
                <div class="sign-area">
                    <label name="signin-password">Password</label>
                        <input name="signin-password" type="text">
                </div>
                <button id="signin-submit">Sign In</button>
            </section>
        `;
    }
}

export default SignIn;