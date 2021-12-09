function Login() {

    return (


        <>

            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <form method="post" className="login-form webform" role="form">

                <label htmlFor="username-input">Username</label>
                <input type="text" className="form-control" name="cf-name" placeholder="John Doe" id="username-input" />

                <label htmlFor="email-input">E-mail</label>
                <input type="email" className="form-control" name="cf-email" placeholder="Johndoe@gmail.com" id="email-input" />

                <button type="submit" className="form-control" id="submit-button" name="submit">Login</button>

            </form>
        </>


        // <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
        //     <p data-aos="fade-up" data-aos-delay="200">Already have an account?</p>
        //     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        //     <a href="#" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#loginForm">Login</a>

        //     <p data-aos="fade-up" data-aos-delay="200">Are you new to my page?</p>
        //     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        //     <a href="#" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#registerForm">Create an account</a>
        // </div>

    )

}

export default Login;