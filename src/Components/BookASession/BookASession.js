import { useNavigate } from 'react-router-dom';
import * as bookService from '../../services/bookService';
import { useAuthContext } from '../../contexts/AuthContext';

function BookASession() {

    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onBookTraining = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let hour = formData.get('hour');
        let type = formData.get('type');

        bookService.create({
            hour,
            type
        }, user.accessToken)
            .then(result => {
                navigate('/my-sessions');
            })
    }

    return (

        <section href="book-a-session" className="schedule section" id="book-a-session">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center">
                        <h6 data-aos="fade-up">My weekly schedule</h6>

                        <h2 className="text-white" data-aos="fade-up" data-aos-delay="200"> Available Training-hours Timetable</h2>
                    </div>


                    <div className="col-lg-12 py-5 col-md-12 col-12">
                        <section id="create-page" className="create">
                            <form id="create-form" onSubmit={onBookTraining} method="POST">
                                <fieldset>
                                    <table className="table table-bordered table-responsive schedule-table" data-aos="fade-up" data-aos-delay="300">

                                        <tbody>
                                            {/* <tr className="thead-light"> */}
                                            <tr>
                                                <th><i className="text-white thead-light fa fa-calendar"></i></th>
                                                <th>Mon</th>
                                                <th>Tue</th>
                                                <th>Wed</th>
                                                <th>Thu</th>
                                                <th>Fri</th>
                                            </tr>

                                            <tr>
                                                <td><small>7:00 am</small></td>
                                                <td>
                                                    <strong name="type">Personal Trainig</strong>
                                                    <span name="hour">7:00 am - 9:00 am</span>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <strong name="type">Kids Training</strong>
                                                    <span name="hour">7:00 am - 9:00 am</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><small>9:00 am</small></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <strong name="type">Showcase</strong>
                                                    <span name="hour">8:00 am - 9:00 am</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><small>11:00 am</small></td>
                                                <td></td>
                                              <td>
                                                    <strong name="type">Team building session</strong>
                                                    <span name="hour">11:30 am - 3:30 pm</span>
                                                </td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td><small>2:00 pm</small></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <strong name="type">Personal Training</strong>
                                                    <span name="hour">2:00 pm - 7:00 pm</span>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </fieldset>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default BookASession;