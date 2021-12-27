
function Home() {

    return (

        <div>
            <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">

                <div className="bg-overlay"></div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-10 mx-auto col-12">
                            <div className="hero-text mt-5 text-center">

                                <h1 className="text-white" data-aos="fade-up" data-aos-delay="500">Upgrade your table tennis skills with me!</h1>

                                <a href="/about" className="text-primary-color" data-aos="fade-up" data-aos-delay="600">Learn more about me</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home;