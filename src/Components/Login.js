function Login() {

    return (

        <div className="modal fade" id="loginForm" tabIndex="-1" role="dialog" aria-labelledby="loginFormLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">

                <div className="modal-content">
                    <div className="modal-header">

                        <h2 className="modal-title" id="loginFormLabel">Login</h2>

                        <div className="modal-body">

                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <form method="post" className="login-form webform" role="form">

                                <label htmlFor="username-input">Username</label>
                                <input type="text" className="form-control" name="cf-name" placeholder="John Doe" id="username-input" />

                                <label htmlFor="email-input">E-mail</label>
                                <input type="email" className="form-control" name="cf-email" placeholder="Johndoe@gmail.com" id="email-input" />

                                <button type="submit" className="form-control" id="submit-button" name="submit">Login</button>

                            </form>
                        </div>

                          <div className="modal-footer"></div>

                      </div>
                  </div>
              </div>
          </div>


    )

}

export default Login;