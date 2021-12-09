function Contacts() {

  return (

    <section href="/contact" className="contact section" id="contact">
      <div className="container">
        <div className="row">

          <div className="ml-auto col-lg-5 col-md-6 col-12">
            <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">Feel free to contact me</h2>

            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <form  method="post" className="contact-form webform" data-aos="fade-up" data-aos-delay="400" role="form">
              <input type="text" className="form-control" name="cf-name" placeholder="Name" />

              <input type="email" className="form-control" name="cf-email" placeholder="Email" />

              <textarea className="form-control" rows="5" name="cf-message" placeholder="Message"></textarea>

              <button type="submit" className="form-control" id="submit-button" name="submit">Send Message</button>
            </form>
          </div>

          <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
            <h2 className="mb-4" data-aos="fade-up" data-aos-delay="600">Where you can <span>find us</span></h2>

            <p data-aos="fade-up" data-aos-delay="800"><i className="fa fa-map-marker mr-1"></i> 120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil</p>

            <div className="google-map" data-aos="fade-up" data-aos-delay="900">
              {/* <iframe src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="1920px" height="250px" frameBorder="0px" style="border:0px;" allowFullScreen=""></iframe> */}
            </div>
          </div>

        </div>
      </div>
    </section>

  )

}

export default Contacts;