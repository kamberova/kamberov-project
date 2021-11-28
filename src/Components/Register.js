function Register() {

    return (

        <div className="modal fade" id="registerForm" tabIndex="-1" role="dialog" aria-labelledby="registerFormLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">

                <div className="modal-content">
                    <div className="modal-header">

                        <h2 className="modal-title" id="registerFormLabel">Register Form</h2>

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">

                        <form className="register-form webform" role="form">
                            <label htmlFor="username-input">Username</label>
                            <input type="text" className="form-control" name="user" placeholder="JohnDoe" id="username-input" />

                            {/* <label htmlFor="name-input">First and last name</label> */}
                            {/* <input type="text" className="form-control" name="name" placeholder="John Doe" id="name-input" /> */}

                            <label htmlFor="email-input">E-mail</label>
                            <input type="email" className="form-control" name="email" placeholder="johndoe@gmail.com" id="email-input" />

                            <label htmlFor="phone-input">Phone nummber</label>
                            <input type="tel" className="form-control" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required id="phone-input" />

                            <button type="submit" className="form-control" id="submit-button" name="submit">Create an Account</button>

                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="signup-agree" />
                                <label className="custom-control-label text-small text-muted" htmlFor="signup-agree">I agree to the <a href="#">Terms &amp; Conditions</a>
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer"></div>

                </div>
            </div>
        </div>

    )

}

export default Register;