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

        console.log(hour, type);

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
                            <form id="create-form" onClick={onBookTraining} method="GET">
                                <table className="table table-bordered table-responsive schedule-table" data-aos="fade-up" data-aos-delay="300">

                                    <tbody>

                                        <tr>
                                            <th><i className="text-white thead-light fa fa-calendar"></i></th>
                                        </tr>

                                        <tr>
                                            <td>

                                                <span id="hour" name="hour"><strong id="type" name="type">Personal Trainig</strong>Mon 7:00 am - 9:00 am</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong name="type">Showcase</strong>
                                                <span name="hour">Fri 8:00 am - 9:00 am</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong name="type">Team building session</strong>
                                                <span name="hour">Tue 11:30 am - 3:30 pm</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong name="type">Personal Training</strong>
                                                <span name="hour">Wed 2:00 pm - 7:00 pm</span>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default BookASession;