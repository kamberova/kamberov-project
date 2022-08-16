import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import BookNowButton from "../Layout/BookNowButton";
import * as bookService from '../../services/bookService';

function BookASession() {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onBookTraining = (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);

        let hour = formData.get('hour');
        let type = formData.get('type');
        let price = formData.get('price');

        console.log(hour, type, price);


        bookService.create({
            hour,
            type,
            price
        }, user.accessToken)
            .then(result => {
                navigate('/my-sessions');
            });

    };



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
                                                <strong id="name" name="type">{user.type}</strong>
                                                <span id="hour" name="hour">{user.hour}</span>
                                                <span id="price" name="price">{user.price}</span>
                                                <BookNowButton />
                                                {/* <button className='custom-btn hover focus bg-color book-a-session' >Book now</button> */}
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

    );

};

export default BookASession;