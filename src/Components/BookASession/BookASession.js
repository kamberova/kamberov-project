function BookASession() {

    return (

        <section href="book-a-session" className="schedule section" id="book-a-session">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center">
                        <h6 data-aos="fade-up">My weekly schedule</h6>

                        <h2 className="text-white" data-aos="fade-up" data-aos-delay="200">Trainings Timetable</h2>
                    </div>

                    <div className="col-lg-12 py-5 col-md-12 col-12">
                        <table className="table table-bordered table-responsive schedule-table" data-aos="fade-up" data-aos-delay="300">

                            {/* <thead className="thead-light"> */}
                            <th><i className="fa fa-calendar"></i></th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            {/* </thead> */}

                            <tbody>
                                <tr>
                                    <td><small>7:00 am</small></td>
                                    <td>
                                        <strong>Personal Trainig</strong>
                                        <span>7:00 am - 9:00 am</span>
                                    </td>
                                    <td>
                                        <strong>Team building session</strong>
                                        <span>7:00 am - 9:00 am</span>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <strong>Kids Training</strong>
                                        <span>7:00 am - 9:00 am</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td><small>9:00 am</small></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <strong>Personal Trainig</strong>
                                        <span>8:00 am - 9:00 am</span>
                                    </td>
                                    <td>
                                        <strong>Team building session</strong>
                                        <span>8:00 am - 9:00 am</span>
                                    </td>
                                    <td></td>
                                    <td>
                                        <strong>Showcase</strong>
                                        <span>8:00 am - 9:00 am</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td><small>11:00 am</small></td>
                                    <td></td>
                                    <td>
                                        <strong>Personal Trainig</strong>
                                        <span>11:00 am - 2:00 pm</span>
                                    </td>
                                    <td>
                                        <strong>Team building session</strong>
                                        <span>11:30 am - 3:30 pm</span>
                                    </td>
                                    <td></td>
                                    <td>
                                        <strong>Kids Training</strong>
                                        <span>11:50 am - 5:20 pm</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td><small>2:00 pm</small></td>
                                    <td>
                                        <strong>Personal Trainig</strong>
                                        <span>2:00 pm - 4:00 pm</span>
                                    </td>
                                    <td>
                                        <strong>Team building session</strong>
                                        <span>3:00 pm - 6:00 pm</span>
                                    </td>
                                    <td></td>
                                    <td>
                                        <strong>Kids Training</strong>
                                        <span>6:00 pm - 9:00 pm</span>
                                    </td>
                                    <td></td>
                                    <td>
                                        <strong>Showcase</strong>
                                        <span>5:00 pm - 7:00 pm</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>

    )

}

export default BookASession;