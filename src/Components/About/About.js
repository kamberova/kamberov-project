function About() {

    return (

        <section href="about" className="about section" id="about">
            <div className="container">
                <div className="row">

                    <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                        <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Hello, I am Kambera</h2>

                        <p data-aos="fade-up" data-aos-delay="400"> SOME ABOUT ME TEXT</p>


                    </div>

                    <div className="ml-lg-auto col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
                        <div className="team-thumb">
                            <img src="/images/team/team-image.jpg" className="img-fluid" alt="Trainer" />

                            <div className="team-info d-flex flex-column">

                                <h3>Radoslav Kamberov</h3>
                                <span>Sertified Table Tennis Coach</span>

                                <ul className="social-icon mt-3">
                               
                                    <li><a href= "https://www.facebook.com/kamberov" className="fa fa-facebook"></a></li>
                                    <li><a href="#" className="fa fa-twitter"></a></li>
                                    <li><a href="#" className="fa fa-instagram"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;