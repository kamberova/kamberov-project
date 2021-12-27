import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

function Register() {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                login(authData);

                navigate('/');
            });
    }
    return (
        <>
            <div className="membership-form"></div>

            <p>Are you a new member to my page?</p>

            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <form onSubmit={registerSubmitHandler} method="post" className="membership-form webform" role="form">
                <label htmlFor="email-input">E-mail</label>
                <input type="email" className="form-control" name="email" placeholder="johndoe@gmail.com" id="email" />

                <label htmlFor="phone-input">Password</label>
                <input type="tel" className="form-control" name="password" placeholder="yourPassword" required id="password" />

                <label htmlFor="phone-input">Repeat Password</label>
                <input type="tel" className="form-control" name="repeatPassword" placeholder="repeatPassword" required id="repeatPassword" />

                <button type="submit" className="form-control" id="submit-button" name="submit">Create an Account</button>
            </form>


        </>

    )

}

export default Register;