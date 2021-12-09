function Coaching() {

    return (

        <section className="class section" id="coaching">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-5">
                        <h2 data-aos="fade-up" data-aos-delay="200">Our Training Classes</h2>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
                        <div className="class-thumb">
                            <img src="/images/team/team-image.jpg" className="img-fluid" alt="Class" />

                            <div className="class-info">
                                <h3 className="mb-1">Personal Training</h3>

                                <span><strong>Trained by </strong>Radoslav Kamberov</span>

                                <span className="class-price">$50</span>

                                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
                        <div className="class-thumb">
                            <img src="/images/class/table-tennis-team.jpg" className="img-fluid" alt="Class" />

                            <div className="class-info">
                                <h3 className="mb-1">Team Building</h3>

                                <span><strong>Trained by </strong>our Table Tennis Team</span>

                                <span className="class-price">$66</span>

                                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                        <div className="class-thumb">
                            <img src="/images/class/table-tennis-showcase.jpg" className="img-fluid" alt="Class" />

                            <div className="class-info">
                                <h3 className="mb-1">Showcase</h3>

                                <span><strong>Trained by</strong> Radoslav Kamberov</span>

                                <span className="class-price">$75</span>

                                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Coaching;