import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import * as authService from '../../services/authService';

function Login() {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                addNotification('You logged in successfully', types.success);
                navigate('/');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    }

    return (

        <>

            <div className="membership-form">
            <p>Already have an acoount?</p>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <form onSubmit={onLoginHandler} method="post" className="login-form webform" role="form">
                    <label htmlFor="email-input">E-mail</label>
                    <input type="email" className="form-control" name="email" placeholder="Johndoe@gmail.com" id="email-input" />

                    <label htmlFor="username-input">Password</label>
                    <input type="text" className="form-control" name="password" placeholder="1234" id="password-input" />

                    <button type="submit" className="form-control" id="submit-button" name="submit">Login</button>

                </form>

            </div>
        </>

    )

}

export default Login;